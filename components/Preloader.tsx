"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export function Preloader() {
  const [n, setN] = useState(0); const [show, setShow] = useState(true);
  useEffect(() => {
    try { if (sessionStorage.getItem("seen")) { setShow(false); return; } } catch {}
    const t = setInterval(() => setN((v) => { if (v >= 100) { clearInterval(t); setTimeout(() => { setShow(false); try { sessionStorage.setItem("seen", "1"); } catch {} }, 250); return 100; } return v + 4; }), 40);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="mb-6 h-12 w-12 rounded-xl border-2 border-accent" />
          <p className="font-display text-6xl font-extrabold tabular-nums">{Math.min(n, 100)}<span className="text-accent">%</span></p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
