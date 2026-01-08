import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, GitBranch, BookOpen, Scroll, Wand2, Star, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useMagic } from '../context/MagicContext';

const About = () => {
  const { isWizardMode } = useMagic();

  // ✅ STANDARD TEXT
  const STANDARD_ABOUT = [
    "I am a Computer Science engineering student and Java Developer (Fresher / Intern level) with a strong foundation in core Java, object-oriented programming, DSA, and backend development fundamentals.",
    "I have worked on projects involving REST APIs and database integration, and I am currently focused on learning Spring Boot and strengthening my backend skills through real-world projects."
  ];

  // 🔮 WIZARD TEXT
  const WIZARD_ABOUT = [
    "I am an Apprentice of the Arcane Arts (Computer Science) and a Scribe of Java Runes, forging my path with a strong foundation in Core Incantations, Object-Oriented Alchemy, and Algorithmic Spells.",
    "I have crafted artifacts using REST Leylines and Crystal (Database) Integrations. My current quest focuses on mastering the Spring Boot Grimoire to strengthen my sorcery in real-world realms."
  ];

  const ABOUT_TEXT = isWizardMode ? WIZARD_ABOUT : STANDARD_ABOUT;

  // Safe Tags (Standard)
  const STANDARD_CARDS = [
    { icon: Code, title: "Java Developer", desc: "Core Java & OOP" },
    { icon: Server, title: "Backend Fundamentals", desc: "REST APIs • Database Integration" },
    { icon: GitBranch, title: "Tools & Practices", desc: "Git • GitHub • Debugging" },
    { icon: BookOpen, title: "Learning Focus", desc: "Spring Boot • Backend Systems" }
  ];

  // Magical Tags (Wizard)
  const WIZARD_CARDS = [
    { icon: Scroll, title: "Rune Scribe", desc: "Java Core & OOP Alchemy" },
    { icon: Server, title: "Backend Sorcery", desc: "API Leylines • Crystal Binding" },
    { icon: Wand2, title: "Artifact Crafting", desc: "Git Spells • GitHub Vaults" },
    { icon: Star, title: "Arcane Studies", desc: "Spring Boot Grimoire" }
  ];

  const SKILL_CARDS = isWizardMode ? WIZARD_CARDS : STANDARD_CARDS;

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
          <h2 className={`text-base font-semibold leading-7 ${isWizardMode ? 'text-amber-400 font-serif tracking-widest' : 'text-primary-400'}`}>
            {isWizardMode ? '⚡ Identification' : 'Professional Profile'}
          </h2>
          <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${isWizardMode ? 'text-amber-100 font-serif' : 'text-white'}`}>
            {isWizardMode ? 'The Wizard' : 'About Me'}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
          {/* Main Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className={`
              backdrop-blur-md rounded-2xl p-8 border shadow-sm transition-all duration-500
              ${isWizardMode
                ? 'bg-amber-950/30 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                : 'bg-slate-900/50 border-slate-800'}
            `}
          >
            {ABOUT_TEXT.map((paragraph, index) => (
              <motion.p
                variants={fadeInUp}
                key={index}
                className={`mb-4 text-lg leading-8 last:mb-0 ${isWizardMode ? 'text-amber-200/90 font-serif italic' : 'text-slate-300'}`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Skills Grid Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SKILL_CARDS.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`
                  flex flex-col items-center text-center p-6 backdrop-blur-md rounded-xl shadow-sm border transition-colors
                  ${isWizardMode
                    ? 'bg-amber-900/20 border-amber-500/20 hover:border-amber-400/50'
                    : 'bg-slate-900/50 border-slate-700 hover:border-primary-500/30'}
                `}
              >
                <item.icon className={`h-10 w-10 mb-4 ${isWizardMode ? 'text-amber-400' : 'text-primary-500'}`} />
                <h3 className={`font-semibold ${isWizardMode ? 'text-amber-100' : 'text-white'}`}>{item.title}</h3>
                <p className={`text-sm mt-2 ${isWizardMode ? 'text-amber-200/60' : 'text-slate-400'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* AI/Golem Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className={`
              mt-16 backdrop-blur-md rounded-2xl p-8 border shadow-lg transition-all
              ${isWizardMode
                ? 'bg-purple-900/20 border-purple-500/30'
                : 'bg-slate-900/60 border-primary-500/20'}
            `}
          >
            <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isWizardMode ? 'text-purple-300' : 'text-white'}`}>
              {isWizardMode && <Sparkles className="w-5 h-5" />}
              {isWizardMode ? 'Arcane Automatons (AI)' : 'AI-Assisted Development'}
            </h3>
            <p className={`text-sm mb-4 ${isWizardMode ? 'text-purple-400' : 'text-primary-400'}`}>
              {isWizardMode ? 'Summoning Constructs for Efficiency' : 'Productivity Multiplier'}
            </p>

            <p className={`mb-4 ${isWizardMode ? 'text-purple-200/80 font-serif' : 'text-slate-300'}`}>
              {isWizardMode
                ? "I command magical constructs to amplify my casting speed:"
                : "I actively use AI tools as a productivity amplifier for:"}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                isWizardMode ? "Instant Spell Formulation (Boilerplate)" : "Rapid boilerplate generation",
                isWizardMode ? "Divining Anomalies (Debugging)" : "Debugging and edge-case analysis",
                isWizardMode ? "Transmutation (Refactoring)" : "Refactoring and code optimization",
                isWizardMode ? "Absorbing Ancient Scrolls (Learning)" : "Learning new APIs and frameworks"
              ].map((item, idx) => (
                <li key={idx} className={`flex items-center gap-2 ${isWizardMode ? 'text-purple-200' : 'text-slate-300'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isWizardMode ? 'bg-purple-500' : 'bg-primary-500'}`} />
                  {item}
                </li>
              ))}
            </ul>

            <p className={`text-sm italic border-l-2 pl-4 ${isWizardMode ? 'text-purple-300/60 border-purple-500/40' : 'text-slate-400 border-primary-500/40'}`}>
              {isWizardMode
                ? "The constructs serve only to hasten the craft. The true weaving of logic remains my own burden."
                : "This allows me to deliver features faster while maintaining code quality and correctness. Final design decisions, logic, and validation are always done by me."}
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;