import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMagic } from '../context/MagicContext';

const Navbar = () => {
  const { isWizardMode } = useMagic();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  interface NavLink {
    name: string;
    path: string;
  }

  const navLinks: NavLink[] = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // Offset to trigger active state slightly before section hits top
      const scrollPosition = window.scrollY + 200;

      for (const link of navLinks) {
        const id = link.path.substring(1);
        const element = document.getElementById(id);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
    setIsOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-1000 ${isWizardMode ? 'bg-slate-950/80 border-amber-500/30' : 'bg-slate-950/80 border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={scrollToTop} className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <motion.div
              whileHover={{ rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isWizardMode ? <Sparkles className="h-8 w-8 text-amber-500" /> : <Terminal className="h-8 w-8 text-primary-400" />}
            </motion.div>
            <span className={`font-bold text-xl tracking-tight ${isWizardMode ? 'text-amber-100 font-serif' : 'text-white'}`}>Purvesh.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                      ? (isWizardMode ? 'text-amber-400' : 'text-primary-400')
                      : (isWizardMode ? 'text-amber-200/70 hover:text-amber-300' : 'text-slate-300 hover:text-primary-400')
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isWizardMode ? 'bg-amber-400' : 'bg-primary-400'}`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isWizardMode ? 'text-amber-200 hover:text-amber-100 hover:bg-amber-900/50' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden border-b overflow-hidden ${isWizardMode ? 'bg-amber-950 border-amber-900 text-amber-100' : 'bg-slate-900 border-slate-800 text-white'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                      ? (isWizardMode ? 'bg-amber-900/40 text-amber-400' : 'bg-primary-900/20 text-primary-400')
                      : (isWizardMode ? 'text-amber-200/70 hover:bg-amber-900/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white')
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
