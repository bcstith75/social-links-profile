/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

