/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary': "#161A30",
        'secondary': "#31304D",
        'third': "#B6BBC4",
        "fourth": "#F0ECE5"
      }
    },
  },
  plugins: [],
}

