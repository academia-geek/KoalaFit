const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */


module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainBgColor: "#FCFCFC",
        greyColor: "#EEEEEE",
        primary: "#D93939",
        secondary: "#333333",
      },
      textColor: {
        mainBgColor: "#FCFCFC",
        greyColor: "#EEEEEE",
        primary: "#D93939",
        secondary: "#333333",
      },
      colors: {
        mainBgColor: "#FCFCFC",
        greyColor: "#EEEEEE",
        primary: "#D93939",
        secondary: "#333333",
      },
      backgroundImage: {
        loginWaves: "url('../src/assets/img/wave.svg')",
      },
    },
  },
  plugins: [],
});