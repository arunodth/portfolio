import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeColors } from '../utils/themeColors';

export default function About() {
  const theme = useTheme();
  const primaryColor = themeColors[theme.primary];
  const secondaryColor = themeColors[theme.secondary];
  
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold" style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          PROFILE
        </h2>
        <div className="flex-1 h-0.5" style={{background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, transparent)`}}></div>
      </div>
      <div className="rounded-lg p-8 space-y-4 hover:shadow-2xl transition-all" style={{
        background: `rgba(0, 0, 0, 0.3)`,
        border: `1px solid ${primaryColor}40`,
        boxShadow: `0 0 15px ${primaryColor}20, inset 0 0 15px ${primaryColor}05`
      }}>
        <p className="text-gray-200 text-lg leading-relaxed">
          <span style={{color: primaryColor}} className="font-bold">Cloud & Technical Operations Engineer</span> with 
          <span style={{color: secondaryColor}} className="font-bold"> 4+ years</span> of IT experience and 
          <span style={{color: primaryColor}} className="font-bold"> 2+ years</span> in Cloud, DevOps & Production Operations.
        </p>
        
        <div className="space-y-3 mt-6">
          <h3 style={{color: primaryColor}} className="font-bold">Core Expertise:</h3>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>☁️ <span className="font-semibold">AWS</span> - EC2, S3, VPC, OpenSearch, CloudWatch</li>
            <li>🔄 <span className="font-semibold">CI/CD</span> - GitHub Actions, Jenkins</li>
            <li>🏗️ <span className="font-semibold">Infrastructure as Code</span> - Terraform, CloudFormation</li>
            <li>🚨 <span className="font-semibold">Incident Management</span> - SLA-driven operations, RCA</li>
            <li>🔒 <span className="font-semibold">Cloud Security</span> - IAM, Disaster Recovery, Compliance</li>
          </ul>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Currently pursuing <span style={{color: secondaryColor}} className="font-bold">MSc in Network & Information Security</span> at Kingston University. Career goal: Junior–Mid Cloud/Technical Operations Manager role.
        </p>
      </div>
    </section>
  );
}
