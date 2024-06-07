/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        utendo: ['"Utendo"', "sans-serif"],
        sofia: ['"Sofia Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
