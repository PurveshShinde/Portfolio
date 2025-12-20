import React from 'react';
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE, CONTACT } from '../constants';
import Terminal from '../components/Terminal';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Home = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="inline-flex items-center rounded-full bg-primary-400/10 px-4 py-1.5 text-sm font-semibold text-primary-400 ring-1 ring-inset ring-primary-400/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse"></span>
                  Open to Backend Roles
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Scalable</span> Systems
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl leading-8 text-slate-300 mb-8 max-w-lg">
                I'm {PROFILE.name}, a Java Backend Engineer specializing in high-performance APIs, microservices, and distributed cloud architecture.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
                <button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg transition-all hover:bg-slate-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  View Architecture
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="/resume.pdf" // Update with real path
                  target="_blank"
                  className="text-base font-semibold leading-6 text-white hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex gap-6 text-slate-400">
                <motion.a whileHover={{ y: -3, color: '#fff' }} href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Github className="w-7 h-7" />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: '#0077b5' }} href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Linkedin className="w-7 h-7" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: Terminal & 3D Sync */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Terminal Container */}
              <div className="w-full max-w-lg relative z-10 transform transition-transform hover:scale-[1.01] duration-500">
                {/* Glow Effect behind terminal */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl blur opacity-40 animate-pulse"></div>
                <Terminal />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;