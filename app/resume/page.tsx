"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
export default function Resume() {
  return (
    <div className="flex flex-col items-center">
      <motion.a href="/resume.pdf" download whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-medium text-bg shadow-lg shadow-accent/30 hover:shadow-accent/50">
        <Download size={20} /> Download resume
      </motion.a>
      <motion.iframe src="/resume.pdf" title="Aniket Kale's resume" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 h-[80vh] w-full max-w-4xl rounded-2xl border border-white/10 bg-white" />
    </div>
  );
}
