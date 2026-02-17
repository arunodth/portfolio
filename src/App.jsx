import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CloudNetwork from './components/CloudNetwork';
import CyberParticles from './components/CyberParticles';

function App() {
  const sections = ['about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <CloudNetwork />
      <CyberParticles />

      {/* Sticky Nav Menu */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black text-cyan-400">◆</div>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hidden sm:block">
              ARUNODTH
            </span>
          </div>
          <div className="flex justify-center space-x-1 md:space-x-3 flex-wrap gap-1">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="px-2 md:px-3 py-2 text-xs md:text-sm font-semibold text-cyan-400 hover:text-white transition-all duration-200 hover:bg-cyan-400/10 rounded-md border border-transparent hover:border-cyan-400/50 underline-animation"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="relative z-10 p-6 md:p-12 max-w-6xl mx-auto scroll-smooth">
        <Header id="about" />
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Education id="education" />
        <Certifications id="certifications" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
