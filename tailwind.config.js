/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    color:{
'primary': "#1476ff",
'secondory' : '#f3f5ff',
'light': '#f9ffaf'
    },
    extend: {},
  },
  plugins: [],
}

