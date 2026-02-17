import React from 'react';

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          PROFILE
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="neon-border rounded-lg p-8 space-y-4 hover:shadow-2xl transition-all">
        <p className="text-gray-200 text-lg leading-relaxed">
          <span className="text-cyan-400 font-bold">Cloud & Technical Operations Engineer</span> with 
          <span className="text-purple-400 font-bold"> 4+ years</span> of IT experience and 
          <span className="text-cyan-400 font-bold"> 2+ years</span> in Cloud, DevOps & Production Operations.
        </p>
        
        <div className="space-y-3 mt-6">
          <h3 className="text-cyan-300 font-bold">Core Expertise:</h3>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>☁️ <span className="font-semibold">AWS</span> - EC2, S3, VPC, OpenSearch, CloudWatch</li>
            <li>🔄 <span className="font-semibold">CI/CD</span> - GitHub Actions, Jenkins</li>
            <li>🏗️ <span className="font-semibold">Infrastructure as Code</span> - Terraform, CloudFormation</li>
            <li>🚨 <span className="font-semibold">Incident Management</span> - SLA-driven operations, RCA</li>
            <li>🔒 <span className="font-semibold">Cloud Security</span> - IAM, Disaster Recovery, Compliance</li>
          </ul>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Currently pursuing <span className="text-purple-400 font-bold">MSc in Network & Information Security</span> at Kingston University. Career goal: Junior–Mid Cloud/Technical Operations Manager role.
        </p>
      </div>
    </section>
  );
}
