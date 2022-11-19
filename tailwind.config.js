/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        fotterCyan: "rgb(144,212,197)",
        footerColor: "hsl(168, 34%, 41%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkSBlue: "hsl(167, 40%, 24%)",
        grey: "hsl(210, 4%, 67%)",
        darkGrey: "hsl(232, 10%, 55%)",
      },
    },
  },
  plugins: [],
};
