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
  title: "Java Software Developer | Fresher / Intern",
  tagline: "Building clean, maintainable software systems with Java and strong CS fundamentals.",
  about: [
    "I am a Computer Science engineering student and Java Developer (Fresher / Intern level) with a strong foundation in core Java, object-oriented programming, and data structures.",
    "I have worked on projects involving REST APIs and database integration, and I actively use AI tools to improve productivity while retaining full ownership of logic and design decisions.",
    "I am currently seeking an entry-level Java Developer or Intern role to apply my backend knowledge and grow my skills in a professional environment."
  ],
  interests: ["Java", "Spring Boot (Learning)", "Backend Development", "Data Structures", "Problem Solving"]
};

// 2️⃣ CONTACT — LOCKED ✅
export const CONTACT: Contact = {
  email: "shindepurvesh007@gmail.com",
  phone: "+91 9307108947",
  linkedin: "https://www.linkedin.com/in/purvesh-shinde-311270227",
  github: "https://github.com/PurveshShinde",
  location: "Satara, India"
};

// 3️⃣ SKILLS — LOCKED ✅ (Matches Skills.tsx)
export const SKILLS: SkillCategory[] = [
  {
    category: "Primary Stack",
    items: ["Java", "Object-Oriented Programming", "Data Structures", "Algorithms"]
  },
  {
    category: "Supporting Languages",
    items: ["JavaScript", "SQL (Basic)", "Python (Basic)"]
  },
  {
    category: "Backend Fundamentals",
    items: ["REST APIs", "Database Integration", "Authentication Basics", "Modular Code Design", "JSON / XML Processing"]
  },
  {
    category: "Databases",
    items: ["MySQL", "Firebase Firestore"]
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "React (Basic)", "React Native"]
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Postman", "AI-Assisted Development"]
  },
  {
    category: "Learning Focus",
    items: ["Spring Boot", "MongoDB (Learning)", "Java Backend Development"] // ✅ FIXED: Added "(Learning)" to match Skills.tsx
  }
];

// 4️⃣ PROJECTS — LOCKED ✅ (Matches Projects.tsx)
export const PROJECTS: Project[] = [
  {
    title: "GitMatch — Developer Collaboration Platform", // ✅ FIXED: Full title to match Projects.tsx
    category: "Collaboration Platform",
    description: [
      "Helping developers discover teammates based on skills.",
      "Developing backend logic and REST APIs using a modular approach."
    ],
    techStack: ["Node.js", "Express", "MongoDB (Learning)", "REST APIs"]
  },
  {
    title: "Notes Management System",
    category: "Full-Stack App",
    description: [
      "Web-based system for managing personal notes with CRUD functionality.",
      "Implemented using clean separation of concerns."
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Taskify",
    category: "Production App",
    description: [
      "Task management system featuring secure authentication and real-time updates.",
      "Built with type-safe architecture."
    ],
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"]
  }
];

// 5️⃣ EXPERIENCE — LOCKED ✅
export const EXPERIENCE: Experience[] = [
  {
    title: "AI/ML Intern (Team Lead)",
    organization: "IBM (Edunet Foundation)",
    period: "July – Aug 2024",
    type: "Internship",
    description: [
      "Coordinated a team of 4 to integrate backend logic for an AI-driven solution.",
      "Designed API endpoints and managed data flow between services.",
      "Gained hands-on experience with team collaboration and project delivery."
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
    institution: "Dnyanshree Institute of Engineering and Technology (DBATU)",
    degree: "B.Tech Computer Science",
    year: "Expected 2026"
  },
  {
    institution: "LBS College, Satara",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2022"
  }
];

// 7️⃣ CERTIFICATIONS — LOCKED ✅
export const CERTIFICATIONS: Certification[] = [
  // ⚠️ NOTE: Only use "Architecting" if your certificate explicitly says so.
  // If it is the standard student course, "Cloud Foundations" is safer.
  { name: "AWS Academy Graduate – Cloud Foundations", issuer: "AWS" },
  { name: "Full Stack Java Developer", issuer: "Eduskills" },
  { name: "Back-End Engineering Virtual Experience", issuer: "Lyft (Forage)" }
];