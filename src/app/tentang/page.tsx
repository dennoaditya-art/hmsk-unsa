import { orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Quote, Wrench, Globe, Server, Clock3 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-[#f8fafc] border-b border-slate-200">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-slate-500 hover:text-[#0f1f3c]">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-slate-500">
              <span className="h-px w-6 bg-slate-300" /> TENTANG HMSK UNSA
            </div>
            <h1 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0f1f3c] sm:text-[44px]">
              Tentang {orgProfile.fullName}
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-600 max-w-2xl">
              Selengkapnya tentang visi, misi, dan proker yang benar-benar jalan — bukan sekadar proposal di kertas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[28px] bg-[#0f1f3c] p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern-dark opacity-30" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-emerald-300" /> VISI
              </div>
              <div className="mt-6 flex gap-3">
                <Quote className="h-6 w-6 text-emerald-400 shrink-0" />
                <p className="text-lg leading-7 font-medium text-balance">{orgProfile.vision}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="display text-xl font-bold tracking-tight text-[#0f1f3c]">Misi</h2>
            <ul className="mt-4 space-y-3">
              {orgProfile.mission.map((m, i) => (
                <li key={i} className="flex gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 mono text-[11px] font-bold text-[#0f1f3c]">0{i + 1}</span>
                  <span className="text-sm leading-5 text-slate-600 pt-0.5">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-slate-500">
            <span className="h-px w-6 bg-slate-300" /> PROKER DETAIL
          </div>
          <h2 className="display mt-3 text-2xl font-bold tracking-tight text-[#0f1f3c] sm:text-3xl">Yang Sedang & Akan Jalan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 max-w-2xl">Detail proker sesuai arahan pengurus — dibina mentor yang ngerti teknis & bisnisnya.</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <Card className="border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0f1f3c]">{prokers[0].title}</h3>
                <p className="mono text-[11px] font-bold tracking-widest text-emerald-600">DIBINA MAS DENNO</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{prokers[0].description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {prokers[0].highlights.map((h) => (
                    <span key={h} className="rounded-full bg-white border border-emerald-100 px-2.5 py-1 mono text-[11px] text-slate-600">{h}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 mono text-[11px] font-bold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> BERJALAN
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-200 bg-gradient-to-b from-violet-50/60 to-white">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0f1f3c]">{prokers[1].title}</h3>
                <p className="mono text-[11px] font-bold tracking-widest text-violet-600">DIBINA DICTO</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{prokers[1].description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {prokers[1].highlights.map((h) => (
                    <span key={h} className="rounded-full bg-white border border-violet-100 px-2.5 py-1 mono text-[11px] text-slate-600">{h}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-violet-600 px-3 py-1 mono text-[11px] font-bold text-white">LAB AKTIF</div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-gradient-to-b from-amber-50/60 to-white">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0f1f3c]">{prokers[2].title}</h3>
                <p className="mono text-[11px] font-bold tracking-widest text-amber-600">TIM HMSK • NEXT MEET</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{prokers[2].description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {prokers[2].highlights.map((h) => (
                    <span key={h} className="rounded-full bg-white border border-amber-100 px-2.5 py-1 mono text-[11px] text-slate-600">{h}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 mono text-[11px] font-bold text-white">
                  <Clock3 className="h-3 w-3" /> PEMBAHASAN SELANJUTNYA
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Teknologi", desc: "Fokus pada pengembangan sistem komputer dan teknologi informasi terkini — yang laku di pasaran.", icon: Globe },
            { title: "Inovasi", desc: "Mendorong kreativitas: dari website UMKM sampai jasa service yang bisa jadi usaha.", icon: Sparkles },
            { title: "Komunitas", desc: "Bangun circle yang saling support: mentoring, sharing, dan praktek bareng.", icon: Wrench },
          ].map((v) => (
            <Card key={v.title} className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-[#0f1f3c]">{v.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
