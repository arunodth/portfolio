import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CloudNetwork from '../components/CloudNetwork';
import CyberParticles from '../components/CyberParticles';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <CloudNetwork />
      <CyberParticles />

      {/* Sticky Nav Menu */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black text-cyan-400">◆</div>
            <Link to="/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hidden sm:block hover:text-cyan-400">
              ARUNODTH
            </Link>
          </div>
          <div className="flex justify-center space-x-1 md:space-x-3 flex-wrap gap-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 md:px-3 py-2 text-xs md:text-sm font-semibold transition-all duration-200 rounded-md border underline-animation ${
                    isActive
                      ? 'text-white bg-cyan-400/20 border-cyan-400/50'
                      : 'text-cyan-400 hover:text-white hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="relative z-10 p-6 md:p-12 max-w-6xl mx-auto scroll-smooth pt-24">
        {children}
      </div>
    </div>
  );
}
