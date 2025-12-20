import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} Purvesh Shinde. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-400 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;