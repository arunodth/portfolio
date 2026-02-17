import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeColors } from '../utils/themeColors';

export default function Enquiries() {
  const theme = useTheme();
  const primaryColor = themeColors[theme.primary];
  const secondaryColor = themeColors[theme.secondary];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // You can integrate with EmailJS, FormSubmit, or your own backend here
      // For now, we'll log to console and show success message
      console.log('Form submitted:', formData);
      
      // Example with FormSubmit.co (free service, no setup needed):
      const response = await fetch('https://formsubmit.co/ajax/arunodthdias@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiries" className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold" style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          GET IN TOUCH
        </h2>
        <div className="flex-1 h-0.5" style={{background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, transparent)`}}></div>
      </div>

      <div className="rounded-lg p-8 space-y-6" style={{
        background: `rgba(0, 0, 0, 0.3)`,
        border: `1px solid ${primaryColor}40`,
        boxShadow: `0 0 15px ${primaryColor}20, inset 0 0 15px ${primaryColor}05`
      }}>
        <p className="text-gray-300 text-center text-lg">
          Have a question or want to collaborate? Drop me a message!
        </p>

        {submitted && (
          <div className="p-4 rounded-lg text-center" style={{
            background: `${primaryColor}20`,
            border: `1px solid ${primaryColor}50`
          }}>
            <p style={{color: primaryColor}} className="font-semibold">
              ✅ Thank you! Your message has been sent successfully.
            </p>
            <p className="text-gray-400 text-sm mt-1">I'll get back to you soon!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: primaryColor}}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 bg-black border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none"
                style={{
                  borderColor: `${primaryColor}50`,
                  focusBorderColor: primaryColor
                }}
                onFocus={(e) => e.target.style.borderColor = primaryColor}
                onBlur={(e) => e.target.style.borderColor = `${primaryColor}50`}
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: primaryColor}}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-black border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none"
                style={{
                  borderColor: `${primaryColor}50`
                }}
                onFocus={(e) => e.target.style.borderColor = primaryColor}
                onBlur={(e) => e.target.style.borderColor = `${primaryColor}50`}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold" style={{color: primaryColor}}>
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="w-full px-4 py-2 bg-black border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none"
              style={{
                borderColor: `${primaryColor}50`
              }}
              onFocus={(e) => e.target.style.borderColor = primaryColor}
              onBlur={(e) => e.target.style.borderColor = `${primaryColor}50`}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold" style={{color: primaryColor}}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="6"
              className="w-full px-4 py-2 bg-black border rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none resize-none"
              style={{
                borderColor: `${primaryColor}50`
              }}
              onFocus={(e) => e.target.style.borderColor = primaryColor}
              onBlur={(e) => e.target.style.borderColor = `${primaryColor}50`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
              boxShadow: `0 0 20px ${primaryColor}40`
            }}
          >
            {loading ? '⏳ Sending...' : '🚀 Send Message'}
          </button>

          <p className="text-gray-400 text-sm text-center">
            Or email me directly: <span style={{color: primaryColor}} className="font-semibold">arunodthdias@gmail.com</span>
          </p>
        </form>
      </div>
    </section>
  );
}
