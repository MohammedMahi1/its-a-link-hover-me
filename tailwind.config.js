/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "paper": "var(--paper)",
        "tooltip": "var(--tooltip)",
      },
      fontFamily:{
        "DotGothic16":"DotGothic16"
      }
    },
  },
  plugins: [],
}

