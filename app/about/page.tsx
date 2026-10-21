"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { about, quote, stack, tools } from "@/data/site";
const pop = { hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } };
const row = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
function Chips({ items }: { items: string[] }) {
  return (
    <motion.ul variants={row} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
      {items.map((t) => (
        <motion.li key={t} variants={pop} whileHover={{ scale: 1.1 }} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:border-accent hover:shadow-[0_0_14px_rgba(199,112,240,.4)]">{t}</motion.li>
      ))}
    </motion.ul>
  );
}
export default function About() {
  return (
    <>
      <Reveal><h1 className="font-display text-5xl font-extrabold">About me</h1></Reveal>
      <Reveal className="mt-8">
        <motion.blockquote whileHover={{ y: -4 }} className="max-w-3xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-lg leading-relaxed text-muted transition-shadow hover:shadow-[0_0_30px_rgba(199,112,240,.2)]">
          {about.map((p, i) => <p key={i}>{p}</p>)}
          <footer className="font-display text-xl font-semibold text-accent">“{quote}” <span className="text-sm text-muted">TheImperialOne</span></footer>
        </motion.blockquote>
      </Reveal>
      <section className="mt-20">
        <Reveal><h2 className="font-display text-4xl font-bold">Professional skillset</h2></Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {stack.map((g) => (<Reveal key={g.group}><h3 className="mb-3 font-medium text-accentHi">{g.group}</h3><Chips items={g.items} /></Reveal>))}
        </div>
      </section>
      <section className="mt-20">
        <Reveal><h2 className="mb-6 font-display text-4xl font-bold">Tools I use</h2></Reveal>
        <Chips items={tools} />
      </section>
      <Reveal className="mt-16">
        <Link href="/experience" className="group inline-flex items-center gap-2 text-lg font-medium text-accent">See my work experience <ArrowRight className="transition-transform group-hover:translate-x-1.5" size={20} /></Link>
      </Reveal>
    </>
  );
}
