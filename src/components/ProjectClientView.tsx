"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ProjectDetails } from "@/data/projects";
import { useEffect, useState } from "react";

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; left: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-zinc-500/20"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: -10 }}
          animate={{
            y: ["0vh", "150vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}

export default function ProjectClientView({ project }: { project: ProjectDetails }) {
  const stagger = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="relative">
      <Particles />
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[30vw] h-[40vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <article className="relative z-10 pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" custom={0} variants={stagger}>
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-12 text-sm uppercase tracking-widest font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            initial="hidden" animate="visible" custom={1} variants={stagger}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" custom={2} variants={stagger}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8 max-w-3xl"
          >
            {project.description}
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" custom={3} variants={stagger}
            className="flex flex-wrap gap-4 mb-8"
          >
            {project.tech.map((t, i) => (
              <span key={i} className="text-sm font-mono text-emerald-400 px-3 py-1.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.1)]">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" custom={4} variants={stagger}
            className="flex items-center gap-4"
          >
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" /> View Source
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-5 h-5" /> Visit Live Site
              </a>
            )}
          </motion.div>
        </header>

        <motion.div 
          initial="hidden" animate="visible" custom={5} variants={stagger}
          className="w-full h-px bg-zinc-900/50 mb-16" 
        />

        <div className="space-y-24">
          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">01.</span> The Problem
            </h2>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/5 blur-xl transition-all group-hover:bg-emerald-500/10 rounded-2xl" />
              <p className="relative text-zinc-400 text-lg leading-relaxed bg-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50">
                {project.problemStatement}
              </p>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">02.</span> Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-zinc-900/20 p-6 rounded-xl border border-zinc-800/30 group hover:border-emerald-500/30 hover:bg-zinc-900/40 transition-all"
                >
                  <div className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]" />
                  <span className="text-zinc-300 text-lg leading-snug">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Technical Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">03.</span> Technical Highlights
            </h2>
            <div className="space-y-4 relative">
              {/* Optional joining line for styling */}
              <div className="absolute left-[33px] top-4 bottom-4 w-px bg-zinc-800 hidden md:block z-0" />
              
              {project.technicalHighlights.map((highlight, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative z-10 flex gap-6 p-6 rounded-xl border border-zinc-800/30 bg-zinc-900/60 backdrop-blur-sm hover:border-zinc-700 transition-all group"
                >
                  <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-zinc-950 border border-zinc-800 shrink-0 group-hover:border-emerald-500/50 transition-colors">
                    <span className="text-emerald-500 font-mono text-sm">0{i+1}</span>
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed pt-2">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mockups */}
          {project.mockups && project.mockups.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-emerald-500 font-mono text-lg">04.</span> Visuals
              </h2>
              <div className="flex flex-col gap-12 w-full">
                {project.mockups.map((mockup, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full aspect-[16/9] bg-zinc-900 rounded-3xl border border-zinc-800/50 overflow-hidden flex items-center justify-center relative group shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800/20 to-zinc-800/50 group-hover:opacity-60 transition-opacity duration-500" />
                    {/* Minimalist UI frame overlay */}
                    <div className="absolute top-0 inset-x-0 h-10 bg-zinc-950/50 flex items-center gap-2 px-4 border-b border-zinc-800/50">
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    </div>
                    <span className="text-zinc-600 font-medium tracking-[0.2em] text-sm uppercase z-10 group-hover:scale-105 transition-transform duration-500">
                      Mockup placeholder {i+1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </div>
  );
}
