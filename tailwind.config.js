/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dancing: ["'Dancing Script'", "'"],
      },
      colors: {
        pinkLight: "#FF90BC",
        pinkLighter: "#FFC0D9",
        cream: "#F9F9E0",
        blueLight: "#8ACDD7",
      },
    },
  },
  plugins: [],
};
