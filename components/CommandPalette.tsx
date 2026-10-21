"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
const items = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Experience", to: "/experience" }, { label: "Projects", to: "/project" }, { label: "Resume", to: "/resume" },
  { label: "GitHub", to: "https://github.com/TheImperialOne" }, { label: "LinkedIn", to: "https://linkedin.com/in/theimperialone" }, { label: "Email me", to: "mailto:aniketkale2003d@gmail.com" },
];
export function CommandPalette() {
  const [open, setOpen] = useState(false); const [q, setQ] = useState(""); const router = useRouter();
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); } if (e.key === "Escape") setOpen(false); };
    const o = () => setOpen(true);
    window.addEventListener("keydown", k); window.addEventListener("open-palette", o);
    return () => { window.removeEventListener("keydown", k); window.removeEventListener("open-palette", o); };
  }, []);
  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  const go = (to: string) => { setOpen(false); setQ(""); to.startsWith("/") ? router.push(to) : window.open(to, "_blank"); };
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-start justify-center bg-black/60 px-4 pt-32" onClick={() => setOpen(false)}>
          <motion.div initial={{ y: -16, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: -16, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-accent/10">
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && list[0] && go(list[0].to)} placeholder="Jump to…" className="w-full border-b border-white/10 bg-transparent px-5 py-4 outline-none placeholder:text-muted/60" />
            <ul className="max-h-72 overflow-auto p-2">
              {list.map((i) => <li key={i.label}><button onClick={() => go(i.to)} className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-accent/15">{i.label}</button></li>)}
              {!list.length && <li className="px-3 py-2 text-muted">Nothing matches “{q}”.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
