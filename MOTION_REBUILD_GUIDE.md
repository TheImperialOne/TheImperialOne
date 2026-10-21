# Motion-Style Portfolio Rebuild Guide for Claude

> **Goal:** Rebuild Aniket Kale's portfolio website using **React + Framer Motion** with a strong focus on user engagement, delightful micro-interactions, smooth page transitions, and a "wonderful to use" feel. Target stack: **Next.js 14+ (App Router) + Framer Motion + Tailwind CSS + Lucide React**.

---

## 1. Source Website Audit (What Already Exists)

The existing portfolio is a **Create React App** (React 17 + Bootstrap 5) site hosted at `theimperialone.netlify.app`.

### Current Stack
| Item | Detail |
|------|--------|
| Framework | React 17 (CRA), react-router-dom v6 |
| Styling | Bootstrap 5 + custom CSS (`style.css`, `App.css`) |
| Icons | react-icons (Ai, Si, Di, Fa, Im, Bs, Cg) |
| Particles | react-tsparticles |
| Typewriter | typewriter-effect |
| Tilt | react-parallax-tilt |
| PDF | react-pdf |
| GitHub Calendar | react-github-calendar |

### Current Pages / Routes
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `Home` + `Home2` | Hero section + "Introduce myself" + socials |
| `/about` | `About` | Bio card, tech stack groups, tools, GitHub calendar, CTA |
| `/experience` | `Experience` | Work experience, internships, education, certifications, leadership, achievements |
| `/project` | `Projects` | Project cards grid (4 projects) |
| `/resume` | `ResumeNew` | Download CV button + embedded PDF viewer |

### Current Design Language
- **Theme:** Dark mode only. Deep navy/purple background (`#0c0513`, `#1b1429`).
- **Accent color:** Purple / violet (`#c770f0`, `--imp-text-color`; `#cd5ff8` for name).
- **Typography:** Sans-serif, large display headings (2.4em–2.6em), body ~1.2em.
- **Effects:** Background particles, hover scale on cards, sticky navbar with blur, preloader on load, waving hand emoji, typewriter effect cycling job titles.

### Content (All Real Data to Preserve)

**Owner:** Aniket Kale — Data Engineer & Full Stack Developer, Mumbai, India.

**Hero taglines (typewriter loop):**
`Data Engineer`, `Full Stack Developer`, `SAP Basis Consultant`, `MERN Stack Developer`, `Android Developer`

**Home "Introduce myself" body:**
> I am a tech enthusiast who loves creating impactful digital solutions.
>
> My work centres on **data engineering and distributed systems**, building high-volume ETL/ELT pipelines with **PySpark, Apache Airflow, Hive** and **SQL**, with hands-on experience in enterprise data architecture.
>
> Alongside data work, I build **scalable full stack applications** using **Node.js, React, Spring Boot, Flutter and Android**.
>
> I currently also work as an **SAP Basis Consultant** at LTIMindtree, administering enterprise landscapes and keeping critical systems available.
>
> I am especially interested in **AI/ML systems** and how they can be wired into real data platforms to build intelligent, enterprise-grade products.

**About card (quote):**
> Hi everyone, I am **Aniket Kale** based in **Mumbai, India.**
> I currently work as a **Data Engineer**, building distributed ETL/ELT pipelines and enterprise data systems with PySpark, Airflow and Hive. Alongside that I take on SAP Basis administration at LTIMindtree, where I support a three-instance landscape for a global FMCG client.
> I previously worked as a **Quality Assurance Intern** at Yoliday, validating APIs with Postman and Charles Proxy, and as an **Android Developer Intern** at CareLink building healthcare apps in Java and Firebase.
> I hold a Bachelor of Engineering in Information Technology from Vasantdada Patil Pratishthan's College of Engineering, Mumbai, with a CGPA of 8.41.
>
> Apart from work, some of the things I love doing: Playing Games, Reading Novels, Watching Anime, Athletics.
>
> *"Strive to build things that make a difference!"* — TheImperialOne

