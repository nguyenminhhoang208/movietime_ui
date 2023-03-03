/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#FEA200",
      },
      screens: {
        xxl: "1345px",
      },
      keyframes: {
        zoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.15)" },
        },
      },
      animation: {
        zoom_image: "zoom 0.3s linear forwards",
      },
    },
   

   
  },
  plugins: [require("tailwind-scrollbar-hide", "tailwind-scrollbar")],
};
