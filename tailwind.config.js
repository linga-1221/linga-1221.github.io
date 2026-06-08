/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0eb',
        navy: '#1a1a2e',
        coral: '#e85d5d',
        'coral-dark': '#d14a4a',
        sand: '#e8e0d8',
        charcoal: '#2d2d3f',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'card': '0 8px 40px rgba(0,0,0,0.08)',
        'hover': '0 12px 48px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}