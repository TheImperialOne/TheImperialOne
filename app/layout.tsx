import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { TitleBlur } from "@/components/TitleBlur";
import { Preloader } from "@/components/Preloader";
import { CommandPalette } from "@/components/CommandPalette";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "Aniket Kale — Data Engineer & Full Stack Developer",
  description: "Portfolio of Aniket Kale: data engineering, full stack development and SAP Basis, based in Mumbai.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><MotionConfig reducedMotion="user"><Preloader /><Cursor /><TitleBlur /><CommandPalette /><Nav /><main className="mx-auto max-w-6xl px-6 pt-28">{children}</main><Footer /></MotionConfig></body>
    </html>
  );
}
