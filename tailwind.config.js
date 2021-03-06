const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          purpleLight: '#B088F9',
          pinkLight: '#DA9FF9',
          buttonLight: '#52057B', 
      },
      screens: {
        'tablet': '500px',
        'tablet-sm': '425px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