**Tech Stack Groups:**
- Data Engineering & Big Data: Apache Spark, Apache Airflow, Apache Hadoop, Hive, Databricks, dbt
- Programming Languages: Python, Java, JavaScript, Dart
- Cloud Platforms: Microsoft Azure, AWS, Apple, Google Cloud
- Backend & Mobile: Spring Boot, Express, Node.js, React, Firebase, Mobile
- Databases: PostgreSQL, MySQL, MongoDB
- DevOps: Docker

**Tools:** Android Studio, VS Code, JetBrains, Postman, Git, Docker, Jenkins, Figma, Slack, Linux

**Socials:** GitHub (`TheImperialOne`), LinkedIn (`theimperialone`), Instagram (`aniket_d_kale`), Email (`aniketkale2003d@gmail.com`)

**Projects:**
1. **AyurSage** — Ayurvedic Healthcare Platform. NLP/ML to interpret Ayurvedic texts, Flutter + Firebase mobile app, real-time user feedback. Team of 4, Team Lead, April 2025. Links: App, ML Model.
2. **HireBuddy** — Smart Competency Diagnostics Platform. Adaptive assessment, Python + GenAI + MERN, cloud dashboards. Team of 4, Developer, March 2025. Demo: `hirebuddy-candidate.vercel.app`. Links: Backend, Candidate, HR.
3. **Setu X** — Decentralised Healthcare dApp. Java, Android Studio, Firebase/Filebase, role-based access, ~40% faster retrieval. Team of 4, Technical Lead, March 2024. Demo: `setu-x.vercel.app`. Links: dApp, Hyperledger, Web App.
4. **College Management System** — Academic admin platform, Java, JSP, MySQL. Team of 4, Full Stack Developer, February 2022.

**Work Experience:**
- Data Engineer — Contract, Remote — Swayambhu Academy, Mumbai — Nov 2024 – Nov 2025
  - ETL/ELT with PySpark, Python, SQL, Airflow, Hive
  - Data integrity across HDFS, Hive, PostgreSQL
  - Airflow DAGs, ~15 hours/week saved
- SAP Basis Consultant — Onsite — LTIMindtree, Mumbai — Dec 2025 – Present
  - Three-instance SAP landscape, 1,000+ users
  - 99.5%+ availability, 150+ monthly background jobs
  - Cut L1/L2 incident turnaround by 25%

**Internships:**
- QA Intern — Remote — Yoliday, Mumbai — Dec 2024 – Feb 2025
- Android Developer Intern — Remote — CareLink Pvt. Ltd., Mumbai — Jun 2023 – Aug 2023
- Web Developer Intern — Remote — MakeMyHolidayz Pvt. Ltd., Mumbai — Mar 2022 – Jul 2022

**Education:**
- BE in Information Technology — Vasantdada Patil Pratishthan's College of Engineering, Mumbai (Mumbai University) — Nov 2022 – May 2025 — CGPA 8.41
- Diploma in IT — Government Polytechnic, Mumbai — Aug 2019 – Sept 2022 — 88.17%

**Certifications (2025):** OCI Foundations/Architect/DevOps; AWS Cloud Practitioner Essentials; Google Cloud Computing Foundations + Foundations of Cybersecurity.

**Leadership:**
- Team Lead & Primary Developer, AyurSage (2025)
- Technical Lead & Architect, Setu X Healthcare dApp (2024)
- Member & Event Coordinator, International Advanced Computing Community (2023–2024)
- Student Volunteer & Peer Technical Mentor (2023–2024)

**Achievements:**
- ICETCSE-2025 — Research paper presentation on NLP/AI for healthcare (March 2025)
- Quasar Hackathon — 1st Place — HireBuddy (2025)
- TechVenture Project Competition — 1st Prize (2024)
- TechGyanathon — 2nd Prize (2023, 2024)
- TechSalute — 3rd Prize (2023)

---

## 2. Recommended Motion-First Tech Stack

