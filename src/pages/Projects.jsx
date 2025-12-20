import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';

const Projects = () => {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Featured Projects</h2>
          <p className="text-lg md:text-xl leading-8 text-slate-400">
            A selection of my recent work in software development, showcasing robust software architectures and intuitive interfaces.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="flex flex-col h-full bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl shadow-slate-900/50 overflow-hidden relative group">
                  
                  {/* Background Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-slate-800 rounded-2xl">
                          <Layers className="h-6 w-6 text-primary-400" />
                        </div>
                        <span className="text-xs font-bold tracking-wider uppercase text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-3 mb-8">
                        {project.description.map((desc, i) => (
                          <p key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                            <span className="mr-2 text-primary-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 pt-6 border-t border-slate-800">
                        <button className="flex-1 inline-flex justify-center items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-200 transition-colors opacity-50 cursor-not-allowed">
                          <Github className="h-4 w-4" /> Code
                        </button>
                        <button className="flex-1 inline-flex justify-center items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white border border-slate-700 shadow-sm hover:bg-slate-700 transition-colors opacity-50 cursor-not-allowed">
                          <ExternalLink className="h-4 w-4" /> Live
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;