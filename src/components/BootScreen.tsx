"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "INITIALIZING SYSTEM CORE...",
  "LOADING MODULES...................... [OK]",
  "MOUNTING FILE SYSTEM................. [OK]",
  "ESTABLISHING SECURE CONNECTION....... [OK]",
  "DECRYPTING PROFILE DATA.............. [OK]",
  "ACCESS GRANTED.",
  "WELCOME, GUEST."
];

export default function BootScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Sequentially reveal lines
    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1;
        clearInterval(lineInterval);
        return prev;
      });
    }, 200);

    // Fade out screen after all lines + small delay
    const totalTime = (lines.length * 200) + 800; // 200ms per line + 800ms hold
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, totalTime);

    return () => {
      clearInterval(lineInterval);
      clearTimeout(exitTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-end bg-zinc-950 p-8 font-mono text-emerald-500 overflow-hidden"
        >
          {/* Scanline effect overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 pointer-events-none opacity-20" />
          
          <div className="max-w-3xl w-full mx-auto relative z-20 space-y-2 mb-12">
            <div className="mb-8 overflow-hidden">
                <motion.pre 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xs md:text-sm text-zinc-600 mb-6 leading-none"
                >
{`
    ____  _____    __  ___  __    ____________ 
   / __ \\/ ___/   / / / / \\/ /   / ____/ ____/
  / / / /\\__ \\   / /_/ /    /   / /_  / /     
 / /_/ /___/ /  / __  / /\\ /   / __/ / /___   
\\____//____/  /_/ /_/_/  \\_\\ /_/    \\____/   
                                             
`}                
                </motion.pre>
            </div>

            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: index < visibleLines ? 1 : 0,
                  x: index < visibleLines ? 0 : -10
                }}
                className="text-sm md:text-base font-semibold tracking-wider drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              >
                <span className="text-zinc-500 mr-4">{`>`}</span>
                {line}
              </motion.div>
            ))}
            
            {/* Blinking cursor */}
            {visibleLines >= lines.length && (
              <motion.div
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, times: [0, 0.49, 0.5, 0.99, 1], ease: "linear" }}
                className="w-3 h-5 bg-emerald-500 mt-4 shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