| Layer | Recommendation | Why |
|-------|---------------|-----|
| Framework | Next.js 14 (App Router) | Server components, fast transitions, SEO |
| Animation | **Framer Motion** (latest) | Layout animations, shared layout, scroll reveals, orchestrated entrance |
| Styling | Tailwind CSS | Rapid dark-theme utility styling, easy motion integration |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| Font | Inter (Google Fonts) + variable font | Readable, modern |
| Background | Custom canvas particles or `react-tsparticles` port | Keeps the magical ambient feel |
| Deployment | Vercel | Native Next.js support, edge network |

**Key Framer Motion features to leverage:**
- `motion` components (`motion.div`, `motion.h1`, etc.)
- `AnimatePresence` for exit animations on route changes
- `motion.route` / `useScroll`, `useTransform` for parallax
- `layout` prop for shared-layout animations (cards expanding, etc.)
- `staggerChildren` / `variants` for list entrances
- `whileHover`, `whileTap`, `whileInView` for micro-interactions
- `useMotionValue` + `useSpring` for physics-based UI

---

## 3. Design System (Motion-ified)

### Colors (Tailwind config)
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      bg: '#0a0513',        // deep dark (replaces #0c0513)
      surface: '#130b24',   // card surface
      accent: '#c770f0',    // primary purple (--imp-text-color)
      accentHover: '#e0aaff',
      accentDim: '#623686',
      text: '#f8fafc',
      textMuted: '#c9a9e0',
      border: 'rgba(199, 112, 240, 0.35)',
    },
  },
}
```

### Typography Scale
| Element | Size | Weight | Motion |
|---------|------|--------|--------|
| Hero name | 3.5rem–4.5rem | 800 | scale + fade |
| Hero role (typewriter) | 2rem | 600 | color cycle |
| Section heading | 2rem–2.5rem | 700 | slide-up + fade |
| Body | 1.125rem | 400 | fade-in |
| Meta/caption | 0.875rem | 500 | subtle scale |

### Spacing & Border Radius
- Sections: `py-20` to `py-32` (desktop), `py-12` (mobile)
- Cards: `rounded-2xl` (24px) with subtle border
- Buttons: `rounded-xl` (12px), `px-6 py-3`

### Motion Easing Presets
```js
export const ease = {
  smooth: [0.4, 0, 0.2, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.25, 0.1, 0.25, 1],
}
```

---

## 4. Page-by-Page Motion Specifications

### A. Preloader (Full-screen, then fade out)
- Full-screen overlay matching `#0c0513` background.
- Centered animated logo mark (rotate + pulse).
- On load complete: overlay scales up slightly and fades out (`opacity: 1 → 0`, `scale: 1 → 1.05`) over 0.6s with `ease.out`.
- Body scroll unlocks.

### B. Navbar (Fixed top, glassmorphism)
- **Default:** Transparent, blur backdrop on scroll.
- **Scroll state (`scrollY > 20`):** Background `rgba(27, 26, 46, 0.8)`, `backdrop-blur`, subtle shadow. Transition 0.3s.
- **Links:** `whileHover` scale 1.05, underline accent color expands left-to-right (`width: 0 → 100%`).
- **Mobile menu:** Staggered fade-in + slide-down from top (AnimatePresence).
- **Fork/Star button:** `whileTap` scale 0.95, gradient hover glow.

### C. Home Page (Hero + About-in-Hero)

#### Hero Section (`/`)
- **Background:** Dark gradient + subtle moving particle field (mouse-reactive if possible). `position: fixed`, z-index behind content.
- **Layout:** Two columns on desktop (text left, illustration right). Single column on mobile.
- **Entrance sequence (staggered):**
  1. `"Hi There! 👋"` — fade-in + slight upward drift, 0.5s
  2. `"I'M ANIKET KALE"` — fade-in + scale 0.95 → 1, 0.6s, delay 0.1s
  3. Typewriter role — character-by-character, looping, cursor blink
  4. Illustration image — fade-in + `scale: 0.9 → 1`, gentle float animation (y: -10 → 10 loop)
