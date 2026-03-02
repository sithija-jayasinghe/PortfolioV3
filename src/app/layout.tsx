import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BootScreen from "@/components/BootScreen";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sithija Harshana Jayasinghe | Fullstack Engineer",
  description: "Portfolio of Sithija Harshana Jayasinghe, a Fullstack Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-slate-50 antialiased cursor-none selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <BootScreen />
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}