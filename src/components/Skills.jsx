import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', icon: '☁️' },
        { name: 'EC2/S3/VPC', icon: '🏗️' },
        { name: 'OpenSearch', icon: '🔍' },
        { name: 'CloudFormation', icon: '📋' },
      ]
    },
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Terraform', icon: '🔧' },
        { name: 'GitHub Actions', icon: '⚙️' },
        { name: 'Jenkins', icon: '🚀' },
        { name: 'Docker', icon: '📦' },
      ]
    },
    {
      title: 'Monitoring & Ops',
      skills: [
        { name: 'CloudWatch', icon: '📊' },
        { name: 'Prometheus', icon: '📈' },
        { name: 'Grafana', icon: '📉' },
        { name: 'ELK Stack', icon: '🔗' },
      ]
    },
    {
      title: 'Security & Compliance',
      skills: [
        { name: 'IAM', icon: '🔐' },
        { name: 'Disaster Recovery', icon: '🛡️' },
        { name: 'NIST/ISO 27001', icon: '📜' },
        { name: 'CIS Compliance', icon: '✅' },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Bash/Shell', icon: '💻' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'UiPath RPA', icon: '🤖' },
      ]
    },
    {
      title: 'Networking & Support',
      skills: [
        { name: 'LAN/WAN', icon: '🌐' },
        { name: 'Firewalls', icon: '🔥' },
        { name: 'L1/L2 Support', icon: '📞' },
        { name: 'Incident Management', icon: '🚨' },
      ]
    }
  ];

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          SKILLS
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      
      <div className="space-y-6">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <h3 className="text-cyan-300 font-bold text-lg mb-3">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="glow-box rounded-lg p-4 text-center transform hover:scale-110 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
                  <h3 className="font-bold text-cyan-300 group-hover:text-cyan-100 text-sm">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
