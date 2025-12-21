import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, GitBranch, BookOpen } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const About = () => {
  // ✅ REFINED, SHORTENED TEXT (2 Paragraphs Max)
  const ABOUT_TEXT = [
    "I am a Computer Science engineering student and Java Developer (Fresher / Intern level) with a strong foundation in core Java, object-oriented programming, DSA, and backend development fundamentals.",
    "I have worked on projects involving REST APIs and database integration, and I am currently focused on learning Spring Boot and strengthening my backend skills through real-world projects."
  ];

  // Safe Tags (Kept these as they are perfect for your level)
  const SKILL_CARDS = [
    { 
      icon: Code, 
      title: "Java Engineer", 
      desc: "Core Java & OOP" 
    },
    { 
      icon: Server, 
      title: "Backend Fundamentals", 
      desc: "REST APIs • Database Integration" 
    },
    { 
      icon: GitBranch, 
      title: "Tools & Practices", 
      desc: "Git • GitHub • Debugging" 
    },
    { 
      icon: BookOpen, 
      title: "Learning Focus", 
      desc: "Spring Boot • Backend Systems" 
    }
  ];

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
          {/* Main Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-sm"
          >
            {ABOUT_TEXT.map((paragraph, index) => (
              <motion.p variants={fadeInUp} key={index} className="mb-4 text-lg leading-8 text-slate-300 last:mb-0">
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