/** @type {import('tailwindcss').Config} */

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,css}"], // Scan all relevant files in the `app` directory
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1a202c", // Example custom color
      },
    },
  },
  plugins: [],
};
