/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary: '#3B65FF',
        secondary: '#C7D0DB',
      }
    },
  },
  plugins: [
  ],
}

