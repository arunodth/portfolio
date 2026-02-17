import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Assistant Network Engineer',
      company: '247 Techies Pvt Ltd',
      period: 'PRESENT',
      desc: 'Managing enterprise network infrastructure, security monitoring, threat detection, and advanced troubleshooting'
    },
    {
      role: 'Trainee Technical Support Specialist',
      company: 'Ernst & Young',
      period: 'PAST',
      desc: 'AI & data analytics service line - automated threat detection and cloud infrastructure management'
    }
  ];

  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          EXPERIENCE
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glow-box rounded-lg p-6 hover:scale-105 transition-transform duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-purple-400 font-semibold">{exp.company}</p>
              </div>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm font-mono rounded border border-cyan-400/50">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
