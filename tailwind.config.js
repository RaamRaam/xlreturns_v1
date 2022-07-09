module.exports = {
  mode:"jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logo_blue:{
          light:"#2C60BE"
        },
        fontFamily: {
          montserrat: ["Montserrat"]
        },
      }
    },
  },
  plugins: [],
}