import React from 'react';

export default function Contact() {
  const contacts = [
    { label: 'Email', href: 'mailto:arunodth@example.com', text: 'arunodth@example.com', icon: '📧' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/arunodth', text: 'linkedin.com/in/arunodth', icon: '💼' },
    { label: 'GitHub', href: 'https://github.com/arunodth', text: 'github.com/arunodth', icon: '🚀' }
  ];

  return (
    <section id="contact" className="space-y-6 pb-12">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          CONTACT
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent"></div>
      </div>
      
      <div className="glow-box rounded-lg p-8">
        <p className="text-gray-300 text-center mb-8 text-lg">Let's build the future together</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border rounded-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{contact.icon}</div>
              <h3 className="font-bold text-cyan-300 mb-2 group-hover:text-cyan-100">{contact.label}</h3>
              <p className="text-gray-400 text-sm underline-animation group-hover:text-cyan-300 transition-colors">
                {contact.text}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center border-t border-cyan-400/30 pt-8">
        <p className="text-gray-500 font-mono text-sm">
          &lt;/&gt; Built with React, Tailwind &amp; Futuristic Vision
        </p>
      </div>
    </section>
  );
}
