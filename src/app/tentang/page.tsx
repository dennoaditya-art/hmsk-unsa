import { orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { ArrowLeft, Sparkles, Quote, Wrench, Globe, Clock3, Share2, Server } from "lucide-react";
import Link from "next/link";
import { cardSlush } from "@/lib/slush";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-5 w-5" aria-hidden />,
  cpu: <Wrench className="h-5 w-5" aria-hidden />,
  server: <Server className="h-5 w-5" aria-hidden />,
  share: <Share2 className="h-5 w-5" aria-hidden />,
};

const mentorLabel: Record<string, string> = {
  "web-creation": "ROSSI DENNO ADITYA ARSENAL",
  "socmed-x": "TIM HMSK",
  "re-boot": "EEN VANDICTO SATYA ADY",
  vite: "TIM HMSK • NEXT MEET",
};

const statusBadge = (status: string) => {
  if (status === "berjalan")
    return (
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-primary px-3 py-1 label text-[11px] text-primary-foreground">
        BERJALAN
      </div>
    );
  if (status === "segera")
    return (
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 label text-[11px] text-muted-foreground">
        <Clock3 className="h-3 w-3" aria-hidden /> SEGERA
      </div>
    );
  return null;
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-sky border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 label text-xs text-foreground/60 hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-8 max-w-3xl">
            <span className="label text-[11px] text-foreground/60">TENTANG HMSK UNSA</span>
            <h1 className="display mt-3 text-[32px] text-foreground sm:text-[46px]">
              Tentang {orgProfile.fullName}
            </h1>
            <p className="mt-4 text-sm leading-6 text-foreground/75 max-w-2xl">
              Selengkapnya tentang visi, misi, dan proker yang benar-benar jalan — bukan sekadar proposal di kertas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[20px] border border-border bg-foreground p-7 sm:p-10 text-background relative overflow-hidden">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/40 px-3 py-1.5 label text-[11px]">
                <Sparkles className="h-3 w-3 text-primary" aria-hidden /> VISI
              </span>
              <div className="mt-6 flex gap-3">
                <Quote className="h-6 w-6 text-primary shrink-0" aria-hidden />
                <p className="text-lg leading-7 font-medium text-balance">{orgProfile.vision}</p>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-5 ${cardSlush} p-7 sm:p-8`}>
            <h2 className="display text-xl text-foreground">Misi</h2>
            <ul className="mt-5 space-y-4">
              {orgProfile.mission.map((m, i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-border bg-muted p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-[11px] font-bold text-foreground">{i + 1}</span>
                  <span className="text-sm leading-5 text-muted-foreground pt-0.5">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <span className="label text-[11px] text-muted-foreground">PROKER DETAIL</span>
          <h2 className="display mt-3 text-2xl text-foreground sm:text-3xl">Yang Sedang & Akan Jalan</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-2xl">Detail proker sesuai arahan pengurus — dibina mentor yang ngerti teknis & bisnisnya.</p>

          <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            {prokers.map((p) => (
              <article key={p.id} className={`${cardSlush} p-6 flex flex-col`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground text-background">
                  {iconMap[p.icon] ?? <Globe className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{p.title}</h3>
                <p className="label text-[11px] text-primary">{mentorLabel[p.id] ?? p.mentor.toUpperCase()}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground">{h}</span>
                  ))}
                </div>
                {statusBadge(p.status)}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Teknologi", desc: "Fokus pada pengembangan sistem komputer dan teknologi informasi terkini — yang laku di pasaran.", icon: Globe },
            { title: "Inovasi", desc: "Mendorong kreativitas: dari website UMKM sampai jasa service yang bisa jadi usaha.", icon: Sparkles },
            { title: "Komunitas", desc: "Bangun circle yang saling support: mentoring, sharing, dan praktek bareng.", icon: Wrench },
          ].map((v) => (
            <article key={v.title} className={`${cardSlush} p-6`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground text-background">
                <v.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-sm font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
