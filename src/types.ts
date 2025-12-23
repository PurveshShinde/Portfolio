/// <reference types="vite/client" />

// 👆 This line above fixes the "Cannot find module" errors for images!

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    about: string[];
    interests: string[];
}

export interface Contact {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    category: string;
    description: string[];
    techStack: string[];
}

export interface Experience {
    title: string;
    organization: string;
    period?: string;
    type: 'Work' | 'Project' | 'Hackathon' | 'Internship';
    description: string[];
}

export interface Education {
    institution: string;
    degree: string;
    year: string;
}

export interface Certification {
    name: string;
    issuer: string;
}