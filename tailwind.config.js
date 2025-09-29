/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'Arial Black', 'sans-serif'],
        'museos500': ['Museo Sans', 'Arial', 'sans-serif'],
        'museos700': ['Museo Sans', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'museos500': '500',
        'museos700': '700',
      }
    },
  },
  plugins: [],
}