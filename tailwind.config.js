/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors : {
        primaryColors: '#004294',
        bgColors: '#D9D9D9',
      }
    },
  },
  plugins: [],
}

