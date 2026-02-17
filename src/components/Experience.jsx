import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Technical Operations Engineering Consultant',
      company: 'Liveroom Technologies',
      period: '01-2026 – Present',
      desc: 'Production support for enterprise platforms | Incident troubleshooting & SLA management | RCA and preventive fixes | Release management & deployments | API & integrations support | Monitoring logs & alerts'
    },
    {
      role: 'TechOps Engineer / DevOps Engineer',
      company: 'Liveroom Technologies (KAST Sub-Contractor)',
      period: '04-2025 – 12-2025',
      desc: 'Managed AWS infrastructure (EC2, S3, VPC, OpenSearch) | CloudWatch, Prometheus, Grafana monitoring | CI/CD automation (Jenkins, GitHub Actions) | Infrastructure as Code (Terraform/CloudFormation) | 24/7 on-call support | Disaster Recovery & IAM governance | Integrated Sumsub KYC system'
    },
    {
      role: 'Associate Systems Engineer',
      company: 'Asian Trademade',
      period: '07-2024 – 03-2025',
      desc: 'LAN/WAN, switches, routers, firewalls configuration | L1 & L2 technical support | Patch management & system upgrades | Root cause analysis | Infrastructure reliability & documentation'
    },
    {
      role: 'Intern – Technology Consulting',
      company: 'Ernst & Young (EY)',
      period: '01-2024 – 07-2024',
      desc: 'IT audit & ERP analytics | RPA development (UiPath) | Python automation | Power BI / Excel analytics | Application control & audit reporting | AI & automation exposure'
    },
    {
      role: 'Junior IT Support Engineer',
      company: 'Asian Trademade',
      period: '03-2022 – 01-2024',
      desc: 'L1 technical support & user-facing issues | LAN/Wi-Fi troubleshooting | User provisioning & access control | System maintenance & patching | SLA ticket management'
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
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm font-mono rounded border border-cyan-400/50 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
