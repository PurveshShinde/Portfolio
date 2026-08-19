
import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, Code, Brain, Users, Music, Server } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';
import { useMagic } from '../context/MagicContext';

const Projects = () => {
  const { isWizardMode } = useMagic();

  const PROJECTS_DATA = [
    {
      title: "GitMatch (Final Year Project)",
      category: "Developer Collaboration Platform",
      icon: Users,
      description: [
        "Developed a real-time developer collaboration platform integrating external APIs for live matching.",
        "Implemented Firebase Authentication with JWT-based authorization to secure APIs and user sessions.",
        "Designed scalable MongoDB collections for user profiles and deployed the frontend seamlessly on Vercel."
      ],
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      links: { code: null, live: "https://gitmatch-delta.vercel.app/" }
    },
    {
      title: "Taskify",
      category: "MERN Stack | Production",
      icon: Code,
      description: [
        "Engineered a production-ready full-stack task management application utilizing the MERN stack and TypeScript.",
        "Integrated Google OAuth and role-based access control (RBAC) for secure, hierarchical user management.",
        "Architected modular REST APIs to support a scalable client-server environment and real-time data flow."
      ],
      techStack: ["MERN", "TypeScript", "JWT", "OAuth", "Tailwind CSS"],
      links: {
        code: null,
        live: "https://taskify-webapp-pro.vercel.app/"
      }
    },
    {
      title: "TaskPulse",
      category: "Distributed System",
      icon: Layers,
      description: [
        "Architected a distributed system comprising five containerized microservices orchestrated via Docker Compose.",
        "Designed asynchronous event-driven communication using Redis as a message broker to decouple API services.",
        "Configured GitHub Actions CI/CD pipelines to automate testing and validate multi-stage Docker builds."
      ],
      techStack: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL", "CI/CD"],
      links: { code: "#", live: null } // Please update code link
    },
    {
      title: "Notes Management System",
      category: "Full-Stack Web Application",
      icon: Layers,
      description: [
        "A web-based notes management system designed to create, update, categorize, and manage personal notes with clean separation of concerns.",
        "The application includes user authentication, category management, and complete CRUD functionality."
      ],
      techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      links: {
        code: "https://github.com/PurveshShinde/Notes_Management_System",
        live: null
      }
    },
    {
      title: "Mental Health Care Chatbot",
      category: "Prabal Hackathon",
      icon: Brain,
      description: [
        "Developed a chatbot-based application during the Prabal Hackathon to assist users with mental health-related queries.",
        "Worked in a team to design conversational workflows and integrate backend logic."
      ],
      techStack: ["Python", "Chatbot Logic", "Backend Integration"],
      links: { code: "#", live: null }
    },
    {
      title: "Emotion-Based Music Recommendation",
      category: "ML-Based Application",
      icon: Music,
      description: [
        "Built a system that recommends music based on detected user emotions.",
        "The project involved data preprocessing, emotion classification, and recommendation logic."
      ],
      techStack: ["Python", "Pandas", "Machine Learning"],
      links: {
        code: "https://github.com/PurveshShinde/Emotion-based-music-recommendation-system",
        live: "https://emotion-music-recommendation.streamlit.app/"
      }
    },
    {
      title: "Spring Boot To-Do List",
      category: "Full-Stack Web Application",
      icon: Server,
      description: [
        "A clean, full-stack Task Management application featuring real-time task creation, completion toggling, inline editing, and deletion.",
        "Built with clean architecture using Java 21, Spring Boot, Spring Data JPA, and an in-memory H2 database."
      ],
      techStack: ["Java 21", "Spring Boot", "H2 Database", "Tailwind CSS"],
      links: {
        code: "https://github.com/PurveshShinde/To-Do-List",
        live: null
      }
    },
    {
      title: "Line Follower Robot Simulator",
      category: "Robotics Simulation",
      icon: Brain,
      description: [
        "Developed a Python-based PID controller to navigate a line-following robot inside a 3D simulated environment.",
        "Integrated CoppeliaSim Edu with a custom bridge program to establish real-time communication between the Python logic and the robotic sensors."
      ],
      techStack: ["Python", "PID Control", "CoppeliaSim", "Socket.io"],
      links: {
        code: "https://github.com/PurveshShinde/Line-Follower-Simulator",
        live: null
      }
    }
  ];

  return (
    <div className="min-h-screen py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${isWizardMode ? 'text-amber-400 font-serif' : 'text-white'}`}>
            {isWizardMode ? 'Magical Artifacts' : 'Featured Projects'}
          </h2>
          <p className={`text-lg md:text-xl leading-8 ${isWizardMode ? 'text-amber-200/80 font-serif italic' : 'text-slate-400'}`}>
            {isWizardMode
              ? "A collection of enchanted items and spells forged during my apprenticeship."
              : "A selection of academic, personal, and hackathon projects demonstrating backend fundamentals, problem solving, and real-world application development."}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {PROJECTS_DATA.map((project, index) => (
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
                      ? 'bg-amber-950/20 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                      : 'bg-slate-900 border-slate-800 shadow-slate-900/50'}
                  `}
                >

                  {/* Background Gradient Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isWizardMode ? 'from-amber-500/10 to-purple-500/10' : 'from-primary-500/5 to-purple-500/5'}`} />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-2xl ${isWizardMode ? 'bg-amber-900/40' : 'bg-slate-800'}`}>
                          <project.icon className={`h-6 w-6 ${isWizardMode ? 'text-amber-400' : 'text-primary-400'}`} />
                        </div>
                        <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${isWizardMode ? 'bg-amber-900/30 text-amber-200' : 'bg-slate-800 text-slate-400'}`}>
                          {project.category}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-4 transition-colors ${isWizardMode ? 'text-amber-100 group-hover:text-amber-400' : 'text-white group-hover:text-primary-400'}`}>
                        {project.title}
                      </h3>

                      <div className="space-y-3 mb-8">
                        {project.description.map((desc, i) => (
                          <p key={i} className={`text-sm leading-relaxed flex items-start ${isWizardMode ? 'text-amber-200/70' : 'text-slate-300'}`}>
                            <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${isWizardMode ? 'bg-amber-500' : 'bg-primary-500'}`} />
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`
                              inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border
                              ${isWizardMode
                                ? 'bg-amber-900/20 text-amber-200 border-amber-500/20'
                                : 'bg-slate-800 text-slate-300 border-slate-700'}
                            `}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className={`flex gap-4 pt-6 border-t ${isWizardMode ? 'border-amber-500/20' : 'border-slate-800'}`}>
                        {/* CODE BUTTON LOGIC */}
                        {project.links.code ? (
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors ${isWizardMode ? 'bg-amber-400 text-black hover:bg-amber-300' : 'bg-white text-slate-900 hover:bg-slate-200'}`}
                          >
                            <Github className="h-4 w-4" /> {isWizardMode ? 'Scroll' : 'Code'}
                          </a>
                        ) : (
                          <button disabled className={`flex-1 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm opacity-50 cursor-not-allowed ${isWizardMode ? 'bg-amber-400 text-black' : 'bg-white text-slate-900'}`}>
                            <Github className="h-4 w-4" /> {isWizardMode ? 'Sealed' : 'Code'}
                          </button>
                        )}

                        {/* LIVE BUTTON LOGIC */}
                        {project.links.live ? (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm border transition-colors ${isWizardMode ? 'bg-amber-950/50 text-amber-100 border-amber-500/50 hover:bg-amber-900/50' : 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'}`}
                          >
                            <ExternalLink className="h-4 w-4" /> {isWizardMode ? 'Portal' : 'Live'}
                          </a>
                        ) : (
                          <button disabled className={`flex-1 inline-flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm border opacity-50 cursor-not-allowed ${isWizardMode ? 'bg-amber-950/50 text-amber-100 border-amber-500/50' : 'bg-slate-800 text-white border-slate-700'}`}>
                            <ExternalLink className="h-4 w-4" /> {isWizardMode ? 'Void' : 'Live'}
                          </button>
                        )}
                      </div>
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

export default Projects;