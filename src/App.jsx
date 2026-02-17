import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CloudNetwork from './components/CloudNetwork';
import CyberParticles from './components/CyberParticles';

function App() {
  const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <CloudNetwork />
      <CyberParticles />

      {/* Sticky Nav Menu */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-70 backdrop-blur-md p-4 flex justify-center space-x-6">
        {sections.map(section => (
          <a
            key={section}
            href={`#${section}`}
            className="text-cyan-400 hover:text-white transition-colors duration-200"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Page Content */}
      <div className="absolute inset-0 z-10 p-6 space-y-32 pt-24 scroll-smooth">
  <Header id="about" />
  <About id="about" />
  <Experience id="experience" />
  <Skills id="skills" />
  <Projects id="projects" />
  <Contact id="contact" />
     </div>
</div>
  );
}

export default App;
