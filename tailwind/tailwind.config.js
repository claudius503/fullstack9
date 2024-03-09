/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'pink':'#fcd7df',
      'mint': '#c9f3e2',
      'l-yellow':'#f2d5ba',
      'bermuda': '#78dcca',
      primary: 'var(--primary-color)',
      'primary-yellow': 'var(--primary-yellow)',
      'primary-gray': 'var(--primary-gray)',
      'primary-light-ble': 'var(--primary-light-blue)',
    },
    fontFamily: {
      kids: ['Kids','Roboto','Helvetica Neue','Helvetica','Arial','sans-serif'],
      roboto: ['Roboto','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

