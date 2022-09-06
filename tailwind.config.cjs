const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainBgColor: "#EFF9F6",
        greyColor: "#A5C9BB",
        textColor: "#B1B1B1",
        primary: "#0FC185",
        secondary: "#CDF9E8",
        terciary: "#1EAB7B",
        fourty: "#B3F0A5",
        fifty: "#FF8FA8",
        sixty: "#86BBEF",
        seventy: "#D49A72"
      },
      textColor: {
        mainBgColor: "#EFF9F6",
        greyColor: "#A5C9BB",
        textColor: "#B1B1B1",
        primary: "#0FC185",
        secondary: "#CDF9E8",
        terciary: "#1EAB7B",
        fourty: "#B3F0A5",
        fifty: "#FF8FA8",
        sixty: "#86BBEF",
        seventy: "#D49A72"
      },
      colors: {
        mainBgColor: "#EFF9F6",
        greyColor: "#A5C9BB",
        textColor: "#B1B1B1",
        primary: "#0FC185",
        secondary: "#CDF9E8",
        terciary: "#1EAB7B",
        fourty: "#B3F0A5",
        fifty: "#FF8FA8",
        sixty: "#86BBEF",
        seventy: "#D49A72"
      },
      screens: {
        '4xl': '1800px',
      },
      backgroundImage: {
        WaveHome: "url('../src/assets/svg/WaveHome.svg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
});