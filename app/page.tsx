"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { Stats, Marquee, Terminal, Pipeline, Clock } from "@/components/Widgets";
import { roles, intro, socials } from "@/data/site";
export default function Home() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xl">
          Hi there! <motion.span className="inline-block origin-[70%_70%]" animate={{ rotate: [0, 14, -8, 14, 0] }} transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}>👋</motion.span>
        </motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-6xl font-extrabold leading-none tracking-tight md:text-8xl">
          Aniket<br /><span className="text-accent">Kale</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 min-h-10 font-display text-2xl font-semibold md:text-3xl">
          <Typewriter words={roles} />
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-wrap gap-3">
          <Link href="/project" className="rounded-xl bg-accent px-6 py-3 font-medium text-bg shadow-lg shadow-accent/30 transition hover:bg-accentHi">See my projects</Link>
          <Link href="/resume" className="rounded-xl border border-accent/40 px-6 py-3 font-medium transition hover:bg-accent/10">Get my resume</Link>
        </motion.div>
      </section>

      <Marquee />
      <section className="py-16"><Reveal><Stats /></Reveal></section>

      <section className="py-4">
        <Reveal><h2 className="font-display text-4xl font-bold">Let me introduce myself</h2></Reveal>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {intro.map((p, i) => <Reveal key={i} delay={i * 0.05}><p>{p}</p></Reveal>)}
        </div>
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2"><Terminal /><div className="space-y-4"><Clock /><Pipeline /></div></Reveal>
        <Reveal className="mt-10">
          <h3 className="mb-4 font-display text-2xl font-semibold">Find me on</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}
                className="rounded-full border border-accent/40 px-5 py-2 text-sm transition hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(199,112,240,.35)]">{s.label}</motion.a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
