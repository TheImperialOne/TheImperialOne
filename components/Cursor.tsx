"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 }), sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [big, setBig] = useState(false); const [on, setOn] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,input")); };
    window.addEventListener("mousemove", mv);
    return () => { window.removeEventListener("mousemove", mv); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-accent" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent mix-blend-screen" style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: big ? 64 : 34, height: big ? 64 : 34, backgroundColor: big ? "rgba(199,112,240,.18)" : "rgba(199,112,240,0)" }} transition={{ duration: 0.2 }} />
    </>
  );
}
