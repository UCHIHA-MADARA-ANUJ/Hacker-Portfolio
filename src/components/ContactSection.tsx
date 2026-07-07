import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 bg-black relative border-t border-[#00ff41]/20">
      <div className="absolute inset-0 scanline opacity-5" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Terminal className="mx-auto text-[#00ff41] mb-6" size={48} />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
            INITIATE <span className="text-[#00ff41]">CONTACT</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
            My neural interface is currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-gray-800 p-8 md:p-12"
        >
          <form className="space-y-6 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-[#00ff41]">{'//'} YOUR IDENTIFIER</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-gray-800 p-4 text-white focus:border-[#00ff41] focus:outline-none transition-colors"
                  placeholder="Enter Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#00ff41]">{'//'} RETURN PROTOCOL</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-gray-800 p-4 text-white focus:border-[#00ff41] focus:outline-none transition-colors"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-[#00ff41]">{'//'} PAYLOAD</label>
              <textarea 
                rows={6}
                className="w-full bg-black border border-gray-800 p-4 text-white focus:border-[#00ff41] focus:outline-none transition-colors resize-none"
                placeholder="Enter Message Data..."
              />
            </div>

            <button 
              type="button"
              className="w-full cyber-button py-6 flex justify-center items-center gap-2 text-lg"
            >
              <Send size={20} /> TRANSMIT_DATA
            </button>
          </form>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-sm text-gray-500">
          <p>© 2026 ANUJ PHULERA. ALL SYSTEMS NOMINAL.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00ff41] transition-colors flex items-center gap-2"><Github size={18}/> GITHUB</a>
            <a href="#" className="hover:text-[#00ff41] transition-colors flex items-center gap-2"><Linkedin size={18}/> LINKEDIN</a>
            <a href="#" className="hover:text-[#00ff41] transition-colors flex items-center gap-2"><Twitter size={18}/> TWITTER</a>
          </div>
        </div>
      </div>
    </section>
  );
}
