import React from 'react';

export default function Header() {
  return (
    <section id="header" className="text-center space-y-6 py-12">
      <div className="space-y-3">
        <h1 className="text-7xl font-black neon-text drop-shadow-2xl">
          ARUNODTH DIAS
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
          <div className="h-1 w-1 bg-cyan-400 rounded-full"></div>
          <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
        </div>
      </div>
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 animate-pulse">
        ⚡ Assistant Network Engineer | MSc Computer Science ⚡
      </p>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Architecting the future of networks & web experiences
      </p>
    </section>
  );
}