- **Waving hand:** Continuous gentle rotation loop (CSS keyframes or Framer `animate`).

#### Home2 — "Let Me Introduce Myself" Section
- **Heading:** `"LET ME INTRODUCE MYSELF"` — word-by-word stagger fade-in.
- **Body paragraphs:** Reveal on scroll with `whileInView` (opacity 0 → 1, y: 20 → 0), staggered by paragraph.
- **Purple highlights:** Key terms pulse gently on hover.
- **Avatar:** Tilt effect on mouse move (parallax tilt), `whileHover` scale 1.02, circular mask with subtle border glow.
- **Socials (Find Me On):** Circular icon buttons. `whileHover` lift (y: -4), background scale pulse, icon color shift to accent. Staggered entrance.

### D. About Page (`/about`)
- **Layout:** Two columns (bio card left, image right) on desktop; stacked mobile.
- **Bio card:** Glassmorphism card, `whileHover` lift + border glow, entrance fade-up.
- **Tech Stack Groups:** Each group is a collapsible/expandable section. Icons enter with staggered scale-from-zero + fade. On hover, icon scales 1.15 and ring glows.
- **Tools:** Grid of tool icons, same hover treatment.
- **GitHub Calendar:** Embedded or custom motion contribution graph. Bars animate height on load (staggered), hover tooltip with `whileHover`.
- **CTA link:** "See my work experience" — arrow icon that slides right on hover.

### E. Experience Page (`/experience`)
- **Layout:** Vertical timeline feel.
- **Section headings:** Slide-up + fade, with accent underline that draws left-to-right.
- **Entries (Work, Internships, Education, Certs, Leadership, Achievements):**
  - Each entry card: `whileInView` stagger fade-up (y: 30 → 0).
  - Role/title: bold, accent color on the emphasized word.
  - Period pill: badge-style, subtle pulse.
  - Bullet points: fade-in sequentially with small delay; icon (`▸`) color accent.
  - Hover on entry: left border glows, card lifts slightly.

### F. Projects Page (`/project`)
- **Heading:** "My Recent Works" with decorative underline.
- **Card grid:** 2-col desktop, 1-col mobile.
- **Card entrance:** Staggered `layout` + fade-up (y: 40 → 0), 0.05s stagger between cards.
- **Card hover:**
  - Scale 1.02, `box-shadow` glow accent.
  - Tags/badge shimmer.
  - Links slide up from bottom (`y: 10 → 0`, opacity 0 → 1).
- **Demo links:** External open arrow icon that nudges right on hover.
- **GitHub links:** Icon spin or pulse on hover.

### G. Resume Page (`/resume`)
- **Download button:** Large, prominent. `whileTap` scale 0.95, icon + text, glow on hover.
- **PDF viewer:** Smooth fade-in of the document frame; page scale animation on load.
- **Layout:** Centered, max-width container, plenty of whitespace.

### H. Footer
- Simple, centered copyright + social icons.
- Icons: `whileHover` lift + color shift.
- Subtle fade-in on mount.

---

## 5. Global Interaction Patterns

| Interaction | Motion Implementation |
|-------------|----------------------|
| Page route change | `AnimatePresence` + `motion.route` with cross-fade (0.3s) + slight slide |
| Scroll reveal | `whileInView={{ opacity: 1, y: 0 }}` with `viewport: { once: true }` and margin "-10%" |
| Hover lift | `whileHover={{ y: -4, scale: 1.02 }}` transition `{ type: "spring", stiffness: 400, damping: 17 }` |
| Tap feedback | `whileTap={{ scale: 0.95 }}` |
| Staggered lists | `variants={{ container: { hidden: {}, show: { staggerChildren: 0.08 } } } }` |
| Focus states | Visible ring accent color, `whileFocus` scale 1.01 |
| Reduced motion | Respect `prefers-reduced-motion`: use `useReducedMotion()`, fallback to opacity-only fades |

---

