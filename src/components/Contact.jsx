import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-3xl font-bold text-cyan-400">Contact</h2>
      <p>Email: <a href="mailto:arunodth@example.com" className="text-cyan-400 hover:underline">arunodth@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/arunodth" className="text-cyan-400 hover:underline">linkedin.com/in/arunodth</a></p>
      <p>GitHub: <a href="https://github.com/arunodth" className="text-cyan-400 hover:underline">github.com/arunodth</a></p>
    </section>
  );
}
