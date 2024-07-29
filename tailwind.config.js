/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{html,js,ts,jsx,tsx,vue}', './public/index.html'],
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu'],
      inter: ['Inter', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
