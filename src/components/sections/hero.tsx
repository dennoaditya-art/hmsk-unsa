"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { btnEmber } from "@/lib/slush";

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
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-[100px] pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.span
              {...enter(0, 8)}
              className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 label text-[11px] text-foreground"
            >
              HMSK UNSA • SISTEM KOMPUTER
            </motion.span>

            <motion.h1
              {...enter(0.06, 10)}
              className="display mt-6 text-[38px] text-foreground sm:text-[54px] lg:text-[68px]"
            >
              Lab Berkarya
              <br />
              <span className="text-primary-text">Sistem Komputer.</span>
            </motion.h1>

            <motion.p
              {...enter(0.14, 10)}
              className="mt-6 max-w-[50ch] text-[16px] leading-7 text-foreground/80 text-pretty"
            >
              Bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing mentor yang sudah di lapangan — outputnya nyata, bukan cuma teori.
            </motion.p>

            <motion.div {...enter(0.22, 8)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/proker" className={btnEmber}>
                Lihat proker aktif <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/struktur"
                className="inline-flex items-center gap-1.5 border-b-2 border-foreground pb-0.5 text-sm font-bold text-foreground transition hover:border-primary hover:text-primary-text"
              >
                Kenalan pengurus <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </motion.div>

            <motion.div
              {...enter(0.3, 8)}
              className="mt-10 flex flex-col gap-3 border-t border-border pt-5 label text-[12px] text-foreground/70"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {prokerFacts.map((f) => (
                  <span key={f.name}>
                    <b className="text-foreground">{f.name}</b> · {f.note}
                  </span>
                ))}
              </div>
              <div>50+ mahasiswa · 4 proker aktif · 3 mentor</div>
            </motion.div>
          </div>

          <motion.figure
            {...enter(0.16, 16)}
            className="relative overflow-hidden rounded-[20px] border border-border bg-card"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="label text-[11px] text-primary-text">KAMPUS UNSA · SURAKARTA</p>
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
