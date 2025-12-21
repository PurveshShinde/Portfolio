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
  Languages
} from 'lucide-react';

const Skills = () => {
  // ✅ FINAL STRUCTURE: Fully aligned with your "Clean Structure" + Spoken Languages
  const SKILLS_DATA = [
    {
      category: "Programming Languages",
      icon: Terminal,
      items: ["Java", "JavaScript", "SQL (Basic)", "Python (Basic)"]
    },
    {
      category: "Core CS Fundamentals",
      icon: Cpu,
      items: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      category: "Backend Fundamentals",
      icon: Server,
      items: ["REST APIs", "Database Integration", "Basic Authentication", "Modular Code Design", "JSON / XML Processing"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "Firebase Firestore"]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      items: ["HTML","React (Basic)", "CSS", "React Native"]
    },
    {
      category: "Data & Analytics",
      icon: BarChart,
      items: ["Pandas", "Data Preprocessing", "Data Visualization", "Power BI"]
    },
    {
      category: "Tools & Development",
      icon: GitBranch,
      items: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      category: "Learning Focus",
      icon: BookOpen,
      items: ["Spring Boot","MongoDB (Learning)", "Java Backend Development"]
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Technical Arsenal</h2>
          <p className="text-lg md:text-xl leading-8 text-slate-400">
            Core technical skills, tools, and learning areas aligned with Java fresher and intern roles.
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
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="flex flex-col h-full bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl shadow-slate-900/50 overflow-hidden relative group">

                  {/* Background Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold leading-8 text-white mb-6 flex items-center gap-3">
                      <skillGroup.icon className="w-6 h-6 text-primary-500" />
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