/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'off-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'hero-neon': 'hsl(205, 100%, 96%)',
        'hero-blue': '#d8eeff',
        'pry-blue': '#151e66',
        'btn-blue': '#0e1681',
        'light-blue': '#4157ff',
        'shadow-blue': 'rgba(17, 103, 177, 0.07)',
        'subhead-blue': '#1167b1',
        'form-blue': '#f6fafd',
        'write': '#353535',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      boxShadow:{
        'custom': `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 
        0 -5px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)`
      },
    },
  },
  plugins: [],
}
