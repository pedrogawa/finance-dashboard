/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#28262C',
        light: '#F9F5FF',
        opacity: 'rgb(250 250 250/1)'
      },
      textColor: {
        blue: '#4361EE',
        grey: "#888EA8", 
        black: "#0E1726"
      },
      borderColor: {
        grey: '#e5e7eb',
        blue: '#4361EE',
      },
    },
  },
  plugins: [],
}