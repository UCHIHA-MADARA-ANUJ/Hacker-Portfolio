import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Globe, Server, Braces, Zap } from 'lucide-react';

const SKILLS = [
  {
    category: "Frontend Architecture",
    icon: <Layout className="text-[#00ff41] mb-4" size={32} />,
    items: [
      { name: "React / Next.js", level: "90%", desc: "Building scalable, high-performance UIs." },
      { name: "TypeScript", level: "85%", desc: "Type-safe robust application architecture." },
      { name: "Tailwind / CSS", level: "95%", desc: "Pixel-perfect styling and animations." }
    ]
  },
  {
    category: "Backend Systems",
    icon: <Server className="text-[#00ff41] mb-4" size={32} />,
    items: [
      { name: "Node.js / Express", level: "85%", desc: "RESTful APIs and microservices." },
      { name: "Python / FastAPI", level: "80%", desc: "High-performance backend logic." },
      { name: "PostgreSQL / MongoDB", level: "85%", desc: "Database design and optimization." }
    ]
  },
  {
    category: "AI & Data",
    icon: <Cpu className="text-[#00ff41] mb-4" size={32} />,
    items: [
      { name: "LangChain / LLMs", level: "75%", desc: "Integrating AI models into apps." },
      { name: "Vector Databases", level: "80%", desc: "Pinecone, Qdrant for semantic search." },
      { name: "Data Pipelines", level: "70%", desc: "ETL and data processing." }
    ]
  }
];

export function AboutSkillsSection() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* ABOUT ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              <span className="text-[#00ff41]">/</span> ABOUT ME
            </h2>
            <div className="text-gray-300 text-lg space-y-6">
              <p>
                Started coding at 14. Built my first real product at 16. Have spent the years since obsessed with pushing the web to its limits.
              </p>
              <p>
                I don't just write code; I architect solutions. I specialize in full-stack applications with AI integrations that look incredible and perform flawlessly under pressure.
              </p>
              <p className="text-[#00ff41] font-bold">
                Currently available for freelance missions. Based in Earth.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="cyber-button">DOWNLOAD_RESUME.PDF</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Hacker Profile Picture Placeholder */}
            <div className="w-full max-w-md mx-auto aspect-square bg-[#111] border-2 border-[#00ff41] p-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-transparent transition-all duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Cyberpunk Vibe" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[#00ff41] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
              
              {/* Terminal overlay */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-xs text-[#00ff41] bg-black/80 p-2 border border-[#00ff41]/50">
                &gt; STATUS: ONLINE <br/>
                &gt; COFFEE: REQUIRED
              </div>
            </div>
          </motion.div>
        </div>

        {/* SKILLS ROW */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter text-center">
            <span className="text-[#00ff41]">/</span> TECHNICAL ARSENAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                key={idx}
                className="bg-[#0A0A0A] border border-gray-800 p-8 hover:border-[#00ff41]/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {skillGroup.icon}
                <h3 className="text-xl font-bold text-white mb-6 font-mono">{skillGroup.category}</h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="font-mono">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white font-bold">{item.name}</span>
                        <span className="text-[#00ff41]">{item.level}</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-900 h-1 mb-2">
                        <div className="bg-[#00ff41] h-1" style={{ width: item.level }} />
                      </div>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
