import { Project, SkillCategory, ExperienceItem, EducationItem, Certification, ContactInfo } from './types';

export const PROFILE = {
  name: "Purvesh Shinde",
  title: "Java Backend Engineer | Distributed Systems & Cloud Architecture",
  tagline: "Architecting high-performance, scalable backend systems with Java and Spring Boot.",
  about: [
    "I am a Computer Science engineer dedicated to building robust, enterprise-grade backend systems. My expertise lies in designing RESTful APIs, optimizing database performance, and implementing microservices architectures.",
    "With a deep understanding of the Java ecosystem (Spring Boot, Hibernate) and cloud infrastructure, I focus on writing clean, maintainable code that scales.",
    "I am seeking an entry-level Backend Engineering role where I can apply my knowledge of distributed systems, concurrency, and system design to solve complex engineering challenges."
  ],
  interests: ["Java", "Spring Boot", "Microservices", "System Design", "Cloud Computing"]
};

export const CONTACT: ContactInfo = {
  email: "shindepurvesh007@gmail.com",
  phone: "+91 9307108947",
  linkedin: "https://linkedin.com/in/purvesh-shinde",
  github: "https://github.com/PurveshShinde",
  location: "Satara, India"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend Engineering",
    items: ["Java 17/21", "Spring Boot 3", "Spring Cloud", "Hibernate/JPA", "Microservices", "REST APIs"]
  },
  {
    category: "System Design & DevOps",
    items: ["Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD Pipelines", "System Architecture", "Linux"]
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Optimization", "Transaction Management"]
  },
  {
    category: "Languages & Core",
    items: ["Java", "SQL", "Python", "Data Structures", "Algorithms", "Multithreading"]
  },
  {
    category: "Tools & Testing",
    items: ["Git", "Maven/Gradle", "JUnit 5", "Mockito", "Postman", "IntelliJ IDEA"]
  },
  {
    category: "Frontend (Familiar)",
    items: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "Integration"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Note Service",
    category: "Microservices Architecture",
    description: [
      "Engineered a scalable note-taking backend service using Spring Boot and PostgreSQL.",
      "Implemented JWT authentication, Role-Based Access Control (RBAC), and efficient search indexing.",
      "Optimized query performance using Hibernate caching and database indexing strategies."
    ],
    techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "JWT"]
  },
  {
    title: "GitMatch Platform",
    category: "Distributed System (Ongoing)",
    description: [
      "Building a developer matchmaking engine that pairs users based on technical skill compatibility.",
      "Designing a message queue architecture (Kafka/RabbitMQ) for asynchronous notifications.",
      "Developing a RESTful API layer with comprehensive documentation (Swagger/OpenAPI)."
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "System Design"]
  },
  {
    title: "Intelligent Query Processor",
    category: "AI Integration",
    description: [
      "Designed a modular backend service to process natural language queries for an IBM internship project.",
      "Integrated Python-based NLP models with a Java backend via REST endpoints.",
      "Ensured high availability and fault tolerance for concurrent user requests."
    ],
    techStack: ["Python", "Flask", "REST APIs", "Backend Integration"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "AI/ML Backend Intern – Team Lead",
    organization: "IBM",
    period: "July – Aug 2024",
    type: "Work",
    description: [
      "Architected the backend integration for an AI-driven solution, leading a team of 4.",
      "Designed API contracts and data flow diagrams to ensure seamless communication between services.",
      "Optimized server response times by 30% through efficient data processing pipelines."
    ]
  },
  {
    title: "Data Analytics Engine",
    organization: "Independent Project",
    type: "Project",
    description: [
      "Built a data processing pipeline to ingest, clean, and visualize large datasets.",
      "Implemented batch processing jobs to handle data transformation efficiently."
    ]
  },
  {
    title: "Prabal 2025 Hackathon",
    organization: "Team Vanguards",
    type: "Hackathon",
    description: [
      "Developed the backend logic for a rapid-prototype solution under tight deadlines.",
      "Focused on API stability and deployment automation."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
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

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Academy Graduate – Cloud Architecting", issuer: "AWS" },
  { name: "Full Stack Java Developer", issuer: "Eduskills" },
  { name: "Back-End Engineering Virtual Experience", issuer: "Lyft (Forage)" },
  { name: "Cloud Engineering", issuer: "Google Cloud Skills Boost" }
];