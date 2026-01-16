/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
       fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        montserrat: ['"Montserrat-Light"', "sans-serif"],
        montserratMedium: ['"Montserrat-Medium"', "sans-serif"],
      },

      colors: {
        'background': '#f3eeea',
        'title': '#587d8d',
        'texto': '#262e54',
        'lunamiel': 'c7dae6',
        'asistencia': '#587d8d',
      },

    },
  },
  plugins: [],
}