## 6. Suggested File Structure (Next.js + Framer Motion)

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, preloader provider
│   ├── page.tsx            # Home (/)
│   ├── about/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── project/
│   │   └── page.tsx
│   └── resume/
│       └── page.tsx
├── components/
│   ├── motion/
│   │   ├── Reveal.tsx      # whileInView wrapper
│   │   ├── StaggerList.tsx # staggered children container
│   │   ├── TiltCard.tsx    # mouse-reactive tilt
│   │   ├── ParticleBg.tsx  # ambient particle canvas
│   │   └── PageTransition.tsx
│   ├── ui/
│   │   ├── Button.tsx      # motion button with variants
│   │   ├── Card.tsx        # motion card
│   │   ├── Badge.tsx       # pill badge
│   │   ├── NavLink.tsx     # motion nav link
│   │   └── SocialIcon.tsx  # hover animated social
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HomeAbout.tsx   # old Home2
│   │   ├── AboutCard.tsx
│   │   ├── TechStack.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── TimelineEntry.tsx
│   │   └── Footer.tsx
│   └── layout/
│       └── Preloader.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── leadership.ts
│   ├── achievements.ts
│   ├── techStack.ts
│   └── socials.ts
├── lib/
│   └── motionVariants.ts   # shared variants & easings
├── styles/
│   └── globals.css
├── tailwind.config.ts
└── next.config.js
```

---

## 7. Code Templates for Claude

### Shared Motion Variants (`lib/motionVariants.ts`)
```ts
import type { Variants } from "framer-motion";

