import { NextResponse } from "next/server";
import { haversine } from "@/lib/geo";
import { getLokasiById, getKegiatan, getPresensi, addPresensi } from "@/lib/presensi-store";
import { isValidAnggota } from "@/data/anggota";
import { cookies, headers } from "next/headers";
import fs from "fs";
import path from "path";

function getClientIp(h: Headers) {
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") || "local";
}

function saveDitolak(row: unknown) {
  const p = path.join(process.cwd(), "data", "presensi-ditolak.json");
  let arr: unknown[] = [];
  try { if (fs.existsSync(p)) arr = JSON.parse(fs.readFileSync(p, "utf-8")); } catch {}
  arr.unshift(row);
  fs.writeFileSync(p, JSON.stringify(arr, null, 2));
}

export async function GET(req: Request) {
  const c = await cookies();
  const sessionNim = c.get("hmsk_nim")?.value;
  const { searchParams } = new URL(req.url);
  const qNim = searchParams.get("nim");

  // Hanya izinkan lihat presensi milik sendiri, kecuali admin
  const isAdmin = c.get("admin_pin")?.value === "ok";
  if (!sessionNim && !isAdmin) return NextResponse.json({ error: "Belum login" }, { status: 401 });

  const all = getPresensi();
  if (isAdmin && !qNim) return NextResponse.json(all);
  const nim = qNim || sessionNim;
  return NextResponse.json(all.filter((p) => p.nim === nim));
}

export async function POST(req: Request) {
  const serverNow = Date.now();
  const body = await req.json();
  const { lat, lng, accuracy, kegiatanId } = body;

  const c = await cookies();
  const nim = c.get("hmsk_nim")?.value;
  const rawNama = (c.get("hmsk_nama")?.value || body.nama || "").trim();
  const nama = rawNama;

  if (!nim) return NextResponse.json({ error: "Belum login. Isi NIM dulu." }, { status: 401 });
  if (!nama || nama.length < 3) return NextResponse.json({ error: "Nama wajib (min 3 huruf)" }, { status: 400 });
  if (nama.toLowerCase() === nim.toLowerCase()) return NextResponse.json({ error: "Nama tidak boleh sama dengan NIM" }, { status: 400 });
  if (!isValidAnggota(nim, nama)) return NextResponse.json({ error: "NIM+Nama tidak cocok allowlist (identitas asli)" }, { status: 403 });
  if (typeof lat !== "number" || typeof lng !== "number" || Number.isNaN(lat) || Number.isNaN(lng))
    return NextResponse.json({ error: "Lokasi tidak valid" }, { status: 400 });
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180)
    return NextResponse.json({ error: "Koordinat di luar rentang" }, { status: 400 });

  const acc = typeof accuracy === "number" ? accuracy : 9999;
  if (acc > 100) {
    return NextResponse.json({ error: `Akurasi GPS buruk (${Math.round(acc)}m). Coba di luar ruangan / aktifkan High Accuracy.` }, { status: 400 });
  }

  const kegiatan = getKegiatan().find((k) => k.id === kegiatanId) || getKegiatan().find((k) => k.isActive) || getKegiatan()[0];
  if (!kegiatan) return NextResponse.json({ error: "Tidak ada kegiatan aktif" }, { status: 400 });

  const lokasi = getLokasiById(kegiatan.lokasiId);
  if (!lokasi) return NextResponse.json({ error: "Lokasi kegiatan tidak ditemukan" }, { status: 400 });

  const mulai = new Date(kegiatan.jamMulai).getTime();
  const selesai = new Date(kegiatan.jamSelesai).getTime();
  if (Number.isNaN(mulai) || Number.isNaN(selesai)) return NextResponse.json({ error: "Jam kegiatan tidak valid" }, { status: 500 });

  if (serverNow < mulai - 15 * 60 * 1000) {
    return NextResponse.json({ error: `Presensi belum dibuka. Dibuka ${new Date(mulai).toLocaleString("id-ID")}` }, { status: 400 });
  }
  if (serverNow > selesai + 60 * 60 * 1000) {
    return NextResponse.json({ error: "Presensi sudah ditutup" }, { status: 400 });
  }

  const jarak = haversine(lat, lng, lokasi.lat, lokasi.lng);
  const radius = lokasi.radiusMeters;

  // duplicate check timezone-safe: YYYY-MM-DD UTC slice
  const today = new Date(serverNow).toISOString().slice(0, 10);
  const all = getPresensi();
  const dup = all.find((p) => p.nim === nim && p.kegiatanId === kegiatan.id && p.createdAt.slice(0, 10) === today);
  if (dup) return NextResponse.json({ error: "Kamu sudah presensi hari ini untuk kegiatan ini" }, { status: 409 });

  const ip = getClientIp(await headers());

  if (jarak > radius) {
    const row = {
      id: `prs-${Date.now()}`,
      nim,
      nama,
      kegiatanId: kegiatan.id,
      lat,
      lng,
      accuracy: acc,
      jarakMeter: Math.round(jarak),
      status: "DITOLAK" as const,
      alasan: `Di luar radius ${radius}m (jarak ${Math.round(jarak)}m)`,
      createdAt: new Date(serverNow).toISOString(),
      ip,
    };
    saveDitolak(row);
    return NextResponse.json({ error: `Di luar radius! Jarak kamu ${Math.round(jarak)}m dari ${lokasi.name} (maks ${radius}m)`, jarak: Math.round(jarak), radius, data: row }, { status: 403 });
  }

  const isTerlambat = serverNow > selesai;
  const status: "HADIR" | "TERLAMBAT" = isTerlambat ? "TERLAMBAT" : "HADIR";

  const row = {
    id: `prs-${Date.now()}`,
    nim,
    nama,
    kegiatanId: kegiatan.id,
    lat,
    lng,
    accuracy: acc,
    jarakMeter: Math.round(jarak),
    status,
    createdAt: new Date(serverNow).toISOString(),
    ip,
  };
  addPresensi(row);

  return NextResponse.json({ ok: true, data: row, jarak: Math.round(jarak), serverTime: serverNow });
}
