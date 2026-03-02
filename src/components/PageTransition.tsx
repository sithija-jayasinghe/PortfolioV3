"use client";

import { ReactNode } from "react";
import { TransitionRouter } from "next-transition-router";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        const page = document.getElementById("page-transition-wrapper");
        if (page) {
          page.style.opacity = "0";
          page.style.filter = "blur(12px)";
          page.style.transform = "scale(0.96) translateY(20px)";
        }
        setTimeout(next, 500); // Wait for transition to complete
      }}
      enter={(next) => {
        const page = document.getElementById("page-transition-wrapper");
        if (page) {
          page.style.opacity = "0"; 
          page.style.filter = "blur(12px)";
          page.style.transform = "scale(1.02) translateY(-20px)";
          
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              page.style.opacity = "1";
              page.style.filter = "blur(0px)";
              page.style.transform = "scale(1) translateY(0)";
            });
          });
        }
        next();
      }}
    >
      {/* 
        This wrapper holds the actual page content.
        We apply CSS transitions to it directly so we don't have to fight Next.js React hydration cycles!
      */}
      <div 
        id="page-transition-wrapper" 
        className="w-full min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          opacity: 1,
          filter: "blur(0px)",
          transform: "scale(1) translateY(0)",
        }}
      >
        {children}
      </div>
    </TransitionRouter>
  );
}
