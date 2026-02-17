export const themeColors = {
  'cyan-400': '#06b6d4',
  'cyan-300': '#06d6d6',
  'purple-500': '#a855f7',
  'purple-400': '#c084fc',
  'blue-400': '#60a5fa',
  'blue-300': '#93c5fd',
  'teal-500': '#14b8a6',
  'teal-400': '#2dd4bf',
  'emerald-400': '#34d399',
  'emerald-300': '#6ee7b7',
  'green-500': '#22c55e',
  'green-400': '#4ade80',
  'pink-400': '#ec4899',
  'pink-300': '#f472b6',
  'rose-500': '#f43f5e',
  'rose-400': '#fb7185',
  'amber-400': '#fbbf24',
  'amber-300': '#fcd34d',
  'yellow-500': '#eab308',
  'yellow-400': '#facc15',
  'violet-400': '#a78bfa',
  'violet-300': '#c4b5fd',
  'orange-400': '#fb923c',
  'orange-300': '#fdba74',
  'red-500': '#ef4444',
  'red-400': '#f87171',
};

export const grayscaleColors = {
  'gray-900': '#111827',
  'gray-800': '#1f2937',
  'gray-700': '#374151',
  'gray-600': '#4b5563',
  'gray-500': '#6b7280',
  'gray-400': '#9ca3af',
  'gray-300': '#d1d5db',
  'gray-200': '#e5e7eb',
  'gray-100': '#f3f4f6',
  'gray-50': '#f9fafb',
};

export const getThemeColor = (colorName, opacity = 1) => {
  const color = themeColors[colorName];
  if (!color) return colorName;
  
  if (opacity === 1) return color;
  
  // Convert hex to rgba
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
