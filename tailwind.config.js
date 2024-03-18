/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: '#ffdab0',
        Lightsalmon: '#fffaef'
      },
    },
  },
  plugins: [],
}