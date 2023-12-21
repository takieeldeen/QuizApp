/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "hsl(218, 26%, 32%)",
        midBlue: "hsl(216, 25%, 25%)",
        darkBlue: "hsl(213, 25%, 23%)",
        strongPurple: "hsl(277, 92%, 56%)",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
};
