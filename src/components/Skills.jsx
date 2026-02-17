import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Three.js', category: '3D Graphics', icon: '🎨' },
    { name: 'Vite', category: 'Build Tools', icon: '⚡' },
    { name: 'TailwindCSS', category: 'Styling', icon: '🎭' },
    { name: 'Go', category: 'Backend', icon: '🐹' },
    { name: 'Network Security', category: 'Infrastructure', icon: '🔒' },
    { name: 'Azure', category: 'Cloud', icon: '☁️' },
    { name: 'Power Automate', category: 'Automation', icon: '🤖' },
  ];

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          SKILLS
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="glow-box rounded-lg p-4 text-center transform hover:scale-110 transition-all duration-300 group cursor-pointer"
          >
            <div className="text-3xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
            <h3 className="font-bold text-cyan-300 group-hover:text-cyan-100 text-sm md:text-base">
              {skill.name}
            </h3>
            <p className="text-xs text-purple-400 mt-1">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
