/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        backgrd:"#FAFAFA",
        main:'#FF5151',
        priSubtitle:'#686868',
        secSubtitle:'#686868',
        sectitle:'#303030',
        tertiary:'#161E54',
        tertiarytransparent:'#33161E54',
        grey1:'#B2B2B2',
        grey2:'#E0E0E0',
        grey3:'#F8F8F8',
        grey4:'#EFEFEF',
        grey5:'#F1F1F1',
        grey6:'#E8F0FB',
        lightOrange:'#FFEFE7',
        lightPinkish:'#FDEBF9',
        lightBlue:'#E8F0FB',
        pinkish:'#EE61CF',
        navyBlue:'#1B204A',
        skyBlue:'#3786F1',
        soil:'#3786F1',
      }
    },
  },
  plugins: [],
}
