"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EpicCountdown({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(10);
  const [phase, setPhase] = useState<"countdown" | "granted">("countdown");

  useEffect(() => {
    if (phase !== "countdown") return;
    
    if (count > 0) {
      const timer = setTimeout(() => setCount(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setPhase("granted");
      setTimeout(() => onComplete(), 3000); // 3 seconds of access granted visual
    }
  }, [count, phase, onComplete]);

  if (phase === "granted") {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black font-mono text-6xl md:text-9xl font-black text-center glitch-effect"
        >
          ACCESS<br/>GRANTED
        </motion.div>
        
        {/* Simple particle explosion simulation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-black"
            initial={{ 
              x: "50%", y: "50%", opacity: 1 
            }}
            animate={{ 
              x: `${50 + (Math.random() - 0.5) * 100}vw`,
              y: `${50 + (Math.random() - 0.5) * 100}vh`,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            transition={{ duration: 1 + Math.random() * 2, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center crt-effect">
      <motion.div
        key={count}
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-8xl md:text-[15rem] font-black text-red-600"
        style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
      >
        {count}
      </motion.div>
      <div className="mt-8 text-xl md:text-3xl font-mono text-red-500 animate-pulse text-center">
        SYSTEM ARMED.<br/>
        INITIATING CONSCIOUSNESS TRANSFER...
      </div>
    </div>
  );
}
