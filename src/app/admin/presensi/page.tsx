"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapPin, Clock, Users, Download, RefreshCw, Save, Trash2 } from "lucide-react";

const PresensiMap = dynamic(() => import("@/components/maps/presensi-map").then((m) => m.PresensiMap), { ssr: false, loading: () => <div className="h-[360px] animate-pulse bg-muted rounded-2xl" /> });

type Lokasi = { id: string; name: string; lat: number; lng: number; radiusMeters: number };
type Kegiatan = { id: string; title: string; lokasiId: string; jamMulai: string; jamSelesai: string; isActive: boolean };
type Presensi = { id: string; nim: string; nama: string; kegiatanId: string; lat: number; lng: number; accuracy: number; jarakMeter: number; status: string; createdAt: string };

export default function AdminPresensi() {
  const [lokasi, setLokasi] = useState<Lokasi[]>([]);
  const [selectedLokasi, setSelectedLokasi] = useState<Lokasi | null>(null);
  const [kegiatans, setKegiatans] = useState<Kegiatan[]>([]);
  const [presensi, setPresensi] = useState<Presensi[]>([]);
  const [now, setNow] = useState(Date.now());
  const [edit, setEdit] = useState<Lokasi | null>(null);
  const [newKeg, setNewKeg] = useState({ title: "", jamMulai: "", jamSelesai: "" });
  const [msg, setMsg] = useState("");

  const [mounted, setMounted] = useState(false);
  const load = async () => {
    const [l, k, p] = await Promise.all([fetch("/api/lokasi").then(r=>r.json()), fetch("/api/kegiatan").then(r=>r.json()), fetch("/api/presensi").then(r=>r.json())]);
    if (Array.isArray(p) && p.length>0 && (p as unknown as {error?:string}).error) { window.location.href="/admin/login"; return; }
    setLokasi(l); setSelectedLokasi(l[0]||null); setEdit(l[0]||null); setKegiatans(k); setPresensi(Array.isArray(p)?p:[]);
  };
  useEffect(()=>{ setMounted(true); load(); const t=setInterval(()=>setNow(Date.now()),1000); const poll=setInterval(load,5000); return()=>{clearInterval(t);clearInterval(poll);} }, []);

  const saveLokasi = async () => {
    if(!edit) return;
    const r = await fetch("/api/lokasi",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(edit)});
    if (r.status===401) { window.location.href="/admin/login"; return; }
    setMsg("Lokasi disimpan ✓"); load(); setTimeout(()=>setMsg(""),2000);
  };

  const createKegiatan = async () => {
    if(!newKeg.title || !newKeg.jamMulai || !newKeg.jamSelesai) { setMsg("Lengkapi judul & jam"); return; }
    const r = await fetch("/api/kegiatan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ title:newKeg.title, jamMulai:newKeg.jamMulai, jamSelesai:newKeg.jamSelesai, lokasiId: selectedLokasi?.id })});
    if (r.status===401) { window.location.href="/admin/login"; return; }
    setNewKeg({title:"",jamMulai:"",jamSelesai:""}); setMsg("Kegiatan dibuat ✓"); load();
  };

  const esc = (v: string) => `"${String(v).replace(/"/g,'""')}"`;
  const exportCsv = () => {
    const header = "nim,nama,kegiatan,jarak,accuracy,status,waktu,lat,lng\n";
    const rows = presensi.map(p=> `${esc(p.nim)},${esc(p.nama)},${esc(p.kegiatanId)},${p.jarakMeter},${p.accuracy},${esc(p.status)},${esc(p.createdAt)},${p.lat},${p.lng}`).join("\n");
    const blob = new Blob([header+rows], {type:"text/csv"});
    const url = URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`presensi-${new Date().toISOString().slice(0,10)}.csv`; a.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-[88px] sm:pt-[96px] pb-6 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="display text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2"><Users className="h-7 w-7 text-primary"/> Admin Presensi</h1>
            <p className="text-sm text-muted-foreground">Atur titik & radius • Live peta presensi • Realtime server</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs bg-card border rounded-full px-3 py-2 inline-flex items-center gap-1.5" suppressHydrationWarning><Clock className="h-3.5 w-3.5"/>{mounted ? new Date(now).toLocaleString("id-ID") : "--:--:--"}</span>
            <button onClick={load} className="rounded-full border bg-card px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-accent"><RefreshCw className="h-3.5 w-3.5"/> Refresh</button>
            <button onClick={exportCsv} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5"><Download className="h-3.5 w-3.5"/> Export CSV</button>
            <button onClick={async()=>{ await fetch("/api/admin/auth",{method:"DELETE"}); window.location.href="/admin/login"; }} className="rounded-full border bg-card px-3 py-2 text-xs">Logout</button>
          </div>
        </div>

        {msg && <div className="rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm p-3">{msg}</div>}

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lokasi editor */}
          <div className="bg-card border rounded-2xl p-5 space-y-4">
            <h3 className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/> Titik & Radius Absen</h3>
            {edit && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold">Nama Lokasi</label>
                  <input value={edit.name} onChange={e=>setEdit({...edit,name:e.target.value})} className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm"/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-semibold">Latitude</label><input type="number" step="0.000001" value={edit.lat} onChange={e=>setEdit({...edit,lat: parseFloat(e.target.value)||0})} className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm"/></div>
                  <div><label className="text-xs font-semibold">Longitude</label><input type="number" step="0.000001" value={edit.lng} onChange={e=>setEdit({...edit,lng: parseFloat(e.target.value)||0})} className="mt-1 w-full rounded-xl border bg-background px-3 py-2.5 text-sm"/></div>
                </div>
                <div>
                  <label className="text-xs font-semibold">Radius: {edit.radiusMeters}m</label>
                  <input type="range" min={20} max={500} step={10} value={edit.radiusMeters} onChange={e=>setEdit({...edit,radiusMeters: parseInt(e.target.value)})} className="w-full accent-primary"/>
                  <div className="flex justify-between text-xs text-muted-foreground"><span>20m</span><span>500m</span></div>
                </div>
                <button onClick={saveLokasi} className="w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-bold inline-flex items-center justify-center gap-1.5"><Save className="h-4 w-4"/> Simpan Lokasi</button>
                <p className="text-xs text-muted-foreground">Klik peta untuk geser titik • Koordinat akurat: -7.56555, 110.8645 (Palur Km 5)</p>
                <div className="h-[300px] rounded-2xl overflow-hidden border-2 shadow-sm">
                  <PresensiMap center={edit} radius={edit.radiusMeters} userPos={null} onPick={(la,ln)=>setEdit({...edit,lat:la,lng:ln})} />
                </div>
              </div>
            )}
          </div>

          {/* Kegiatan */}
          <div className="bg-card border rounded-2xl p-5 space-y-4">
            <h3 className="font-bold">Kegiatan Hari Ini</h3>
            <div className="space-y-2 max-h-[220px] overflow-auto pr-1">
              {kegiatans.map(k=>(
                <div key={k.id} className="rounded-xl border p-3 flex justify-between gap-3">
                  <div className="text-xs">
                    <p className="font-bold text-sm">{k.title}</p>
                    <p className="text-muted-foreground" suppressHydrationWarning>{mounted ? `${new Date(k.jamMulai).toLocaleString("id-ID")} → ${new Date(k.jamSelesai).toLocaleString("id-ID")}` : "Memuat..."}</p>
                    <span className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${k.isActive?"bg-green-100 text-green-700":"bg-muted text-muted-foreground"}`}>{k.isActive?"AKTIF":"NONAKTIF"}</span>
                  </div>
                  <button onClick={async()=>{ await fetch(`/api/kegiatan?id=${k.id}`,{method:"DELETE"}); load(); }} className="h-fit rounded-full border p-2 hover:bg-destructive/10 text-destructive"><Trash2 className="h-3.5 w-3.5"/></button>
                </div>
              ))}
              {kegiatans.length===0 && <p className="text-xs text-muted-foreground">Belum ada kegiatan.</p>}
            </div>
            <div className="border-t pt-4 space-y-3">
              <p className="text-sm font-semibold">+ Buat Kegiatan Baru</p>
              <input placeholder="Judul, cth: RE-BOOT Sesi 1" value={newKeg.title} onChange={e=>setNewKeg({...newKeg,title:e.target.value})} className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm"/>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-semibold">Jam Mulai</label><input type="datetime-local" value={newKeg.jamMulai} onChange={e=>setNewKeg({...newKeg,jamMulai:e.target.value})} className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm"/></div>
                <div><label className="text-xs font-semibold">Jam Selesai</label><input type="datetime-local" value={newKeg.jamSelesai} onChange={e=>setNewKeg({...newKeg,jamSelesai:e.target.value})} className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm"/></div>
              </div>
              <button onClick={createKegiatan} className="w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-bold">Buat Kegiatan</button>
            </div>
          </div>
        </div>

        {/* Live Table */}
        <div className="bg-card border rounded-2xl overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b">
            <h3 className="font-bold">Live Presensi ({presensi.length}) • Auto refresh 5 detik</h3>
            <span className="text-xs font-mono text-muted-foreground">Realtime</span>
          </div>
          <div className="overflow-auto max-h-[420px]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-muted text-xs text-muted-foreground">
                <tr><th className="text-left p-3">Waktu</th><th className="text-left p-3">NIM / Nama</th><th className="text-left p-3">Kegiatan</th><th className="text-left p-3">Jarak</th><th className="text-left p-3">Status</th><th className="text-left p-3">Maps</th></tr>
              </thead>
              <tbody>
                {presensi.map(p=>(
                  <tr key={p.id} className="border-t hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs" suppressHydrationWarning>{mounted ? new Date(p.createdAt).toLocaleString("id-ID") : p.createdAt.slice(0,10)}</td>
                    <td className="p-3"><p className="font-semibold">{p.nim}</p><p className="text-xs text-muted-foreground">{p.nama}</p></td>
                    <td className="p-3 text-xs">{p.kegiatanId}</td>
                    <td className="p-3 font-mono text-xs">{p.jarakMeter}m • {p.accuracy}m</td>
                    <td className="p-3"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p.status==="HADIR"?"bg-green-100 text-green-700":p.status==="TERLAMBAT"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700"}`}>{p.status}</span></td>
                    <td className="p-3"><a target="_blank" href={`https://www.google.com/maps?q=${p.lat},${p.lng}`} className="text-primary underline text-xs">Lihat Maps</a></td>
                  </tr>
                ))}
                {presensi.length===0 && <tr><td colSpan={6} className="p-8 text-center text-sm text-muted-foreground">Belum ada yang absen.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
