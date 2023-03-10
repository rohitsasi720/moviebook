module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
    },
  },
  plugins: [],
};