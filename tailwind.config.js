/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  separator: '_',
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
        "bg-card": "#3D2942",
        "cardcolor": "#BDAAC1",
        "card-color-second": "#C6BFC8",
        "card-btn-bg": "rgba(233, 215, 167, 0.1)"
      },
      gridTemplateColumns: {
        "layout": "repeat(auto-fit, minmax(200px, 1fr))"
      },
      fontFamily: {
        'main': ['Work Sans', 'sans-serif'],
        'title': 'Oxanium'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg.png')"
      }
    },
  },
  plugins: [],
}

