import React from 'react';

export default function Projects() {
  const projects = [
    { name: 'Go Weather App', desc: 'A web app in Go demonstrating popular language features.' },
    { name: 'Automated Threat Detection', desc: 'RPA-based cloud threat detection using Azure and Power Automate.' }
  ];

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-3xl font-bold text-cyan-400">Projects</h2>
      <div className="space-y-3">
        {projects.map(proj => (
          <div key={proj.name} className="p-4 bg-white/5 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-gray-300">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
