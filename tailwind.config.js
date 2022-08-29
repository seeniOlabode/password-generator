const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "generator-yellow": "#F8CD65",
        "generator-orange": "#FB7C58",
        "generator-red": "#F64A4A",
        "generator-neon-green": "#A4FFAF",
        "generator-very-dark-grey": "#18171F",
        "generator-almost-white": "#E6E5EA",
        "generator-grey": "#817D92",
        "generator-dark-grey": "#24232C",
      },
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
