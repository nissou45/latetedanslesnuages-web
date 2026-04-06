/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#f4efeb",
        "rose-poudre": "#eadfda",
        "rose-hover": "#e0d3cd",
        "gris-doux": "#6a6a6a",
        "gris-clair": "#7a7a7a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
