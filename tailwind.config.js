
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#1c1917', // stone-900
        secondary: '#57534e', // stone-600
        accent: '#d6d3d1', // stone-300
        background: '#fafaf9', // stone-50
        surface: '#ffffff',
      }
    },
  },
  plugins: [],
}
