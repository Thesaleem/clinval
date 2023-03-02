/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'off-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
