/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navyblue:"#2C3E50",
        ivory:"#c7c71c",
        green:"#C2E2CF",
        yellow:"#F2D78F",
      },
      backgroundColors:{
        navyblue:"#2C3E50",
        ivory:"#c7c71c",
        green:"#C2E2CF",
        yellow:"#F2D78F",
      },
    },
   
  },
  plugins: [],
}