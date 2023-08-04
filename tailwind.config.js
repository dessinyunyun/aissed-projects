/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#FC6D1D",
        grey: "#E7E7E7",
        dark: "#0F0F0F",
      },
      fontFamily: {
        neuebit: ["var(--neue-bit)"],
        montreal: ["var(--neue-Montreal)"],
      },
      width: {
        "custom-lg": "26%", // Misalnya, lebar custom dengan nilai 20 rem
        "half-screen": "50vw", // Lebar setengah layar
      },
    },
  },
  plugins: [],
};
