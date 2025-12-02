/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source-codes/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter-m" : "inter-m",
        "inter-r" : "inter-r",
        "inter-sb" : "inter-sb",
        "inter-l" : "inter-l",
        "inter-xl" : "inter-xl",
        "inter-t" : "inter-t"
      }
    },
  },
  plugins: [],
}

