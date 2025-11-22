/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neo-brutalist colors
        'neo-yellow': '#FFEB3B',
        'neo-pink': '#FF6B9D',
        'neo-cyan': '#00E5FF',
        'neo-lime': '#C6FF00',
        'neo-orange': '#FF9800',
        'neo-purple': '#E040FB',
        'neo-black': '#000000',
        // Baking theme colors
        'cream': '#FAF3E0',
        'cream-dark': '#F5EBD1',
        'wheat': '#D4A574',
        'wheat-light': '#E8C9A0',
        'wheat-dark': '#C19563',
        'crust': '#8B4513',
        'crust-dark': '#654321',
        'dough': '#FFF8E7',
        'butter': '#FFE5B4',
        'honey': '#FFA07A',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        'soft': '0 2px 8px rgba(139, 69, 19, 0.1)',
        'soft-lg': '0 4px 16px rgba(139, 69, 19, 0.15)',
        'soft-xl': '0 8px 24px rgba(139, 69, 19, 0.2)',
        'warm': '0 4px 12px rgba(212, 165, 116, 0.3)',
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
