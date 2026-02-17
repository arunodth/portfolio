/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          purple: '#ff00ff',
          pink: '#ff006e',
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
        'neon-glow': 'neon-glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'border-flow': 'border-flow 3s ease infinite',
        'scan-lines': 'scan-lines 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff' },
          '50%': { textShadow: '0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.3), inset 0 0 5px rgba(0, 255, 255, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 10px rgba(0, 255, 255, 0.2)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'scan-lines': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
