import React from 'react';
import { useTheme } from '../context/ThemeContext';

const themeColors = {
  'cyan-400': '#06b6d4',
  'purple-500': '#a855f7',
  'blue-400': '#60a5fa',
  'teal-500': '#14b8a6',
  'emerald-400': '#34d399',
  'green-500': '#22c55e',
  'pink-400': '#ec4899',
  'rose-500': '#f43f5e',
  'amber-400': '#fbbf24',
  'yellow-500': '#eab308',
  'violet-400': '#a78bfa',
  'orange-400': '#fb923c',
  'red-500': '#ef4444',
};

export default function Header() {
  const theme = useTheme();
  const primaryColor = themeColors[theme.primary];
  const secondaryColor = themeColors[theme.secondary];
  
  return (
    <section id="header" className="text-center space-y-6 py-12">
      <div className="space-y-3">
        <h1 className="text-7xl font-black drop-shadow-2xl" style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: `0 0 30px ${primaryColor}40`
        }}>
          ARUNODTH DIAS
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12" style={{background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`}}></div>
          <div className="h-1 w-1 rounded-full" style={{backgroundColor: primaryColor}} ></div>
          <div className="h-1 w-12" style={{background: `linear-gradient(90deg, ${secondaryColor}, ${primaryColor})`}}></div>
        </div>
      </div>
      <p className="text-2xl font-bold animate-pulse" style={{
        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        ⚡ Cloud & Technical Operations Engineer ⚡
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-gray-300">
        <span className="flex items-center gap-2">📍 Moratuwa, Sri Lanka</span>
        <span className="flex items-center gap-2">📞 +94 71 727 8363</span>
        <span className="flex items-center gap-2">📧 arunodthdias@gmail.com</span>
      </div>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
        4+ years IT experience | 2+ years Cloud/DevOps | AWS specialist | MSc in Network & Information Security
      </p>
    </section>
  );
}

