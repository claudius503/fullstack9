/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'var(--primary-color)',
      'primary-yellow': 'var(--primary-yellow)',
      'primary-gray': 'var(--primary-gray)',
      'primary-light-ble': 'var(--primary-light-blue)',
    },
    fontFamily: {
      kids: ['Kids','Roboto','Helvetica Neue','Helvetica','Arial','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

