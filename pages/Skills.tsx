import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { staggerContainer, fadeInUp } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';

const Skills: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Technical Arsenal</h2>
          <p className="text-lg md:text-xl leading-8 text-slate-400">
            A comprehensive overview of the languages, frameworks, and tools I utilize to build scalable solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="flex flex-col h-full bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl shadow-slate-900/50 overflow-hidden relative group">
                  
                  {/* Background Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold leading-8 text-white mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          className="cursor-default inline-flex items-center rounded-md bg-slate-800/80 px-3 py-1.5 text-sm font-medium text-slate-300 border border-slate-700/60 group-hover:border-primary-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Skills;