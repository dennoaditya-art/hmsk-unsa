export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0f1f3c] border-r-emerald-500 animate-spin" />
          <div className="absolute inset-2 rounded-full bg-[#0f1f3c] flex items-center justify-center mono text-[10px] font-bold tracking-widest text-white">HMSK</div>
        </div>
        <p className="mono text-[11px] tracking-[0.18em] text-slate-500">LOADING HMSK.SYS</p>
      </div>
    </div>
  );
}