export const ease = {
  smooth: [0.4, 0, 0.2, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const scaleHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};
```

### Reveal-on-Scroll Wrapper (`components/motion/Reveal.tsx`)
```tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Reveal({ children, delay = 0, once = true }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 30 }}
      animate={once ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

### Motion Button (`components/ui/Button.tsx`)
```tsx
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  icon?: "right" | "left" | "download";
}

export function Button({ children, variant = "primary", size = "md", external, icon, className, ...props }: ButtonProps) {
  const base = "rounded-xl font-medium transition-all disabled:opacity-50";
  const variants = {
    primary: "bg-[#c770f0] text-white hover:bg-[#e0aaff] shadow-lg shadow-[#c770f0]/30",
    outline: "border border-[#c770f0]/40 text-white hover:bg-[#c770f0]/10",
    ghost: "text-[#c9a9e0] hover:text-white",
  };
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3", lg: "px-8 py-4 text-lg" };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon === "left" && <ArrowRight size={18} className="mr-2" />}
      {children}
      {icon === "right" && <ArrowRight size={18} className="ml-2" />}
      {external && icon !== "right" && <ExternalLink size={16} className="ml-1.5" />}
    </motion.button>
  );
}
```

### Staggered Project Card (`components/sections/ProjectsGrid.tsx`)
```tsx
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleHover } from "@/lib/motionVariants";

export function ProjectsGrid({ projects }: any) {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0513] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-white mb-6"
        >
          My Recent <span className="text-[#c770f0]">Works</span>
        </motion.h2>
        <motion.p className="text-[#c9a9e0] mb-12 max-w-xl">
          Academic and product projects spanning data engineering, full stack web and Android development.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p: any, i: number) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              whileHover={scaleHover.whileHover}
              whileTap={scaleHover.whileTap}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
            >
              <motion.h3
                whileHover={{ color: "#c770f0" }}
                className="text-xl font-semibold text-white mb-1"
              >
                {p.title}
              </motion.h3>
              <p className="text-[#c770f0]/70 text-sm font-medium mb-3">{p.tagline}</p>
              <p className="text-[#c9a9e0] text-sm mb-6 line-clamp-3">{p.description}</p>
              <p className="text-xs text-[#a588c0] mb-4">{p.meta}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {p.links.map((l: any) => (
                  <Button key={l.label} variant="outline" size="sm" asChild>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </Button>
                ))}
                {p.demoLink && (
                  <Button variant="primary" size="sm" asChild>
                    <a href={p.demoLink} target="_blank" rel="noopener noreferrer">
                      Demo <ExternalLink size={14} />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

### Navbar with Scroll Blur (`components/layout/Navbar.tsx`)
```tsx
"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/project", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5"
      style={{
        background: `rgba(10, 5, 19, ${0.6 + 0.2 * opacity})`,
        backdropFilter: `blur(${10 + 10 * opacity}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white tracking-tighter">
          TK
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-[#c770f0]" : "text-white hover:text-[#c770f0]"
              }`}
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
          <Button variant="ghost" asChild>
            <a href="https://github.com/TheImperialOne" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalLink size={14} />
            </a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={spring}
            className="md:hidden absolute top-16 left-0 w-full bg-[#0a0513]/95 backdrop-blur border-b border-white/5 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 text-white hover:text-[#c770f0]">
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

---

## 8. Build Order for Claude

1. **Setup:** Initialize Next.js + Tailwind + Framer Motion + Lucide. Configure Tailwind dark theme colors.
2. **Data layer:** Create `data/*.ts` files with all content (projects, experience, education, techStack, socials, achievements, leadership).
3. **Shared motion lib:** `lib/motionVariants.ts` + `components/motion/Reveal.tsx` + `components/motion/StaggerList.tsx`.
4. **UI primitives:** `Button`, `Card`, `Badge`, `NavLink`, `SocialIcon` — all with `whileHover`/`whileTap`.
5. **Layout:** `Navbar` (glass scroll effect), `Footer`, `Preloader`.
6. **Pages (in order):**
   - `/` Hero + HomeAbout (hero with typewriter, particles, socials)
   - `/about` Bio card, tech stack groups, tools, GitHub calendar, CTA
   - `/experience` Work, internships, education, certs, leadership, achievements — staggered timeline
   - `/project` Projects grid with hover-revealed links
   - `/resume` Download CV + PDF viewer
7. **Page transitions:** Wrap with `AnimatePresence` + `motion.route` for cross-fade between routes.
8. **Polish:** Mouse-reactive particle background, reduced-motion support, mobile refinements, focus-visible rings, SEO meta tags.
9. **Deploy:** Vercel, verify Lighthouse scores.

---

## 9. Key "Wonderful to Use" Details to Include

- **Ambient particle field** that responds subtly to mouse movement (not distracting).
- **Staggered entrances** so content feels orchestrated, not dumped.
- **Glassmorphism navbar** that appears on scroll with backdrop blur.
- **Shared layout animations** — if a project card is clicked (future detail page), it expands to fill screen.
- **Typewriter effect** rebuilt in Framer Motion (character loop with cursor blink).
- **Purple accent glows** on hover for buttons, links, and icons.
- **Responsive first:** 1-col mobile, 2-col tablet, 3-col desktop for projects.
- **Reduced motion:** Detect `prefers-reduced-motion` and disable parallax/tilt, keep simple fades.

---

## 10. Content Checklist (Don't Drop Anything)

- [ ] Hero name: "ANIKET KALE"
- [ ] Typewriter loop: Data Engineer → Full Stack Developer → SAP Basis Consultant → MERN Stack Developer → Android Developer
- [ ] Intro body text (4 paragraphs)
- [ ] About card quote + hobbies + signature quote
- [ ] Tech stack: 6 groups with all icons listed above
- [ ] Tools: 11 icons
- [ ] 4 projects with descriptions, meta, links, demo links
- [ ] 2 work roles + 4 internships
- [ ] Education: BE + Diploma + coursework
- [ ] 3 certifications
- [ ] 4 leadership roles
- [ ] 5 achievements/awards
- [ ] Socials: GitHub, LinkedIn, Instagram, Email
- [ ] Resume download + PDF embed
- [ ] Footer copyright with current year

---

Save this as `MOTION_REBUILD_GUIDE.md` and hand it to Claude with the instruction: *"Rebuild this portfolio in Next.js + Framer Motion + Tailwind using the specs above. Make every interaction delightful — stagger reveals, glass nav, hover glows, scroll-triggered animations, and a warm dark-purple theme."*
