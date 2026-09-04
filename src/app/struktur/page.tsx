import { leaders, orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ArrowLeft, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function StructurePage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-[#0f1f3c] text-white">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-white/60 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 mono text-[11px] tracking-widest">
                <Crown className="h-3 w-3 text-amber-300" /> STRUKTUR PENGURUS 2025
              </div>
              <h1 className="display mt-4 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[44px]">Struktur Pengurus</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                Jajaran inti {orgProfile.fullName} — tiap orang pegang tanggung jawab & proker yang jelas, bukan sekadar nama di poster.
              </p>
            </div>
            <div className="rounded-2xl bg-white text-[#0f1f3c] px-5 py-4 lg:text-right">
              <p className="mono text-[11px] tracking-widest text-slate-500">TOTAL PENGURUS</p>
              <p className="display text-2xl font-bold">5 Orang Inti</p>
              <p className="mono text-xs text-slate-500">3 Proker Aktif • Universitas Surakarta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <Card key={leader.name} className={idx === 0 ? "md:col-span-2 border-amber-200 bg-gradient-to-br from-amber-50/60 to-white" : "border-slate-200 bg-white"}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-[20px] overflow-hidden shadow-lg ${leader.image ? "bg-white" : `bg-gradient-to-br ${leader.color} text-white text-2xl font-bold`}`}>
                    {leader.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                    ) : (
                      leader.name.charAt(0)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="bg-[#0f1f3c] text-white hover:bg-[#0f1f3c]">{leader.role}</Badge>
                      {leader.proker && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 mono text-[11px] font-bold text-emerald-700">
                          <Sparkles className="h-3 w-3" /> {leader.proker}
                        </span>
                      )}
                    </div>
                    <h2 className="display mt-3 text-2xl font-bold tracking-tight text-[#0f1f3c]">{leader.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{leader.description}</p>

                    {/* proker detail */}
                    {leader.proker && prokers.find((p) => p.shortTitle === leader.proker) && (
                      <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-3">
                        <p className="mono text-[11px] tracking-widest text-slate-500">PROKER YANG DIBINA</p>
                        <p className="text-sm font-bold text-[#0f1f3c]">{prokers.find((p) => p.shortTitle === leader.proker)?.title}</p>
                      </div>
                    )}

                    <div className="mt-5 grid gap-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Mail className="h-3.5 w-3.5 text-emerald-600" /> {leader.name.toLowerCase()}@hmsk-unsa.ac.id
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone className="h-3.5 w-3.5 text-emerald-600" /> +62 812-3456-7890
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-emerald-600" /> Universitas Surakarta, Jawa Tengah
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1f3c] border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display text-2xl font-bold tracking-tight text-white sm:text-3xl">Tertarik Bergabung?</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">Jadilah bagian HMSK UNSA — belajar, berkarya, dan menghasilkan bareng mentor yang sudah di lapangan.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-400 transition"
              >
                Gabung WA Grup
              </a>
              <Link href="/proker" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-bold text-white hover:bg-white/15">
                Lihat Proker
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
