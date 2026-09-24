import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Clock3, Zap, Wrench, Globe, Server, Users, Check, Share2 } from "lucide-react";
import { prokers } from "@/data/proker";
import { btnEmber, btnPaper, cardSlush } from "@/lib/slush";

export function generateStaticParams() {
  return prokers.map((p) => ({ id: p.id }));
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-6 w-6" aria-hidden />,
  cpu: <Wrench className="h-6 w-6" aria-hidden />,
  server: <Server className="h-6 w-6" aria-hidden />,
  share: <Share2 className="h-6 w-6" aria-hidden />,
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = prokers.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: `${p.shortTitle} | HMSK UNSA`,
    description: p.description,
  };
}

export default async function ProkerDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = prokers.find((x) => x.id === id);
  if (!p) notFound();

  const other = prokers.filter((x) => x.id !== p.id);

  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden border-b border-border bg-foreground text-background">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link href="/proker" className="inline-flex items-center gap-1.5 label text-xs text-background/60 hover:text-background">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> KEMBALI KE PROKER
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-background bg-primary text-primary-foreground">{iconMap[p.icon] ?? <Sparkles className="h-6 w-6" aria-hidden />}</div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-background/40 px-3 py-1 label text-[11px]">
                <Sparkles className="h-3 w-3 text-primary-text" aria-hidden /> {p.status.toUpperCase()} • {p.shortTitle.toUpperCase()}
              </span>
              <h1 className="display mt-3 text-[28px] text-background sm:text-[38px]">{p.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-background/75">{p.description}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1 rounded-full border border-background/40 bg-background px-3 py-1.5 text-xs font-bold text-foreground">
                <Check className="h-3 w-3 text-primary-text" aria-hidden /> {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className={`lg:col-span-8 ${cardSlush} p-7 sm:p-10`}>
            <h2 className="display text-xl text-foreground">Tentang Program</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {p.id === "web-creation" && "Kamu akan belajar dari nol: desain Figma, slicing Tailwind, Next.js, deploy, sampai teknik jualan ke UMKM. Setiap peserta wajib ship 1 website klien nyata sebagai portfolio."}
              {p.id === "socmed-x" && "Pelatihan socmed hands-on: strategi konten, copywriting, desain feed, Meta Ads, dan analitik. Cocok untuk yang mau handle sosmed UMKM/brand dan jadi freelance social media specialist."}
              {p.id === "re-boot" && "Pelatihan hardware hands-on: bongkar, cleaning, repasta, diagnosa kerusakan umum, hingga strategi buka jasa service di kampus. Cocok untuk yang suka ngoprek."}
              {p.id === "vite" && "Fokus deployment & event tech: domain, cPanel, hosting, SSL, serta pembuatan undangan digital VITE yang responsive, RSVP online, dan manajemen tamu."}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Output", d: p.id === "web-creation" ? "1 website klien live + portfolio" : p.id === "socmed-x" ? "Portfolio socmed + campaign live" : p.id === "re-boot" ? "Bisa buka jasa cleaning/service" : "Link undangan VITE siap share" },
                { t: "Durasi", d: p.status === "segera" ? "Akan diumumkan" : "4-6 minggu intensif" },
                { t: "Level", d: "Pemula welcome" },
                { t: "Sertifikat", d: "E-certificate HMSK" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-border bg-muted p-4">
                  <p className="label text-[11px] text-muted-foreground">{x.t.toUpperCase()}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={btnEmber}>
                Gabung via WA <Users className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/proker" className={btnPaper}>
                Lihat proker lain
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className={`${cardSlush} p-6`}>
              <p className="label text-[11px] text-muted-foreground">PEMBINA</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground font-bold text-background">{p.mentor.charAt(0)}</div>
                <div>
                  <p className="text-sm font-bold text-foreground">{p.mentor}</p>
                  <p className="text-xs text-muted-foreground">{p.mentorRole}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 label text-xs">
                {p.status === "berjalan" ? <><Zap className="h-3.5 w-3.5 text-primary-text" aria-hidden /> <span className="text-foreground">Berjalan</span></> : <><Clock3 className="h-3.5 w-3.5 text-muted-foreground" aria-hidden /> <span className="text-muted-foreground">Segera</span></>}
              </div>
            </div>

            <div className={`${cardSlush} bg-muted p-6`}>
              <p className="label text-[11px] text-muted-foreground">PROKER LAIN</p>
              <div className="mt-3 space-y-2">
                {other.map((o) => (
                  <Link key={o.id} href={`/proker/${o.id}`} className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-3 transition hover:surface-mist">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-foreground">{o.shortTitle}</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-foreground" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
