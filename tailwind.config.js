/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { san: ["Heebo", "sans-serif"] },
      colors: {
        red: {
          100: "#FF6464",
        },
        blue: { 10: "#EDF7FA" },
        gray: { 10: "#555555" },
        gray: { 20: "#333333" },
      },
    },
  },
  plugins: [],
};
