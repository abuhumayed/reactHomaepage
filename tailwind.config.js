/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal': '#61DAFB',
        'dark-blue': '#21222A',
        'dark-blue-2': '#282D35',
      },

    },
  },
  plugins: [],
}