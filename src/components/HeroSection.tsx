"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [commands, setCommands] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCommands(1), 1000);
    const timer2 = setTimeout(() => setCommands(2), 2500);
    const timer3 = setTimeout(() => setCommands(3), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#00ff41] font-mono p-8 md:p-24 relative overflow-hidden flex items-center">
      {/* Scanline overlay */}
      <div className="scanline" />
      
      <div className="w-full max-w-7xl mx-auto z-10 relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center">
          {/* Command 1 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-400">quantum@matrix:~$</span>
              <span className="text-white">whoami</span>
            </div>
            {commands >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mb-12 pl-4 border-l-2 border-[#00ff41]/30 py-2"
              >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter uppercase" style={{ letterSpacing: "-2px" }}>
                  ANUJ PHULERA
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#00ff41] font-bold mb-6">
                  Full Stack • AI
                </h2>
                
                <div className="text-gray-300 text-lg md:text-xl space-y-2 mb-8">
                  <p>Shipped <span className="text-white font-bold">12 products</span></p>
                  <p><span className="text-white font-bold">10M+</span> users</p>
                  <p><span className="text-white font-bold">$2.3M</span> revenue</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Command 2 */}
          {commands >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-400">quantum@matrix:~$</span>
                {commands >= 2 && <span className="text-white">cat mission.txt</span>}
              </div>
              {commands >= 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-12 pl-4 text-gray-400 text-lg leading-relaxed"
                >
                  "I build digital experiences that don't just work—<br/>
                  they make people question reality."
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Blinking Cursor */}
          {commands >= 2 && (
            <div className="mt-8 flex items-center gap-2">
              <span className="text-blue-400">quantum@matrix:~$</span>
              <div className="w-3 h-5 bg-[#00ff41] animate-pulse" />
            </div>
          )}

          {commands >= 3 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 flex gap-6"
            >
              <button className="cyber-button font-bold px-8">VIEW WORK</button>
              <button className="cyber-button border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-400 hover:shadow-none">
                CONTACT
              </button>
            </motion.div>
          )}
        </div>

        {/* Right Side: Geometric Abstract */}
        {commands >= 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5, delay: 1 }}
            className="hidden md:flex justify-center items-center h-[500px] relative"
          >
            {/* Minimalist Geometric Aesthetic */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border border-[#00ff41]/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 border border-[#00ff41]/30 rounded-full border-dashed"
            />
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-[#00ff41]/50 rounded-full"
            />
            
            {/* Center glowing node */}
            <div className="w-4 h-4 bg-[#00ff41] rounded-full shadow-[0_0_30px_#00ff41]" />
            
            {/* Particles streams */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 300,
                  y: (Math.random() - 0.5) * 300,
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity,
                  delay: Math.random() * 2 
                }}
                className="absolute w-1 h-1 bg-[#00ff41]"
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
