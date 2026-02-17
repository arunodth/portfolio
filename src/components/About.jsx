import React from 'react';

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          ABOUT ME
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      <div className="neon-border rounded-lg p-8 space-y-4 hover:shadow-2xl transition-all">
        <p className="text-gray-200 text-lg leading-relaxed">
          I am a <span className="text-cyan-400 font-bold">24-year-old technology architect</span> with 
          <span className="text-purple-400 font-bold"> 3+ years</span> of experience in IT and networking infrastructure. 
          I hold an <span className="text-cyan-400 font-bold">MSc in Computer Science</span> and specialize in 
          AI, data analytics, and network security.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Passionate about building <span className="text-purple-400 font-bold">interactive web experiences</span> and 
          exploring cutting-edge technologies. I combine network expertise with full-stack development to create 
          innovative solutions.
        </p>
      </div>
    </section>
  );
}
