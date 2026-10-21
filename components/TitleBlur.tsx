"use client";
import { useEffect } from "react";
export function TitleBlur() {
  useEffect(() => {
    const original = document.title;
    const f = () => { if (document.hidden) document.title = "Come back 👋 Aniket's waiting"; else document.title = original; };
    document.addEventListener("visibilitychange", f); return () => document.removeEventListener("visibilitychange", f);
  }, []);
  return null;
}
