/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      keyframes: {
        loaderAnimate: {
          "0%, 100%": { transfrom: "translateX(-80px)" },
          "50%": { transform: "translateX(80px)" },
        },
      },
    },
  },
  plugins: [],
};
