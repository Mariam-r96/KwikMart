/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.sky,
        ternary: colors.yellow,
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}