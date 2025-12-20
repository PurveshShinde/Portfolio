import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Target, Cpu, Cloud, Code } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-400">Professional Profile</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </p>
        </motion.div>
        
        <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-sm"
          >
            {PROFILE.about.map((paragraph, index) => (
              <motion.p variants={fadeInUp} key={index} className="mb-4 text-lg leading-8 text-slate-300 last:mb-0">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
             {[
               { icon: Code, title: "Java Engineer", desc: "Core Java & Spring Boot" },
               { icon: Cpu, title: "Backend Systems", desc: "Microservices & APIs" },
               { icon: Cloud, title: "Cloud Architecture", desc: "AWS & Docker Deployment" },
               { icon: Target, title: "System Design", desc: "Scalable Solutions" }
             ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center p-6 bg-slate-900/50 backdrop-blur-md rounded-xl shadow-sm border border-slate-700 hover:border-primary-500/30 transition-colors"
                >
                  <item.icon className="h-10 w-10 text-primary-500 mb-4" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;