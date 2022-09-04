/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'aqua' : '#2BE2A0'
        
      },
      fontFamily : {
        'handsofsean' : 'hands-of-sean',
        'konnect' : 'konnect',
        'nunito' : 'nunito'
      }
    },
  },
  plugins: [],
}
