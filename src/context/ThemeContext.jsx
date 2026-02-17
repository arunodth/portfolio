import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const THEMES = {
  home: {
    name: 'home',
    primary: 'cyan-400',
    secondary: 'purple-500',
    accent: 'cyan-300',
    glow: 'cyan',
    bg: 'from-cyan-400 to-purple-500',
    text: 'text-cyan-400',
    border: 'border-cyan-400',
    badge: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/50',
  },
  experience: {
    name: 'experience',
    primary: 'blue-400',
    secondary: 'teal-500',
    accent: 'blue-300',
    glow: 'blue',
    bg: 'from-blue-400 to-teal-500',
    text: 'text-blue-400',
    border: 'border-blue-400',
    badge: 'bg-blue-400/20 text-blue-300 border-blue-400/50',
  },
  skills: {
    name: 'skills',
    primary: 'emerald-400',
    secondary: 'green-500',
    accent: 'emerald-300',
    glow: 'emerald',
    bg: 'from-emerald-400 to-green-500',
    text: 'text-emerald-400',
    border: 'border-emerald-400',
    badge: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/50',
  },
  projects: {
    name: 'projects',
    primary: 'pink-400',
    secondary: 'rose-500',
    accent: 'pink-300',
    glow: 'pink',
    bg: 'from-pink-400 to-rose-500',
    text: 'text-pink-400',
    border: 'border-pink-400',
    badge: 'bg-pink-400/20 text-pink-300 border-pink-400/50',
  },
  education: {
    name: 'education',
    primary: 'amber-400',
    secondary: 'yellow-500',
    accent: 'amber-300',
    glow: 'amber',
    bg: 'from-amber-400 to-yellow-500',
    text: 'text-amber-400',
    border: 'border-amber-400',
    badge: 'bg-amber-400/20 text-amber-300 border-amber-400/50',
  },
  certifications: {
    name: 'certifications',
    primary: 'violet-400',
    secondary: 'purple-500',
    accent: 'violet-300',
    glow: 'violet',
    bg: 'from-violet-400 to-purple-500',
    text: 'text-violet-400',
    border: 'border-violet-400',
    badge: 'bg-violet-400/20 text-violet-300 border-violet-400/50',
  },
  contact: {
    name: 'contact',
    primary: 'orange-400',
    secondary: 'red-500',
    accent: 'orange-300',
    glow: 'orange',
    bg: 'from-orange-400 to-red-500',
    text: 'text-orange-400',
    border: 'border-orange-400',
    badge: 'bg-orange-400/20 text-orange-300 border-orange-400/50',
  },
};
