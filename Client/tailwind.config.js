/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whiteMode: "#FFFFFF",
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
