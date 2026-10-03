import {
  Profile,
  Contact,
  SkillCategory,
  Project,
  Experience,
  Education,
  Certification
} from './types';

// 1️⃣ PROFILE — LOCKED ✅
export const PROFILE: Profile = {
  name: "Purvesh Shinde",
  title: "Software Developer",
  tagline: "Computer Science graduate with hands-on experience in full-stack development, DevOps, and backend architecture.",
  about: [
    "I am a Computer Science graduate with hands-on experience in full-stack development, DevOps, and backend architecture.",
    "Proficient in Java, Python, and JavaScript with practical exposure to Git, Docker, and microservices. I have a strong foundation in Data Structures, Algorithms, and distributed systems design.",
    "I actively use modern tools and methodologies to deliver robust, scalable solutions while retaining full ownership of logic and design decisions."
  ],
  interests: ["Full-Stack Development", "Backend Architecture", "DevOps", "Microservices", "System Design"]
};

// 2️⃣ CONTACT — LOCKED ✅
export const CONTACT: Contact = {
  email: "shindepurvesh007@gmail.com",
  phone: "+91-930-710-8047",
  linkedin: "https://linkedin.com/in/purvesh-shinde",
  github: "https://github.com/PurveshShinde",
  location: "Pune, India"
};

// 3️⃣ SKILLS — LOCKED ✅ (Matches Skills.tsx)
export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "FastAPI", "REST APIs", "WebSockets"]
  },
  {
    category: "Frontend/Mobile",
    items: ["React.js", "Tailwind CSS", "Flutter"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Git", "Linux", "CI/CD"]
  },
  {
    category: "Core Computer Science",
    items: ["Object-Oriented Programming", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

// 4️⃣ PROJECTS — LOCKED ✅ (Matches Projects.tsx)
export const PROJECTS: Project[] = [
  {
    title: "GitMatch (Final Year Project)",
    category: "Developer Collaboration Platform",
    description: [
      "Developed a real-time developer collaboration platform integrating external APIs for live matching.",
      "Implemented Firebase Authentication with JWT-based authorization to secure APIs and user sessions.",
      "Designed scalable MongoDB collections for user profiles and deployed the frontend seamlessly on Vercel."
    ],
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "#" // Replace with actual Live Demo link
  },
  {
    title: "Taskify",
    category: "Full-Stack App",
    description: [
      "Engineered a production-ready full-stack task management application utilizing the MERN stack and TypeScript.",
      "Integrated Google OAuth and role-based access control (RBAC) for secure, hierarchical user management.",
      "Architected modular REST APIs to support a scalable client-server environment and real-time data flow."
    ],
    techStack: ["MERN", "TypeScript", "JWT", "OAuth", "Tailwind CSS"],
    link: "#" // Replace with actual Live Demo link
  },
  {
    title: "TaskPulse",
    category: "Distributed System",
    description: [
      "Architected a distributed system comprising five containerized microservices orchestrated via Docker Compose.",
      "Designed asynchronous event-driven communication using Redis as a message broker to decouple API services.",
      "Configured GitHub Actions CI/CD pipelines to automate testing and validate multi-stage Docker builds."
    ],
    techStack: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL", "CI/CD"],
    github: "#" // Replace with actual GitHub link
  },
  {
    title: "Notes Management System",
    category: "Full-Stack App",
    description: [
      "Web-based system for managing personal notes with CRUD functionality.",
      "Implemented using clean separation of concerns."
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://notes-management-system-beae.onrender.com/"
  },
  {
    title: "Spring Boot To-Do List",
    category: "Full-Stack Web Application",
    description: [
      "A clean, full-stack Task Management application featuring real-time task creation, completion toggling, inline editing, and deletion.",
      "Built with clean architecture using Java 21, Spring Boot, Spring Data JPA, and an in-memory H2 database."
    ],
    techStack: ["Java 21", "Spring Boot", "H2 Database", "Tailwind CSS"],
    github: "https://github.com/PurveshShinde/To-Do-List"
  },
  {
    title: "Line Follower Robot Simulator",
    category: "Robotics Simulation",
    description: [
      "Developed a Python-based PID controller to navigate a line-following robot inside a 3D simulated environment.",
      "Integrated CoppeliaSim Edu with a custom bridge program to establish real-time communication between the Python logic and the robotic sensors."
    ],
    techStack: ["Python", "PID Control", "CoppeliaSim", "Socket.io"],
    github: "https://github.com/PurveshShinde/Line-Follower-Simulator"
  }
];

// 5️⃣ EXPERIENCE — LOCKED ✅
export const EXPERIENCE: Experience[] = [
  {
    title: "Software Developer Intern",
    organization: "Octane Cybersafe Pvt. Ltd.",
    period: "Feb 2026 – Jun 2026",
    type: "Internship",
    description: [
      "Served as primary developer and lead tester on a production-grade cross-platform mobile security app (Flutter, Java), delivered on schedule.",
      "Built and validated a threat-scoring engine evaluating app permissions, install source, and network activity to flag malicious apps.",
      "Designed and tested a motion-based anti-theft feature using accelerometer/gyroscope data to detect device-snatching and trigger auto-lock; also tested APK/ZIP scanning and cache-cleaning utilities."
    ]
  },
  {
    title: "AI/ML Team Lead",
    organization: "IBM SkillsBuild",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    description: [
      "Led a 4-member team to design and integrate an interactive customer support chatbot into a custom e-commerce (coffee shop) web application.",
      "Configured structured conversational pathways and decision trees using IBM Watson Assistant to guide users through multi-step service options.",
      "Integrated the chatbot's REST APIs with the frontend, establishing a seamless client-server architecture for real-time query resolution."
    ]
  },
  {
    title: "Prabal Hackathon Participant",
    organization: "Team Vanguards",
    type: "Hackathon",
    description: [
      "Collaborated on backend logic for a mental health chatbot solution.",
      "Focused on API stability and integration under deadline pressure."
    ]
  }
];

// 6️⃣ EDUCATION — LOCKED ✅
export const EDUCATION: Education[] = [
  {
    institution: "Dnyanshree Institute of Engineering and Technology (DIET)",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    year: "Aug 2022 – Jul 2026"
  },
  {
    institution: "LBS College, Satara",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2022"
  }
];

// 7️⃣ CERTIFICATIONS — LOCKED ✅
export const CERTIFICATIONS: Certification[] = [
  { name: "Red Hat (DO101) | Introduction to OpenShift Applications", issuer: "Red Hat" },
  { name: "Red Hat (RH104) | Red Hat Linux Technical Overview", issuer: "Red Hat" },
  { name: "Software Engineering Virtual Experience", issuer: "JPMorgan Chase (Forage)" },
  { name: "The Complete JavaScript Course: From Zero to Expert", issuer: "Udemy" }
];