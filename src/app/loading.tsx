export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[foreground] border-r-[primary] animate-spin" />
          <div className="absolute inset-2 rounded-full bg-foreground flex items-center justify-center mono text-[10px] font-bold tracking-widest text-background">HMSK</div>
        </div>
        <p className="mono text-[11px] tracking-[0.18em] text-muted-foreground">LOADING HMSK.SYS</p>
      </div>
    </div>
  );
}
