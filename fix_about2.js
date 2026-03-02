const fs = require('fs');

const content = `"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import SpotlightCard from "./SpotlightCard";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-zinc-950 relative border-t border-zinc-900/50 overflow-hidden">
      <Particles quantity={20} />

      {/* Gamer Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">

        {/* Large Statement Section */}
        <motion.div
           initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SpotlightCard>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-zinc-300 leading-tight tracking-tight mt-4">
              I believe in building <span className="font-medium text-white italic">functional</span>, <span className="font-medium text-emerald-400">scalable</span>, and user-centered applications that solve <span className="text-white underline decoration-emerald-500/50 decoration-2 underline-offset-8">real-world</span> problems.
            </h2>
          </SpotlightCard>
        </motion.div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-5 h-full"
          >
            <SpotlightCard className="h-full flex flex-col justify-center">
              <span className="text-sm font-medium tracking-widest text-emerald-500 uppercase mb-4 block">System Initialize.</span>
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                Hi, I'm <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Sithija Harshana.</span>
              </h3>
              <div className="mt-8 flex gap-4">
                 <div className="h-1 w-12 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.7)]"></div>
                 <div className="h-1 w-4 bg-zinc-700 rounded-full hover:bg-emerald-500 transition-colors cursor-none"></div>
                 <div className="h-1 w-4 bg-zinc-700 rounded-full hover:bg-emerald-500 transition-colors cursor-none"></div>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
             whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             className="md:col-span-6 lg:col-span-7 h-full"
          >
            <SpotlightCard className="h-full space-y-6 text-zinc-400 text-lg leading-relaxed flex flex-col justify-center">
              <p>
                I am an aspiring Software Developer with hands-on experience gained through academic projects, open-source contributions, and self-learning.
              </p>
              <p>
                My focus is on creating real-world applications using Java, Spring Boot, React, and MySQL. By prioritizing architecture and clean code, I thrive on collaborating with teams, architecting solutions, and seeing ideas come to life.
              </p>
              <div className="pt-4 border-t border-zinc-800/50 flex">
                <p className="text-zinc-300 font-medium">
                  Currently balancing my studies with part-time work and extracurricular activities, maintaining a dedication to continuous technical growth.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}`;
fs.writeFileSync('src/components/About.tsx', content);