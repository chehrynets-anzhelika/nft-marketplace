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
        "btn-color": "#16091B",
        "bg-btn": "#594846",
        "blur": "#4F464E59",
        "linkcolor": "#594D5E",
      },
      gridTemplateColumns: {
        "layout": "repeat(auto-fit, minmax(200px, 1fr))"
      },
      fontFamily: {
        'main': ['Work Sans', 'sans-serif'],
        'title': 'Oxanium'
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/bg.png')"
      }
    },
  },
  plugins: [],
}

