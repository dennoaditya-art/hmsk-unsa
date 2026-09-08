import { orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Quote, Wrench, Globe, Server, Clock3, Share2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-5 w-5" />,
  cpu: <Wrench className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  share: <Share2 className="h-5 w-5" />,
};

const mentorLabel: Record<string, string> = {
  "web-creation": "ROSSI DENNO ADITYA ARSENAL",
  "socmed-x": "TIM HMSK",
  "re-boot": "EEN VANDICTO SATYA ADY",
  vite: "TIM HMSK • NEXT MEET",
};

const statusBadge = (status: string) => {
  if (status === "berjalan") return <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 mono text-[11px] font-bold text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" /> BERJALAN</div>;
  if (status === "segera") return <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-muted border border-border px-3 py-1 mono text-[11px] font-bold text-muted-foreground"><Clock3 className="h-3 w-3" /> SEGERA</div>;
  return null;
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> TENTANG HMSK UNSA
            </div>
            <h1 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[44px]">
              Tentang {orgProfile.fullName}
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-2xl">
              Selengkapnya tentang visi, misi, dan proker yang benar-benar jalan — bukan sekadar proposal di kertas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[28px] bg-foreground p-7 sm:p-10 text-background relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern-dark opacity-20" />
            <div className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/14 to-transparent blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/08 border border-background/10 px-3 py-1 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-primary" /> VISI
              </div>
              <div className="mt-6 flex gap-3">
                <Quote className="h-6 w-6 text-primary shrink-0" />
                <p className="text-lg leading-7 font-medium text-balance">{orgProfile.vision}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-[28px] border border-border bg-card p-7 sm:p-8">
            <h2 className="display text-xl font-bold tracking-tight text-foreground">Misi</h2>
            <ul className="mt-5 space-y-4">
              {orgProfile.mission.map((m, i) => (
                <li key={i} className="flex gap-4 rounded-2xl bg-background border border-border p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card border border-border mono text-[11px] font-bold text-foreground">0{i + 1}</span>
                  <span className="text-sm leading-5 text-muted-foreground pt-0.5">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-6 bg-border" /> PROKER DETAIL
          </div>
          <h2 className="display mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Yang Sedang & Akan Jalan</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-2xl">Detail proker sesuai arahan pengurus — dibina mentor yang ngerti teknis & bisnisnya.</p>

          <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            {prokers.map((p) => (
              <Card key={p.id} className="border-border bg-card hover:border-primary/30 hover:shadow-md transition overflow-hidden flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-primary border border-border">
                    {iconMap[p.icon] ?? <Globe className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mono text-[11px] font-bold tracking-widest text-primary">{mentorLabel[p.id] ?? p.mentor.toUpperCase()}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.highlights.map((h) => (
                      <span key={h} className="rounded-full bg-background border border-border px-2.5 py-1 mono text-[11px] text-muted-foreground">{h}</span>
                    ))}
                  </div>
                  {statusBadge(p.status)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Teknologi", desc: "Fokus pada pengembangan sistem komputer dan teknologi informasi terkini — yang laku di pasaran.", icon: Globe },
            { title: "Inovasi", desc: "Mendorong kreativitas: dari website UMKM sampai jasa service yang bisa jadi usaha.", icon: Sparkles },
            { title: "Komunitas", desc: "Bangun circle yang saling support: mentoring, sharing, dan praktek bareng.", icon: Wrench },
          ].map((v) => (
            <Card key={v.title} className="border-border bg-card hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
