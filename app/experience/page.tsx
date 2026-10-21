"use client";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/site";
export default function Experience() {
  return (
    <>
      <Reveal><h1 className="font-display text-5xl font-extrabold">Experience</h1></Reveal>
      {timeline.map((s) => (
        <section key={s.section} className="mt-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">{s.section}</h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-2 h-1 rounded bg-accent" />
          </Reveal>
          <div className="mt-6 space-y-4 border-l border-white/10 pl-6">
            {s.entries.map((e, i) => (
              <Reveal key={e.title + i} delay={i * 0.05}>
                <motion.article whileHover={{ y: -3 }} className="group rounded-xl border border-white/10 border-l-accentDim bg-white/5 p-5 transition-colors hover:border-l-accent hover:shadow-[-6px_0_24px_-8px_rgba(199,112,240,.5)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                    <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-medium text-accentHi">{e.when}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.org}</p>
                  {e.points.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm">
                      {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">▸</span>{p}</li>)}
                    </ul>
                  )}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
