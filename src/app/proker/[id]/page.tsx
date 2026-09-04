import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Clock3, Zap, Wrench, Globe, Server, Users, Check } from "lucide-react";
import { prokers } from "@/data/proker";

export function generateStaticParams() {
  return prokers.map((p) => ({ id: p.id }));
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-6 w-6" />,
  cpu: <Wrench className="h-6 w-6" />,
  server: <Server className="h-6 w-6" />,
};

export function generateMetadata({ params }: { params: { id: string } }) {
  const p = prokers.find((x) => x.id === params.id);
  if (!p) return {};
  return {
    title: `${p.shortTitle} | HMSK UNSA`,
    description: p.description,
  };
}

export default function ProkerDetail({ params }: { params: { id: string } }) {
  const p = prokers.find((x) => x.id === params.id);
  if (!p) notFound();

  const other = prokers.filter((x) => x.id !== p.id);

  return (
    <main className="pt-[72px]">
      <section className={`relative overflow-hidden bg-gradient-to-br ${p.color} text-white`}>
        <div className="absolute inset-0 bg-[#0f1f3c]/20" />
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/proker" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-white/70 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE PROKER
          </Link>
          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0f1f3c] shadow-lg">{iconMap[p.icon] ?? <Sparkles className="h-6 w-6" />}</div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3" /> {p.status.toUpperCase()} • {p.shortTitle.toUpperCase()}
              </div>
              <h1 className="display mt-3 text-[30px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[40px]">{p.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">{p.description}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 mono text-xs font-semibold text-[#0f1f3c]">
                <Check className="h-3 w-3 text-emerald-600" /> {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="display text-xl font-bold tracking-tight text-[#0f1f3c]">Tentang Program</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {p.id === "webcraft" && "Kamu akan belajar dari nol: desain Figma, slicing Tailwind, Next.js, deploy, sampai teknik jualan ke UMKM. Setiap peserta wajib ship 1 website klien nyata sebagai portfolio."}
              {p.id === "laptopcare" && "Pelatihan hardware hands-on: bongkar, cleaning, repasta, diagnosa kerusakan umum, hingga strategi buka jasa service di kampus. Cocok untuk yang suka ngoprek."}
              {p.id === "hosting-undangan" && "Fokus deployment: domain, cPanel, hosting, SSL, serta pembuatan undangan digital berbasis link yang responsive dan mudah share via WA."}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Output", d: p.id === "webcraft" ? "1 website klien live + portfolio" : p.id === "laptopcare" ? "Bisa buka jasa cleaning/service" : "Link undangan online siap share" },
                { t: "Durasi", d: p.status === "segera" ? "Akan diumumkan" : "4-6 minggu intensif" },
                { t: "Level", d: "Pemula welcome" },
                { t: "Sertifikat", d: "E-certificate HMSK" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <p className="mono text-[11px] tracking-widest text-slate-500">{x.t.toUpperCase()}</p>
                  <p className="mt-1 text-sm font-semibold text-[#0f1f3c]">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-400">
                Gabung via WA <Users className="h-4 w-4" />
              </a>
              <Link href="/proker" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Lihat proker lain
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="mono text-[11px] tracking-widest text-slate-500">PEMBINA</p>
              <div className="mt-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white font-bold`}>{p.mentor.charAt(0)}</div>
                <div>
                  <p className="text-sm font-bold text-[#0f1f3c]">{p.mentor}</p>
                  <p className="mono text-xs text-slate-500">{p.mentorRole}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 mono text-xs">
                {p.status === "berjalan" ? <><Zap className="h-3.5 w-3.5 text-emerald-500" /> <span className="font-bold text-emerald-600">Berjalan</span></> : <><Clock3 className="h-3.5 w-3.5 text-amber-500" /> <span className="font-bold text-amber-600">Segera</span></>}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              <p className="mono text-[11px] tracking-widest text-slate-500">PROKER LAIN</p>
              <div className="mt-3 space-y-2">
                {other.map((o) => (
                  <Link key={o.id} href={`/proker/${o.id}`} className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-3 py-3 hover:border-[#0f1f3c] transition">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${o.color}`} />
                      <span className="text-sm font-semibold text-[#0f1f3c]">{o.shortTitle}</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
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
