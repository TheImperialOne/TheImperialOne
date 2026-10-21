import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "#0a0513", surface: "#130b24", accent: "#c770f0", accentHi: "#e0aaff", accentDim: "#623686", muted: "#c9a9e0" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
  } },
  plugins: [],
} satisfies Config;
