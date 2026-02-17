import React from 'react';

export default function Education() {
  const education = [
    {
      degree: 'MSc Network & Information Security',
      institution: 'Kingston University',
      period: '2025 – Present',
      icon: '🎓'
    },
    {
      degree: 'BSc Computer Science (Software Engineering Major)',
      institution: 'Edith Cowan University',
      period: 'Completed',
      icon: '💻'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'ACBT',
      period: 'Completed',
      icon: '📚'
    },
    {
      degree: 'Diploma in IT',
      institution: 'ESOFT',
      period: 'Completed',
      icon: '📖'
    },
    {
      degree: 'Edexcel AS Level',
      institution: 'St. Peter\'s College',
      period: 'Completed',
      icon: '✏️'
    }
  ];

  return (
    <section id="education" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          EDUCATION
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="glow-box rounded-lg p-6 hover:scale-102 transition-transform duration-300 group">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{edu.icon}</div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-100 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-purple-400 font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
