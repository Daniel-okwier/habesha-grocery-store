/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        habeshaGreen: "#1F7A4D",
        habeshaGold: "#C9A14A",
        habeshaRed: "#A8342D",
        habeshaDark: "#0F1F17",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
