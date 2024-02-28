/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgCyan : 'hsl(180, 29%, 50%)',
        lightCyan: 'hsl(180, 52%, 96%)',
        filterCyan: 'hsl(180, 31%, 95%)', 
        darkCyan: 'hsl(180, 14%, 20%)',
      }
    },
  },
  plugins: [],
}

