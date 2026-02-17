import React from 'react';

export default function Certifications() {
  const certifications = [
    { name: 'Python Essentials', issuer: 'Cisco', icon: '🐍' },
    { name: 'AZ-900 Preparation', issuer: 'Microsoft Azure', icon: '☁️' },
    { name: 'UiPath Automation Developer', issuer: 'UiPath', icon: '🤖' },
    { name: 'Microsoft & LinkedIn Software Development', issuer: 'Microsoft', icon: '💻' },
    { name: 'Agile Project Leadership', issuer: 'Professional', icon: '📊' },
    { name: 'MySQL Development', issuer: 'MySQL', icon: '🗄️' },
  ];

  return (
    <section id="certifications" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          CERTIFICATIONS
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="glow-box rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{cert.icon}</div>
            <h3 className="font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors mb-1">
              {cert.name}
            </h3>
            <p className="text-purple-400 text-sm">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
