import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';
import {
  Terminal,
  Cpu,
  Server,
  Database,
  Globe,
  BarChart,
  GitBranch,
  BookOpen,
  Languages,
  Scroll,
  Sparkles,
  Wand2,
  Hexagon
} from 'lucide-react';
import { useMagic } from '../context/MagicContext';

const Skills = () => {
  const { isWizardMode } = useMagic();

  // ✅ SKILLS DATA: Standard Text, Conditional Icons
  const SKILLS_DATA = [
    {
      category: "Primary Stack",
      icon: isWizardMode ? Scroll : Terminal,
      items: ["Java", "Object-Oriented Programming", "Data Structures", "Algorithms"]
    },
    {
      category: "Supporting Languages",
      icon: isWizardMode ? Hexagon : Cpu,
      items: ["JavaScript", "SQL (Basic)", "Python (Basic)"]
    },
    {
      category: "Backend Fundamentals",
      icon: Server,
      items: ["REST APIs", "Database Integration", "Authentication Basics", "Modular Code Design", "JSON / XML Processing"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "Firebase Firestore"]
    },
    {
      category: "Web Technologies",
      icon: isWizardMode ? Sparkles : Globe,
      items: ["HTML", "CSS", "React (Basic)", "React Native"]
    },
    {
      category: "Data & Analytics",
      icon: BarChart,
      items: ["Pandas", "Data Preprocessing", "Data Visualization", "Power BI"]
    },
    {
      category: "Tools & Development",
      icon: isWizardMode ? Wand2 : GitBranch,
      items: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      category: "Learning Focus",
      icon: BookOpen,
      items: ["Spring Boot", "MongoDB (Learning)", "Java Backend Development"]
    },
    {
      category: "Spoken Languages",
      icon: Languages,
      items: ["English (Professional)", "Hindi (Native)", "Marathi (Native)", "Japanese (Beginner)", "German (Beginner)"]
    }
  ];

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
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${isWizardMode ? 'text-amber-400 font-serif' : 'text-white'}`}>
            {isWizardMode ? 'Magical Arsenal' : 'Technical Arsenal'}
          </h2>
          <p className={`text-lg md:text-xl leading-8 ${isWizardMode ? 'text-amber-200/80 font-serif italic' : 'text-slate-400'}`}>
            {isWizardMode
              ? "The spells, incantations, and artifacts I have mastered in my journey."
              : "Core technical skills, tools, and learning areas aligned with Java fresher and intern roles."}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full relative hover:z-50"
            >
              <TiltCard className="h-full">
                <div
                  className={`
                    flex flex-col h-full rounded-3xl p-8 border shadow-xl overflow-hidden relative group transform-gpu transition-all duration-500
                    ${isWizardMode
                      ? 'bg-amber-950/20 border-amber-500/30'
                      : 'bg-slate-900/90 border-slate-800 shadow-slate-900/50'}
                  `}
                >

                  {/* Background Gradient Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isWizardMode ? 'from-amber-500/10 to-purple-500/10' : 'from-primary-500/10 to-purple-500/10'}`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className={`text-xl font-bold leading-8 mb-6 flex items-center gap-3 ${isWizardMode ? 'text-amber-100' : 'text-white'}`}>
                      <skillGroup.icon className={`w-6 h-6 ${isWizardMode ? 'text-amber-400' : 'text-primary-500'}`} />
                      {skillGroup.category}
                    </h3>

                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`
                            cursor-default inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium border transition-colors
                            ${isWizardMode
                              ? 'bg-amber-900/30 text-amber-200 border-amber-500/20 group-hover:border-amber-400/40'
                              : 'bg-slate-800/80 text-slate-300 border-slate-700/60 group-hover:border-primary-500/20'}
                          `}
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