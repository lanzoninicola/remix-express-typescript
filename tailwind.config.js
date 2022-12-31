/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "limber-purple": {
        50: "#E2E0EB",
        100: "#C4C2D6",
        200: "#A7A3C2",
        300: "#8A84AE",
        500: "#5D275F",
        700: "#1F1D2C",
      },
      "limber-orange": {
        50: "#FBD6C6",
        500: "#E5520F",
      },
      "limber-gray": {
        500: "#EBEBEB",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      titles: ["Inter", "serif"],
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
