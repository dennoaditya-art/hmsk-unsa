import { Code2, Users, Target, Sparkles, ArrowUpRight, Quote } from "lucide-react";
import { orgProfile } from "@/data/leaders";

export function About() {
  return (
    <section id="tentang" className="relative bg-background border-y border-border">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> TENTANG KAMI
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[42px]">
              Wadah Berkarya,
              <br />
              <span className="text-muted-foreground">Bukan Sekadar Organisasi.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-sm leading-6 text-muted-foreground">
            {orgProfile.vision} Kami fokus pada skill yang bisa jadi <span className="font-semibold text-foreground">penghasilan</span> — bukan cuma teori.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[28px] bg-foreground p-6 sm:p-8 text-background overflow-hidden relative">
            <div className="absolute inset-0 grid-pattern-dark opacity-20" />
            <div className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/14 to-primary/06 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/08 border border-background/10 px-3 py-1.5 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-primary" /> VISI KAMI
              </div>
              <div className="mt-6 flex gap-3">
                <Quote className="h-7 w-7 text-primary shrink-0" />
                <p className="text-[17px] sm:text-[19px] leading-7 font-medium text-balance">&ldquo;{orgProfile.vision}&rdquo;</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src="/logo/logo-main.jpg" alt="HMSK" className="h-8 w-8 rounded-xl object-cover ring-1 ring-background/15" />
                <div>
                  <p className="text-xs font-bold tracking-widest">HMSK UNSA</p>
                  <p className="mono text-[11px] text-background/55">Sistem Komputer • Universitas Surakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-4">
            {[
              { icon: Code2, title: "Teknologi Terapan", desc: "Belajar yang langsung dipakai: website, hosting, hardware — bukan hafalan." },
              { icon: Users, title: "Mentoring Senior", desc: "Dibimbing Mas Denno (Web) & Dicto (Hardware) — belajar bareng, praktek bareng." },
              { icon: Target, title: "Berorientasi Hasil", desc: "Output nyata: website terjual, jasa service jalan, undangan online live." },
            ].map((v) => (
              <div key={v.title} className="rounded-[24px] border border-border bg-card p-5 flex gap-4 hover:border-primary/40 hover:shadow-sm transition will-change-transform hover:[transform:translateY(-2px)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary border border-border shrink-0">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-12 rounded-[28px] border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-[320px] shrink-0">
                <h3 className="display text-xl font-bold tracking-tight text-foreground">Misi Kami</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Empat pilar yang jadi kompas setiap proker HMSK. Dieksekusi, bukan ditempel di dinding.</p>
                <a href="/tentang" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary hover:text-foreground">
                  SELENGKAPNYA <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 flex-1">
                {orgProfile.mission.map((m, i) => (
                  <div key={i} className="group flex gap-3 rounded-2xl bg-background border border-border p-4 hover:bg-card hover:border-primary/30 hover:shadow-sm transition">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card border border-border mono text-xs font-bold text-foreground group-hover:bg-foreground group-hover:text-background transition">
                      0{i + 1}
                    </span>
                    <p className="text-xs leading-5 font-medium text-muted-foreground pt-1">{m}</p>
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
