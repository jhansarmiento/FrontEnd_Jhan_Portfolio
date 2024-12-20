/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '4vh': '4vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '83vh': '83vh',
        '96vh': '96vh',
        '46vw': '46vw',
        '5%': '5%',
        '90%': '90%',
        '60%': '60%',
        '1.5rem': '1.5rem'
        // Agrega más valores según sea necesario
      },
      colors: {
        'light-gray': {
          100: '#a3a3a3'
        }
      }
    },
  },
  plugins: [],
}

