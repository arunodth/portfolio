import React from 'react';

export default function Skills() {
  const skills = ['React', 'Three.js', 'Vite', 'TailwindCSS', 'Go', 
                  'Network Security', 'Azure', 'Power Automate'];
  return (
    <section id="skills" className="space-y-4">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-bold gradient-text">React</h3>
        <p>Experienced in building interactive web apps</p>
        </div>
    </section>
  );
}
