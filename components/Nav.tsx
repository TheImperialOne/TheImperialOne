"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
const links = [["/", "Home"], ["/about", "About"], ["/experience", "Experience"], ["/project", "Projects"], ["/resume", "Resume"]];
export function Nav() {
  const path = usePathname(); const { scrollYProgress } = useScroll(); const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 }); const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 20); f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/75 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">AK<span className="text-accent">.</span></Link>
        <ul className="hidden gap-8 md:flex">
          {links.map(([href, label]) => (
            <li key={href}><Link href={href} className="group relative py-1 text-sm font-medium text-white/90 hover:text-accent">
              {label}
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${path === href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link></li>
          ))}
        </ul>
        <button onClick={() => window.dispatchEvent(new Event("open-palette"))} className="hidden rounded-lg border border-white/15 px-2.5 py-1 text-xs text-muted transition hover:border-accent hover:text-white md:block" aria-label="Open command menu">Ctrl K</button>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-bg/95 px-6 backdrop-blur md:hidden">
            {links.map(([href, label], i) => (
              <motion.li key={href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link href={href} className={`block py-3 ${path === href ? "text-accent" : ""}`}>{label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent" />
    </nav>
  );
}
