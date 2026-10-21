"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
export default function Projects() {
  return (
    <>
      <Reveal>
        <h1 className="font-display text-5xl font-extrabold">My recent works</h1>
        <p className="mt-4 max-w-xl text-muted">Academic and product projects spanning data engineering, full stack web and Android development.</p>
      </Reveal>
      <motion.div variants={container} initial="hidden" animate="show" className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.title} variants={card} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-shadow hover:shadow-[0_0_32px_rgba(199,112,240,.28)]">
            <h2 className="font-display text-2xl font-bold">{p.title}</h2>
            <p className="mb-3 text-sm font-medium text-accent">{p.tagline}</p>
            <p className="mb-4 text-muted">{p.desc}</p>
            <p className="mb-5 text-xs text-muted/80">{p.meta}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {p.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-accent/40 px-3 py-1.5 text-sm transition hover:bg-accent/10">{l.label}</a>)}
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-bg">Demo <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" /></a>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
