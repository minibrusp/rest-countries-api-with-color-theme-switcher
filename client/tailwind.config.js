/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Nunito-Sans": ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        "dark-blue": 'hsl(209, 23%, 22%)',
        "very-dark-blue-bg": 'hsl(207, 26%, 17%)',
        "very-dark-blue-txt": 'hsl(200, 15%, 8%)',
        "dark-gray-input": 'hsl(0, 0%, 52%)',
        "very-light-gray-bg": 'hsl(0, 0%, 98%)',
        "white-txt-elem": 'hsl(0, 0%, 100%)',
      },
      boxShadow: {
        "back-box": '0px 0px 10px 0px rgba(215,215,215,1)',
        "back-box-dark": '0px 0px 16px 0px rgba(26,39,48,1.000)',
      }
    },
  },
  plugins: [],
}

