import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>
      
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      
      <section id="skills" className="scroll-mt-16">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
      
      <section id="experience" className="scroll-mt-16">
        <Experience />
      </section>
      
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </Layout>
  );
};

export default App;