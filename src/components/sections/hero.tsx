"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const prokerFacts = [
  { name: "WEB CREATION", note: "berjalan" },
  { name: "RE-BOOT", note: "hardware" },
  { name: "SOCMED-X", note: "live" },
];

export function Hero() {
  const shouldReduce = useReducedMotion();
  const enter = (delay: number, y = 14) =>
    shouldReduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease },
        };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-[112px] pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* kiri: kicker, headline, subtext, CTA, fakta proker — teks, bukan kartu */}
          <div>
            <motion.span
              {...enter(0, 8)}
              className="inline-flex items-center gap-2.5 mono text-[11px] font-bold tracking-[0.22em] text-muted-foreground"
            >
              <span className="h-px w-6 bg-border" />
              HMSK UNSA · UNIVERSITAS SURAKARTA
            </motion.span>

            <motion.h1
              {...enter(0.06, 10)}
              className="display mt-6 text-[44px] font-extrabold leading-[0.9] tracking-[-0.04em] text-foreground text-balance sm:text-[60px] lg:text-[72px]"
            >
              Sistem Komputer
              <br />
              <span className="text-primary">berkarya nyata.</span>
            </motion.h1>

            <motion.p
              {...enter(0.14, 10)}
              className="mt-6 max-w-[50ch] text-[16px] leading-7 text-muted-foreground text-pretty"
            >
              Bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing mentor yang sudah di lapangan — outputnya nyata, bukan cuma teori.
            </motion.p>

            <motion.div {...enter(0.22, 8)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/proker"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-[0.96] active:translate-y-px"
              >
                Lihat proker aktif <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/struktur"
                className="inline-flex items-center gap-1.5 border-b border-border pb-0.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Kenalan pengurus <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div
              {...enter(0.3, 8)}
              className="mono mt-10 flex flex-col gap-3 border-t border-border pt-5 text-[12px] tracking-[0.1em] text-muted-foreground"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {prokerFacts.map((f) => (
                  <span key={f.name}>
                    <b className="font-bold text-foreground">{f.name}</b> · {f.note}
                  </span>
                ))}
              </div>
              <div>50+ mahasiswa · 4 proker aktif · 3 mentor</div>
            </motion.div>
          </div>

          {/* kanan: satu foto decisif + caption — bukan nested card */}
          <motion.figure
            {...enter(0.16, 16)}
            className="relative overflow-hidden rounded-[20px] border border-foreground/15 bg-muted"
          >
            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-[4/5]">
              <Image
                src="/kampus/unsa-kampus.jpg"
                alt="Gedung Universitas Surakarta (UNSA) — kampus tempat HMSK berkarya"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-[50%_42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="mono text-[11px] font-bold tracking-[0.18em] text-primary">KAMPUS UNSA · SURAKARTA</p>
                <p className="mt-1.5 max-w-[38ch] text-sm leading-6">
                  Di sinilah HMSK berkarya — dari web sampai hardware.
                </p>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
