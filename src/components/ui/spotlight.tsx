"use client";
import { useRef, useEffect, useState } from "react";

export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); el.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${className}`}
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, oklch(0.546 0.215 262.881 / 0.13), transparent 70%)`,
      }}
    />
  );
}
