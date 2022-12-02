/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        borderDark: "#2F3336",
        borderLight: "#EFF3F4",
        shadowHoverDark: "#181818",
        shadowHoverLight: "#E6E7E7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "500px",
      sm: "768px",
      md: "900px",
      lg: "1100px",
      xl: "1400px",
    },
  },
  plugins: [],
};
