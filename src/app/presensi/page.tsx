"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MapPin, Clock, ShieldCheck, Loader2, CheckCircle2, AlertTriangle, RefreshCw, LogOut } from "lucide-react";
import { haversine, formatJarak } from "@/lib/geo";

const PresensiMap = dynamic(() => import("@/components/maps/presensi-map").then((m) => m.PresensiMap), { ssr: false, loading: () => <div className="h-[340px] animate-pulse bg-muted rounded-2xl" /> });

type Lokasi = { id: string; name: string; lat: number; lng: number; radiusMeters: number };
type Kegiatan = { id: string; title: string; lokasiId: string; jamMulai: string; jamSelesai: string; isActive: boolean };

export default function PresensiPage() {
  const [lokasi, setLokasi] = useState<Lokasi | null>(null);
  const [kegiatan, setKegiatan] = useState<Kegiatan | null>(null);
  const [kegiatans, setKegiatans] = useState<Kegiatan[]>([]);
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [logged, setLogged] = useState(false);
  const [pos, setPos] = useState<{ lat: number; lng: number; accuracy: number } | null>(null);
  const [watchErr, setWatchErr] = useState("");
  const [serverTime, setServerTime] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [history, setHistory] = useState<unknown[]>([]);

  // fetch lokasi & kegiatan & server time — single batch, no duplicate
  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch("/api/lokasi").then(r=>r.json()),
      fetch("/api/kegiatan").then(r=>r.json()),
      fetch("/api/time").then(r=>r.json()),
      fetch("/api/auth").then(r=>r.json()),
    ]).then(([lokData, kegData, timeData, authData])=>{
      if(cancelled) return;
      setLokasi(lokData[0] || null);
      setKegiatans(kegData);
      setKegiatan(kegData.find((x: Kegiatan) => x.isActive) || kegData[0] || null);
      setServerTime(timeData.serverTime);
      setOffset(timeData.serverTime - Date.now());
      if (authData.nim) { setNim(authData.nim); setNama(authData.nama || ""); setLogged(true); }
    }).catch(()=>{});
    return ()=>{ cancelled=true; };
  }, []);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now() + offset), 1000);
    return () => clearInterval(t);
  }, [offset]);

  const [locating, setLocating] = useState(false);
  const getLocation = useCallback(() => {
    if (!navigator.geolocation) { setWatchErr("Browser tidak support geolocation"); return; }
    setLocating(true); setWatchErr("");
    navigator.geolocation.getCurrentPosition(
      (p) => { setPos({ lat: p.coords.latitude, lng: p.coords.longitude, accuracy: p.coords.accuracy }); setLocating(false); },
      (e) => { setWatchErr(e.message + " - Aktifkan GPS & izin lokasi, coba di luar ruangan"); setLocating(false); },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }, []);

  useEffect(() => { getLocation(); }, [getLocation]);

  const jarak = lokasi && pos ? Math.round(haversine(pos.lat, pos.lng, lokasi.lat, lokasi.lng)) : null;
  const inRadius = jarak !== null && lokasi ? jarak <= lokasi.radiusMeters : false;
  const accOk = pos ? pos.accuracy <= 100 : false;

  const handleLogin = async () => {
    if (!nim.trim()) { setMsg({ type: "err", text: "NIM wajib diisi" }); return; }
    if (!nama.trim() || nama.trim().length < 3) { setMsg({ type: "err", text: "Nama wajib diisi (min 3 huruf)" }); return; }
    const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nim: nim.trim(), nama: nama.trim() }) });
    if (!res.ok) { const d = await res.json(); setMsg({ type: "err", text: d.error || "Gagal login" }); return; }
    setLogged(true); setMsg({ type: "ok", text: `Login sebagai ${nama.trim()} (${nim.trim()})` });
  };
  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" }); setLogged(false); setNim(""); setNama("");
  };

  const handlePresensi = async () => {
    if (!pos) { setMsg({ type: "err", text: "Lokasi belum didapat, klik Perbarui Lokasi" }); return; }
    if (!kegiatan) { setMsg({ type: "err", text: "Tidak ada kegiatan aktif" }); return; }
    setLoading(true); setMsg(null);
    try {
      const res = await fetch("/api/presensi", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat: pos.lat, lng: pos.lng, accuracy: pos.accuracy, kegiatanId: kegiatan.id })
      });
      const d = await res.json();
      if (!res.ok) setMsg({ type: "err", text: d.error || "Gagal" });
      else {
        setMsg({ type: "ok", text: `${d.data.status === "TERLAMBAT" ? "Terlambat - tetap tercatat" : "Berhasil HADIR"} • Jarak ${d.jarak}m` });
        fetchHistory();
      }
    } finally { setLoading(false); }
  };

  const fetchHistory = useCallback(() => {
    if (!nim) return;
    fetch(`/api/presensi?nim=${encodeURIComponent(nim)}`).then(r=>r.json()).then(setHistory);
  }, [nim]);
  useEffect(()=>{ if(logged) fetchHistory(); }, [logged, fetchHistory]);

  const serverNow = now;
  const jamStr = mounted ? new Date(serverNow).toLocaleString("id-ID", { weekday:"long", day:"2-digit", month:"long", hour:"2-digit", minute:"2-digit", second:"2-digit" }) : "--:--:--";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-[84px] sm:pt-[88px] pb-8 space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-card border rounded-2xl p-4 sm:p-5 shadow-sm">
          <div>
            <h1 className="display text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2"><MapPin className="h-6 w-6 text-primary"/> Presensi HMSK</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Maps realtime • Validasi server • Anti fake GPS</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-background border rounded-full px-3.5 py-2.5 shrink-0">
            <Clock className="h-3.5 w-3.5 text-primary"/><span className="font-semibold" suppressHydrationWarning>{jamStr}</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-card border rounded-2xl p-4 sm:p-5 shadow-sm">
          {!logged ? (
            <div className="flex flex-col sm:flex-row gap-3 items-end">
              <div className="flex-1 w-full">
                <label className="text-xs font-semibold">NIM <span className="text-destructive">*</span></label>
                <input value={nim} onChange={e=>setNim(e.target.value)} placeholder="2024230xx" required className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"/>
              </div>
              <div className="flex-1 w-full">
                <label className="text-xs font-semibold">Nama Lengkap <span className="text-destructive">*</span></label>
                <input value={nama} onChange={e=>setNama(e.target.value)} placeholder="Nama sesuai NIM" required className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"/>
              </div>
              <button onClick={handleLogin} className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold hover:bg-primary/90">Masuk</button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-sm"><span className="text-muted-foreground">Login sebagai</span> <b>{nim}</b> {nama && `• ${nama}`}</p>
              <button onClick={handleLogout} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold hover:bg-accent"><LogOut className="h-3 w-3"/> Keluar</button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-6">
          {/* Map */}
          <div className="space-y-3">
            <div className="h-[340px] sm:h-[380px] rounded-2xl border-2 overflow-hidden bg-muted relative shadow-sm">
              {lokasi ? <PresensiMap center={lokasi} userPos={pos} radius={lokasi.radiusMeters}/> : <div className="grid place-items-center h-full text-sm text-muted-foreground">Memuat peta...</div>}
              <div className="absolute top-3 left-3 bg-card/95 backdrop-blur border rounded-full px-3 py-1.5 text-xs font-mono shadow">
                {lokasi ? `${lokasi.lat.toFixed(5)}, ${lokasi.lng.toFixed(5)} • ${lokasi.radiusMeters}m` : "—"}
              </div>
              <button onClick={getLocation} disabled={locating} className="absolute bottom-3 right-3 bg-primary text-primary-foreground border shadow-lg rounded-full px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 hover:bg-primary/90 disabled:opacity-50">
                <RefreshCw className={`h-3.5 w-3.5 ${locating ? "animate-spin" : ""}`}/> {locating ? "Mencari..." : "Perbarui Lokasi"}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className={`border-2 rounded-xl p-3 ${inRadius ? "bg-green-50 border-green-300 dark:bg-green-950/30" : "bg-card border-border"}`}>
                <p className="text-[11px] tracking-widest font-mono text-muted-foreground">JARAK</p>
                <p className={`text-lg font-bold ${inRadius ? "text-green-700" : "text-destructive"}`}>{jarak !== null ? formatJarak(jarak) : "—"}</p>
                <p className="text-xs font-medium truncate">{jarak !== null ? (inRadius ? `Masuk radius ✓` : `Kurang ${jarak - (lokasi?.radiusMeters||0)}m lagi`) : `Radius ${lokasi?.radiusMeters || 100}m`}</p>
              </div>
              <div className={`border-2 rounded-xl p-3 ${accOk ? "bg-green-50 border-green-300 dark:bg-green-950/30" : "bg-amber-50 border-amber-200 dark:bg-amber-950/20"}`}>
                <p className="text-[11px] tracking-widest font-mono text-muted-foreground">AKURASI</p>
                <p className={`text-lg font-bold ${accOk ? "text-green-700" : "text-amber-700"}`}>{pos ? `${Math.round(pos.accuracy)}m` : "—"}</p>
                <p className="text-xs font-medium">{accOk ? "Akurat ✓" : pos ? "Buruk — ke luar" : "Menunggu GPS"}</p>
              </div>
              <div className={`border-2 rounded-xl p-3 ${inRadius && accOk ? "bg-green-50 border-green-300 dark:bg-green-950/30" : "bg-card border-border"}`}>
                <p className="text-[11px] tracking-widest font-mono text-muted-foreground">STATUS</p>
                <p className={`text-sm font-bold inline-flex items-center gap-1 ${inRadius && accOk ? "text-green-700" : "text-amber-700"}`}>{inRadius && accOk ? <><CheckCircle2 className="h-4 w-4"/> Siap Absen</> : <><AlertTriangle className="h-4 w-4"/> Belum Bisa</>}</p>
                <p className="text-xs text-muted-foreground truncate">{lokasi?.name || "—"}</p>
              </div>
            </div>
            {watchErr && <p className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-xl p-3">{watchErr}</p>}
            {pos && <p className="text-xs font-mono text-muted-foreground">Koordinat: {pos.lat.toFixed(6)}, {pos.lng.toFixed(6)} • {serverTime ? "Waktu server sinkron ✓" : "Sinkron..."}</p>}
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="bg-card border rounded-2xl p-5 shadow-sm space-y-4">
              <h3 className="font-bold flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary"/> Validasi Realtime</h3>
              <div>
                <label className="text-xs font-semibold">Kegiatan</label>
                <select value={kegiatan?.id || ""} onChange={e=>setKegiatan(kegiatans.find(k=>k.id===e.target.value)||null)} className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm">
                  {kegiatans.map(k=> <option key={k.id} value={k.id}>{k.title} • {mounted ? new Date(k.jamMulai).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}) : "--:--"} - {mounted ? new Date(k.jamSelesai).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}) : "--:--"}</option>)}
                </select>
                {kegiatan && <p className="text-xs text-muted-foreground mt-1" suppressHydrationWarning>{mounted ? `${new Date(kegiatan.jamMulai).toLocaleString("id-ID")} → ${new Date(kegiatan.jamSelesai).toLocaleString("id-ID")}` : "Memuat..."}</p>}
              </div>

              <div className="rounded-xl bg-muted p-3 text-xs space-y-1">
                <p className="font-semibold">Syarat lolos (cek server):</p>
                <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
                  <li className={inRadius ? "text-green-600 font-medium" : ""}>Jarak ≤ {lokasi?.radiusMeters}m dari {lokasi?.name}</li>
                  <li className={accOk ? "text-green-600 font-medium" : ""}>Akurasi GPS ≤ 100m</li>
                  <li>Waktu server dalam jam kegiatan</li>
                  <li>Belum absen hari ini</li>
                </ul>
              </div>

              {!logged && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3">Isi NIM & Masuk dulu sebelum absen.</p>}
              {msg && <div className={`rounded-xl p-3 text-sm border ${msg.type==="ok" ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-950/30" : "bg-destructive/10 border-destructive/20 text-destructive"}`}>{msg.text}</div>}

              <button
                onClick={handlePresensi}
                disabled={!logged || loading || !inRadius || !accOk}
                className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-bold shadow hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : <CheckCircle2 className="h-4 w-4"/>}
                {loading ? "Memproses..." : "Absen Sekarang"}
              </button>
              <p className="text-[11px] text-center text-muted-foreground">Maps tidak bisa ditipu: validasi jarak & waktu di server, bukan di HP.</p>
            </div>

            {/* Histori */}
            <div className="bg-card border rounded-2xl p-4">
              <h4 className="font-bold text-sm mb-3">Riwayat Kamu</h4>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {(history as any[]).length === 0 ? <p className="text-xs text-muted-foreground">Belum ada presensi.</p> : (
                <div className="space-y-2 max-h-[220px] overflow-auto pr-1">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(history as any[]).map((h:any)=>(
                    <div key={h.id} className="rounded-xl border p-3 text-xs flex justify-between gap-3">
                      <div><p className="font-semibold">{h.kegiatanId}</p><p className="text-muted-foreground">{new Date(h.createdAt).toLocaleString("id-ID")}</p><p className="font-mono">{h.jarakMeter}m • {h.accuracy}m</p></div>
                      <span className={`h-fit rounded-full px-2.5 py-1 text-[11px] font-bold ${h.status==="HADIR"?"bg-green-100 text-green-700": h.status==="TERLAMBAT"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700"}`}>{h.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
