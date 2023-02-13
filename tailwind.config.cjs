/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat"
    },
    extend: {
      colors: {
        Teal: "#6096B4",
        HummingBird: "#C4DFAA",
        yellow: "#9e8b59",
        Solitude: "#BDCDD6",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1430px",
    },
  },
  plugins: [],
}