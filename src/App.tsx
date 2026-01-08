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
            <section id="home" className="min-h-screen flex flex-col justify-center">
                <Home />
            </section>

            <section id="about" className="min-h-screen flex flex-col justify-center relative z-10">
                <About />
            </section>

            <section id="skills" className="relative z-10">
                <Skills />
            </section>

            <section id="projects" className="relative z-10">
                <Projects />
            </section>

            <section id="experience" className="relative z-10">
                <Experience />
            </section>

            <section id="contact" className="relative z-10 pb-20">
                <Contact />
            </section>
        </Layout>
    );
};

export default App;
