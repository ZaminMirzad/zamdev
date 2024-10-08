/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluesh: "#55afff",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
