/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        move:{
          "0%":{
            transform:"translateX(-450px)"
          },
          "100%":{
            transform:"translateX(20px)"
          }
        }
      },
      animation:{
        move:"move 2s linear "
      }
    },
  },
  plugins: [],
}
