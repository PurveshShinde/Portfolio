import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const Experience = () => {
  // 1. Ref for the timeline container to track scrolling
  const containerRef = useRef(null);

  // 2. Hook to track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // 3. Smooth out the animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Journey Data
  const JOURNEY_DATA = [
    {
      type: "Internship",
      period: "July – August 2024",
      title: "AI/ML Virtual Internship – Team Lead",
      organization: "IBM",
      description: [
        "Participated in an AI/ML-focused virtual internship program at IBM, working as a team lead on a project-based assignment.",
        "Contributed to backend-oriented workflows, API usage, and data processing logic, while coordinating tasks and collaborating with team members.",
        "Gained experience in requirement analysis, debugging, testing, and applying standard software development practices during project execution."
      ]
    },
    {
      type: "Project Experience",
      period: "2024",
      title: "Data Analytics Project",
      organization: "Project-Based Learning Program",
      description: [
        "Worked on a data analytics project involving data preprocessing, analysis, and visualization using Python-based tools.",
        "Handled dataset cleaning, basic transformations, and visual representation of insights, while collaborating with peers to interpret results effectively."
      ]
    },
    {
      type: "Hackathon",
      period: "2025",
      title: "Prabal Hackathon 2025",
      organization: "Team Vanguards",
      description: [
        "Participated in the Prabal Hackathon as part of a team to develop a functional prototype under strict time constraints.",
        "Contributed to backend logic, API integration, and overall problem-solving, while collaborating closely with teammates to deliver the solution."
      ]
    }
  ];

  // ✅ EDUCATION DATA: Updated University Name & Structure
  const EDUCATION_DATA = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dnyanshree Institute of Engineering and Technology (DBATU)",
      year: "2022 – 2026 (Expected)"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "LBS College Satara",
      year: "2022"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "New English School Satara",
      year: "2020"
    }
  ];

  // ✅ CERTIFICATIONS: Reordered for Backend/Java Priority
  const FINAL_CERTIFICATIONS = [
    {
      name: "AWS Academy Graduate – Data Engineering",
      issuer: "AWS Academy"
    },
    {
      name: "Full Stack Java Developer Certification",
      issuer: "Eduskills"
    },
    {
      name: "Back-End Engineering Virtual Experience",
      issuer: "Forage (Lyft)"
    },
    {
      name: "AI/ML Virtual Internship",
      issuer: "Google & Eduskills"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM SkillsBuild"
    },
    {
      name: "JavaScript Fundamentals (Course Completion)",
      issuer: "Udemy"
    }
  ];

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

          <div ref={containerRef} className="mx-auto max-w-4xl">
            <div className="space-y-12 relative px-4 sm:px-0">
              
              {/* INTERACTIVE SCROLL LINE */}
              <motion.div
                style={{ scaleY }} 
                className="absolute left-8 top-0 bottom-0 md:left-1/2 md:-ml-0.5 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500/0 origin-top"
              />

              {JOURNEY_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}
                >
                  {/* Timeline Dot with Glow */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-20 mt-6 md:mt-0" />

                  {/* Icon Card - Mobile Only (left aligned) / Desktop hidden */}
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
              className="space-y-4"
            >
              {EDUCATION_DATA.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-slate-800 shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                    <span className="text-xs font-mono text-primary-400 whitespace-nowrap ml-2 mt-1">{edu.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
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
              <h2 className="text-2xl font-bold text-white">Certifications & Training</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {FINAL_CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-tight mb-1">{cert.name}</h4>
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