import { Download, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import resumePdf from "../components/assets/Purvesh Shinde_Resume_Java.pdf";
import { useMagic } from '../context/MagicContext';

const Home = () => {
  const { isWizardMode } = useMagic();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pb-48 p-6 lg:p-0">

      {/* Background Ambience Removed for 3D Background */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        // UPDATED HERE: Changed '-mt-16' to '-mt-32' to pull it up significantly more
        className="text-center max-w-3xl mx-auto z-10 relative -mt-32"
      >
        {/* Global Acknowledgment Text */}
        <AnimatePresence>
          {isWizardMode && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-16 left-0 right-0 text-center pointer-events-none"
            >
              <span className="text-amber-500/60 font-serif italic tracking-widest text-sm flex items-center justify-center gap-2">
                <Sparkles className="w-3 h-3" /> The Veil has been lifted
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name & Availability */}
        <div className="relative inline-block mb-4">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white relative z-10"
          >
            {PROFILE.name}
          </motion.h1>

          {/* Availability Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className={`absolute -top-6 -right-2 md:-right-12 flex items-center justify-center`}
          >
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${isWizardMode ? 'bg-amber-500/10 text-amber-400 ring-amber-500/40' : 'bg-green-500/10 text-green-400 ring-green-500/30'}`}>
              Open to Work
            </span>
          </motion.div>
        </div>

        {/* Role & Tagline */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-8">
          <h2 className={`text-xl md:text-2xl font-medium ${isWizardMode ? 'text-amber-400' : 'text-primary-400'}`}>
            {PROFILE.title}
          </h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-colors duration-700 
                ${isWizardMode ? 'text-amber-200/80 font-serif italic' : 'text-slate-400'}`}>
            {isWizardMode
              ? "Keeper of Knowledge & Weaver of Code. I craft digital artifacts that stand the test of time."
              : PROFILE.tagline}
          </p>
          {/* Added Extra Info */}
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Specializing in building exceptional digital experiences. Currently focused on accessible, human-centered products.
          </p>
        </motion.div>

        {/* Actions Row */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Projects Button */}
          <a
            href="#projects"
            className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-300 border
                ${isWizardMode
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-slate-800/50 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white'}
            `}
          >
            Explore Projects
          </a>

          {/* Resume Button */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className={`
                flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 border border-transparent
                ${isWizardMode
                ? 'text-amber-400/80 hover:text-amber-200 hover:bg-amber-900/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
            `}
          >
            <Download className="w-4 h-4" />
            {isWizardMode ? "Grimoire (Resume)" : "Resume"}
          </a>
        </motion.div>

      </motion.div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-0"
      >
        <span className={`text-[10px] tracking-[0.2em] uppercase ${isWizardMode ? 'text-amber-500/50' : 'text-slate-600'}`}>
          Scroll Down
        </span>
        <div className={`w-[26px] h-[40px] border-2 rounded-full flex justify-center p-2 opacity-60 
            ${isWizardMode ? 'border-amber-500/30' : 'border-slate-500/30'}`}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className={`w-1 h-1 rounded-full ${isWizardMode ? 'bg-amber-500' : 'bg-slate-400'}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;