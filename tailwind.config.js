/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundImage: {
        "light-mode":
          "linear-gradient(to right, rgba(4, 0, 17, 1), rgba(0, 0, 17, 1), rgba(4, 0, 17, 1))",
        "dark-mode":
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      },
    },
  },
  plugins: [],
};
