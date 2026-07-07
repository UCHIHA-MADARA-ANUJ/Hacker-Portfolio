"use client";

import React, { useState, useEffect } from "react";
import { BootSequence } from "@/components/BootSequence";
import { EpicCountdown } from "@/components/EpicCountdown";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSkillsSection } from "@/components/AboutSkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioOS() {
  const [phase, setPhase] = useState<"init" | "boot" | "countdown" | "portfolio">("init");

  return (
    <main className="w-screen h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <AnimatePresence mode="wait">
        
        {phase === "init" && (
          <motion.div 
            key="init"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-8"
          >
            <h1 className="text-[#00ff41] font-mono text-xl tracking-widest uppercase text-center max-w-md opacity-80">
              Warning: This sequence contains intense flashing lights and extreme hype.
            </h1>
            <button 
              onClick={() => setPhase("boot")}
              className="cyber-button text-2xl px-8 py-4"
            >
              INITIALIZE SYSTEM
            </button>
          </motion.div>
        )}

        {phase === "boot" && (
          <motion.div 
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <BootSequence onComplete={() => setPhase("countdown")} />
          </motion.div>
        )}

        {phase === "countdown" && (
          <motion.div 
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            <EpicCountdown onComplete={() => setPhase("portfolio")} />
          </motion.div>
        )}

        {phase === "portfolio" && (
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full overflow-y-auto scroll-smooth"
          >
            <HeroSection />
            <ProjectsSection />
            <AboutSkillsSection />
            <ContactSection />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}
