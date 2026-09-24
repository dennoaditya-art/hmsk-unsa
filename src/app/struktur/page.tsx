import { leaders, orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { Mail, MapPin, ArrowLeft, Crown, Sparkles } from "lucide-react";
import Link from "next/link";
import { btnEmber, btnPaper, cardSlush } from "@/lib/slush";

export default function StructurePage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden border-b border-border bg-sky">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-1.5 label text-xs text-foreground/60 hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 label text-[11px] text-foreground">
                <Crown className="h-3 w-3 text-primary" aria-hidden /> STRUKTUR PENGURUS
              </span>
              <h1 className="display mt-4 text-[32px] text-foreground sm:text-[46px]">Struktur Pengurus</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/75">
                Jajaran inti {orgProfile.fullName} — tiap orang pegang tanggung jawab & proker yang jelas, bukan sekadar nama di poster.
              </p>
            </div>
            <div className={`${cardSlush} px-5 py-4 lg:text-right`}>
              <p className="label text-[11px] text-muted-foreground">TOTAL PENGURUS</p>
              <p className="display text-2xl text-foreground">5 Orang Inti</p>
              <p className="text-xs text-muted-foreground">3 Proker Aktif • Universitas Surakarta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-background">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <article key={leader.name} className={`${cardSlush} p-6 sm:p-8 ${idx === 0 ? "md:col-span-2 bg-sky" : ""}`}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-[20px] overflow-hidden border border-border ${leader.image ? "bg-card" : "bg-foreground text-background text-2xl font-bold"}`}>
                  {leader.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                  ) : (
                    leader.name.charAt(0)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-border bg-foreground px-3 py-1 text-xs font-bold text-background">{leader.role}</span>
                    {leader.proker && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-primary px-2.5 py-1 label text-[11px] text-primary-foreground">
                        <Sparkles className="h-3 w-3" aria-hidden /> {leader.proker}
                      </span>
                    )}
                  </div>
                  <h2 className={`display mt-3 text-foreground leading-tight break-words ${leader.name.length > 28 ? "text-xl sm:text-2xl" : leader.name.length > 22 ? "text-[22px] sm:text-2xl" : "text-2xl"}`}>{leader.name}</h2>
                  {leader.nim && <p className="label text-[11px] text-primary mt-1">NIM {leader.nim}</p>}
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{leader.description}</p>

                  {leader.proker && prokers.find((p) => p.shortTitle === leader.proker) && (
                    <div className="mt-4 rounded-2xl border border-border bg-card p-3">
                      <p className="label text-[11px] text-muted-foreground">PROKER YANG DIBINA</p>
                      <p className="text-sm font-bold text-foreground">{prokers.find((p) => p.shortTitle === leader.proker)?.title}</p>
                    </div>
                  )}

                  <div className="mt-5 grid gap-2">
                    <a href="mailto:hmskunsa@gmail.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition">
                      <Mail className="h-3.5 w-3.5 text-primary" aria-hidden /> hmskunsa@gmail.com
                    </a>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden /> Universitas Surakarta, Jawa Tengah
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-foreground">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display text-2xl text-background sm:text-3xl">Tertarik Bergabung?</h2>
            <p className="mt-3 text-sm leading-6 text-background/70">Jadilah bagian HMSK UNSA — belajar, berkarya, dan menghasilkan bareng mentor yang sudah di lapangan.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={btnEmber}>
                Gabung WA Grup
              </a>
              <Link href="/proker" className={btnPaper}>
                Lihat Proker
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
