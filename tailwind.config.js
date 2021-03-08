// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgcolor: colors.warmGray,
        red: colors.green,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        info: colors.lightBlue,
        neutral: colors.gray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
