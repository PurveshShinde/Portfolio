import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Experience Section */}
        <div className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Journey</h2>
            <p className="text-lg text-slate-400">Professional experience, internships, and hackathons</p>
          </motion.div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12 relative px-4 sm:px-0">
              {/* Vertical Timeline Glow Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-8 top-0 bottom-0 md:left-1/2 md:-ml-0.5 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500 to-primary-500/0"
              />
              
              {EXPERIENCE.map((item, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}
                >
                  {/* Timeline Dot with Glow */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 mt-6 md:mt-0 ring-4 ring-slate-950" />
                  
                  {/* Icon Card - Mobile Only (left aligned) / Desktop hidden or handled differently */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-800 bg-slate-900 shadow-lg absolute left-1/2 -translate-x-1/2 -translate-y-12 z-10 opacity-0">
                    <Briefcase className="w-5 h-5 text-primary-500" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl hover:shadow-slate-900/50 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden`}>
                    
                    {/* Subtle gradient flash on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center rounded-md bg-primary-900/30 px-2 py-1 text-xs font-medium text-primary-300 ring-1 ring-inset ring-primary-700/10">
                          {item.type}
                        </span>
                        {item.period && <time className="font-mono text-xs text-slate-400">{item.period}</time>}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <div className="text-base font-medium text-primary-400 mb-4">{item.organization}</div>
                      
                      <ul className="text-slate-300 text-sm space-y-2 list-none">
                         {item.description.map((desc, i) => (
                           <li key={i} className="flex items-start">
                             <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600" />
                             {desc}
                           </li>
                         ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-3 rounded-xl bg-slate-800">
                <GraduationCap className="h-6 w-6 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-sm transition-all"
                  >
                      <div className="text-sm font-mono text-primary-400 mb-1">{edu.year}</div>
                      <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                      <p className="text-slate-400">{edu.institution}</p>
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-3 rounded-xl bg-slate-800">
                <Award className="h-6 w-6 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {CERTIFICATIONS.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-sm"
                  >
                      <div className="h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <div>
                          <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
                          <p className="text-xs text-slate-400">{cert.issuer}</p>
                      </div>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        
        </div>

      </div>
    </div>
  );
};

export default Experience;