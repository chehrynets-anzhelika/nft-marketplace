/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "src/html/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#1C121F",
        "text-main": "#F5FBF2",
        "text-secondary": "#FFCE4E",
        "footer-text": "#96839B",
      },
      fontFamily: {
        'main': ['Work Sans', 'sans-serif'],
        'title': ['Oxanium', 'sans-serif']
      }
    },
  },
  plugins: [],
}

