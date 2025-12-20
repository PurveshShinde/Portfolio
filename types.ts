export interface Project {
  title: string;
  category: string;
  description: string[];
  techStack: string[];
  link?: string;
  repo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period?: string;
  description: string[];
  type: 'Work' | 'Project' | 'Hackathon';
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location?: string;
}