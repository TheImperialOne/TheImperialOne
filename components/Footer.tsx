import { socials } from "@/data/site";
export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-sm text-muted">
      <div className="mb-4 flex justify-center gap-6">
        {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5 hover:text-accent">{s.label}</a>)}
      </div>
      © {new Date().getFullYear()} Aniket Kale
    </footer>
  );
}
