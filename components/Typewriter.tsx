"use client";
import { useEffect, useState } from "react";
export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % words.length); }
    }, !del && n === w.length ? 1400 : del ? 35 : 80);
    return () => clearTimeout(t);
  }, [n, del, i, words]);
  return <span aria-label={words.join(", ")}><span aria-hidden>{words[i].slice(0, n)}</span><span className="cursor text-accent" aria-hidden>|</span></span>;
}
