import React from 'react';

export default function Projects() {
  const projects = [
    { 
      name: 'Go Weather App', 
      desc: 'A web app in Go demonstrating popular language features.', 
      tech: ['Go', 'API', 'REST'],
      icon: '🌦️' 
    },
    { 
      name: 'Automated Threat Detection', 
      desc: 'RPA-based cloud threat detection using Azure and Power Automate.', 
      tech: ['Azure', 'RPA', 'Security'],
      icon: '🛡️' 
    }
  ];

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          PROJECTS
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div 
            key={proj.name} 
            className="neon-border rounded-lg p-6 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{proj.icon}</div>
              <span className="inline-block h-2 w-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-100 transition-colors">
              {proj.name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{proj.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {proj.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded border border-purple-500/50 hover:border-purple-400 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
