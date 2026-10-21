"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { marquee, stats, terminal } from "@/data/site";

export function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true });
  useEffect(() => { if (!inView || !ref.current) return; const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix; } }); return () => c.stop(); }, [inView, value, decimals, suffix]);
  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}
export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <motion.div key={s.label} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-display text-4xl font-extrabold text-accent"><Counter {...s} /></p>
          <p className="mt-1 text-sm text-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-white/10 py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee flex w-max gap-3">{row.map((t, i) => <span key={i} className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">{t}</span>)}</div>
    </div>
  );
}
export function Terminal() {
  const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true }); const [n, setN] = useState(0);
  useEffect(() => { if (!inView) return; const t = setInterval(() => setN((v) => (v < terminal.length ? v + 1 : v)), 450); return () => clearInterval(t); }, [inView]);
  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-surface p-5 font-mono text-sm">
      <div className="mb-4 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-red-400/70" /><i className="h-3 w-3 rounded-full bg-yellow-400/70" /><i className="h-3 w-3 rounded-full bg-green-400/70" /><span className="ml-3 text-xs text-muted">~/aniket-kale</span></div>
      <div className="min-h-[9.5rem] space-y-1.5">
        {terminal.slice(0, n).map(([k, v]) => <p key={k}><span className="text-accent">❯ {k}</span> <span className="text-muted">→</span> {v}</p>)}
        <p><span className="text-accent">❯</span> <span className="cursor">▍</span></p>
      </div>
    </div>
  );
}
const nodes = ["Sources", "PySpark", "Airflow", "Hive / HDFS", "PostgreSQL"];
export function Pipeline() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-5">
      <p className="mb-5 text-sm text-muted">A pipeline I build, running live</p>
      <div className="relative flex items-center justify-between gap-2">
        <div className="absolute inset-x-6 top-1/2 h-px bg-accent/30" />
        {[0, 1, 2].map((d) => <motion.span key={d} className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_#c770f0]" initial={{ left: "4%" }} animate={{ left: "94%" }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: d * 1.15 }} />)}
        {nodes.map((n) => <motion.div key={n} whileHover={{ scale: 1.08 }} className="relative z-10 rounded-lg border border-accent/40 bg-bg px-2 py-2 text-center text-[11px] font-medium md:px-3 md:text-sm">{n}</motion.div>)}
      </div>
    </div>
  );
}
export function Clock() {
  const [t, setT] = useState("");
  useEffect(() => { const f = () => setT(new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" })); f(); const i = setInterval(f, 1000); return () => clearInterval(i); }, []);
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
      <div><p className="text-sm text-muted">Mumbai, India</p><p className="font-display text-3xl font-bold tabular-nums">{t || "--:--:--"}</p></div>
      <span className="flex items-center gap-2 text-sm"><span className="relative flex h-2.5 w-2.5"><span className="absolute h-full w-full animate-ping rounded-full bg-green-400/70" /><span className="relative h-2.5 w-2.5 rounded-full bg-green-400" /></span>Open to opportunities</span>
    </div>
  );
}
