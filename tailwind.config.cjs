/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
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
    plugins: [require('flowbite/plugin')],
  }
  