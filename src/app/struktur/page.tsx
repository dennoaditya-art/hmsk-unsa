import { leaders, orgProfile } from "@/data/leaders";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ArrowLeft, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function StructurePage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-primary/14 to-primary/08 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-background/55 hover:text-background">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background/08 border border-background/12 px-3 py-1 mono text-[11px] tracking-widest">
                <Crown className="h-3 w-3 text-primary" /> STRUKTUR PENGURUS 2025
              </div>
              <h1 className="display mt-4 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[44px]">Struktur Pengurus</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-background/65">
                Jajaran inti {orgProfile.fullName} — tiap orang pegang tanggung jawab & proker yang jelas, bukan sekadar nama di poster.
              </p>
            </div>
            <div className="rounded-2xl bg-card text-foreground px-5 py-4 lg:text-right border border-border">
              <p className="mono text-[11px] tracking-widest text-muted-foreground">TOTAL PENGURUS</p>
              <p className="display text-2xl font-bold">5 Orang Inti</p>
              <p className="mono text-xs text-muted-foreground">3 Proker Aktif • Universitas Surakarta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-background">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <Card key={leader.name} className={idx === 0 ? "md:col-span-2 border-primary/30 bg-card shadow-[0_16px_32px_rgba(212,165,116,0.12)]" : "border-border bg-card hover:border-primary/20"}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-[20px] overflow-hidden shadow-lg ${leader.image ? "bg-card" : `bg-gradient-to-br ${leader.color} text-background text-2xl font-bold`}`}>
                    {leader.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                    ) : (
                      leader.name.charAt(0)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="bg-foreground text-background hover:bg-foreground">{leader.role}</Badge>
                      {leader.proker && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 border border-border px-2.5 py-1 mono text-[11px] font-bold text-primary">
                          <Sparkles className="h-3 w-3" /> {leader.proker}
                        </span>
                      )}
                    </div>
                    <h2 className="display mt-3 text-2xl font-bold tracking-tight text-foreground">{leader.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{leader.description}</p>

                    {/* proker detail */}
                    {leader.proker && prokers.find((p) => p.shortTitle === leader.proker) && (
                      <div className="mt-4 rounded-2xl bg-background border border-border p-3">
                        <p className="mono text-[11px] tracking-widest text-muted-foreground">PROKER YANG DIBINA</p>
                        <p className="text-sm font-bold text-foreground">{prokers.find((p) => p.shortTitle === leader.proker)?.title}</p>
                      </div>
                    )}

                    <div className="mt-5 grid gap-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Mail className="h-3.5 w-3.5 text-primary" /> {leader.name.toLowerCase()}@hmsk-unsa.ac.id
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 text-primary" /> +62 812-3456-7890
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> Universitas Surakarta, Jawa Tengah
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-foreground border-t border-background/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display text-2xl font-bold tracking-tight text-background sm:text-3xl">Tertarik Bergabung?</h2>
            <p className="mt-3 text-sm leading-6 text-background/65">Jadilah bagian HMSK UNSA — belajar, berkarya, dan menghasilkan bareng mentor yang sudah di lapangan.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-foreground hover:bg-primary transition"
              >
                Gabung WA Grup
              </a>
              <Link href="/proker" className="inline-flex items-center gap-2 rounded-full bg-background/08 border border-background/12 px-6 py-3 text-sm font-bold text-background hover:bg-background/12">
                Lihat Proker
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
