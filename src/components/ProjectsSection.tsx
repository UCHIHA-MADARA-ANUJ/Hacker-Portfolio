import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Cpu, Database, Layout } from 'lucide-react';

const PROJECTS = [
  {
    title: "Project Alpha",
    subtitle: "AI-Powered Financial Dashboard",
    problem: "Legacy financial systems were slow and lacked real-time predictive analytics.",
    solution: "Built a high-performance React dashboard with a Python/FastAPI backend, integrating ML models for predictive insights.",
    impact: "Increased processing speed by 300% and saved 40 hours/week in manual reporting.",
    tech: ["React", "FastAPI", "PostgreSQL", "TensorFlow"],
    github: "#",
    live: "#"
  },
  {
    title: "Nexus Platform",
    subtitle: "Scalable E-Commerce Engine",
    problem: "Client's existing monolithic architecture couldn't handle Black Friday traffic.",
    solution: "Architected a microservices-based e-commerce platform using Next.js and Go.",
    impact: "Handled 100k+ concurrent users with 99.99% uptime during peak sales events.",
    tech: ["Next.js", "Go", "Redis", "Kubernetes"],
    github: "#",
    live: "#"
  },
  {
    title: "Quantum Automator",
    subtitle: "Intelligent Workflow Engine",
    problem: "Marketing teams spent 60% of their time on repetitive tasks across different platforms.",
    solution: "Developed an intuitive drag-and-drop automation platform that connects 50+ APIs.",
    impact: "Automated over 1M tasks monthly, saving clients an estimated $500k in labor costs.",
    tech: ["TypeScript", "Node.js", "MongoDB", "AWS"],
    github: "#",
    live: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-black relative border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            <span className="text-[#00ff41]">/</span> PROJECTS
          </h2>
          <p className="text-gray-400 font-mono text-lg">The work that actually matters.</p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Placeholder */}
              <div className={`relative aspect-video bg-[#0A0A0A] border border-[#00ff41]/30 rounded-lg overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff41]/20 via-black to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[#00ff41]/50 text-sm">
                  [ VISUAL DATA NOT RENDERED ]
                </div>
                {/* Scanner line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff41] shadow-[0_0_10px_#00ff41] opacity-50 scanline" style={{ animationDuration: '3s' }} />
              </div>

              {/* Content */}
              <div className={`font-mono ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#00ff41] text-lg mb-6 border-b border-[#00ff41]/20 pb-4 inline-block">{project.subtitle}</p>
                
                <div className="space-y-4 mb-8 text-gray-300">
                  <div>
                    <span className="text-white font-bold block mb-1">THE PROBLEM:</span>
                    <p className="text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-white font-bold block mb-1">THE SOLUTION:</span>
                    <p className="text-sm">{project.solution}</p>
                  </div>
                  <div className="bg-[#00ff41]/10 p-4 border-l-2 border-[#00ff41]">
                    <span className="text-[#00ff41] font-bold block mb-1">THE IMPACT:</span>
                    <p className="text-sm text-white font-bold">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-[#111] text-gray-400 px-3 py-1 border border-gray-800 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} className="flex items-center gap-2 text-sm text-black bg-[#00ff41] px-6 py-2 hover:bg-white transition-colors font-bold uppercase">
                    <ExternalLink size={16} /> Live System
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white border border-gray-700 px-6 py-2 hover:border-white transition-colors uppercase">
                    Code Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
