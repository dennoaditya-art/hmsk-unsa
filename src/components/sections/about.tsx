import { Code2, Users, Target, Sparkles, ArrowUpRight, Quote } from "lucide-react";
import { orgProfile } from "@/data/leaders";

export function About() {
  return (
    <section id="tentang" className="relative bg-[#fcfcfd] border-y border-slate-200">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 mono text-[11px] tracking-[0.18em] text-slate-500">
              <span className="h-px w-6 bg-slate-300" /> TENTANG KAMI
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0f1f3c] sm:text-[42px]">
              Wadah Berkarya,
              <br />
              <span className="text-slate-400">Bukan Sekadar Organisasi.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-sm leading-6 text-slate-600">
            {orgProfile.vision} Kami fokus pada skill yang bisa jadi <span className="font-semibold text-[#0f1f3c]">penghasilan</span> — bukan cuma teori.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[28px] bg-[#0f1f3c] p-6 sm:p-8 text-white overflow-hidden relative">
            <div className="absolute inset-0 grid-pattern-dark opacity-40" />
            <div className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-emerald-300" /> VISI KAMI
              </div>
              <div className="mt-6 flex gap-3">
                <Quote className="h-7 w-7 text-emerald-400 shrink-0" />
                <p className="text-[17px] sm:text-[19px] leading-7 font-medium text-balance">&ldquo;{orgProfile.vision}&rdquo;</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src="/logo/logo-main.jpg" alt="HMSK" className="h-8 w-8 rounded-xl object-cover ring-1 ring-white/20" />
                <div>
                  <p className="text-xs font-bold tracking-widest">HMSK UNSA</p>
                  <p className="mono text-[11px] text-white/60">Sistem Komputer • Universitas Surakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-4">
            {[
              { icon: Code2, title: "Teknologi Terapan", desc: "Belajar yang langsung dipakai: website, hosting, hardware — bukan hafalan.", bg: "bg-emerald-50 text-emerald-600" },
              { icon: Users, title: "Mentoring Senior", desc: "Dibimbing Mas Denno (Web) & Dicto (Hardware) — belajar bareng, praktek bareng.", bg: "bg-violet-50 text-violet-600" },
              { icon: Target, title: "Berorientasi Hasil", desc: "Output nyata: website terjual, jasa service jalan, undangan online live.", bg: "bg-amber-50 text-amber-600" },
            ].map((v) => (
              <div key={v.title} className="rounded-[24px] border border-slate-200 bg-white p-5 flex gap-4 hover:border-slate-300 hover:shadow-sm transition will-change-transform hover:[transform:translateY(-2px)]">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${v.bg} shrink-0`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0f1f3c]">{v.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-12 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-[320px] shrink-0">
                <h3 className="display text-xl font-bold tracking-tight text-[#0f1f3c]">Misi Kami</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">Empat pilar yang jadi kompas setiap proker HMSK. Dieksekusi, bukan ditempel di dinding.</p>
                <a href="/tentang" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-emerald-600 hover:text-emerald-700">
                  SELENGKAPNYA <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 flex-1">
                {orgProfile.mission.map((m, i) => (
                  <div key={i} className="group flex gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4 hover:bg-white hover:border-emerald-200 hover:shadow-sm transition">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 mono text-xs font-bold text-[#0f1f3c] group-hover:bg-[#0f1f3c] group-hover:text-white transition">
                      0{i + 1}
                    </span>
                    <p className="text-xs leading-5 font-medium text-slate-600 pt-1">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
