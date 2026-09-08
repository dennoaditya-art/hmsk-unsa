"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [pin, setPin] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();
  const submit = async () => {
    const r = await fetch("/api/admin/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pin }) });
    const d = await r.json();
    if (!r.ok) setErr(d.error || "PIN salah");
    else router.push("/admin/presensi");
  };
  return (
    <div className="min-h-screen grid place-items-center bg-background p-4 pt-[88px]">
      <div className="w-full max-w-sm bg-card border rounded-2xl p-6 space-y-4">
        <h1 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Admin HMSK</h1>
        <p className="text-sm text-muted-foreground">PIN default: <code className="font-mono bg-muted px-1.5 py-0.5 rounded">hmsk2025</code> — ganti di env <code>ADMIN_PIN</code></p>
        <input type="password" value={pin} onChange={e=>setPin(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="Masukkan PIN admin" className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm"/>
        {err && <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl p-2">{err}</p>}
        <button onClick={submit} className="w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-bold">Masuk Admin</button>
      </div>
    </div>
  );
}
