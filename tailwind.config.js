/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      full: "100%",
      16: "4rem",
    },

    extend: {
      colors: {
        "fuzzy-wuzzy-brown": {
          50: "#fcf5f4",
          100: "#fae8e6",
          200: "#f6d5d2",
          300: "#efb7b2",
          400: "#e48d85",
          500: "#d6675d",
          600: "#c4544a",
          700: "#a23c33",
          800: "#86352e",
          900: "#70322c",
          950: "#3c1613",
        },
        heliotrope: {
          50: "#fcf4ff",
          100: "#f8e7ff",
          200: "#f1cfff",
          300: "#e9a9fe",
          400: "#dd76fc",
          500: "#cc48f4",
          600: "#b121d8",
          700: "#9518b3",
          800: "#7c1692",
          900: "#681877",
          950: "#440250",
        },
        "mine-shaft": {
          50: "#f7f6f6",
          100: "#e4e3e3",
          200: "#c9c6c6",
          300: "#a7a1a2",
          400: "#847d7e",
          500: "#696364",
          600: "#534e4e",
          700: "#454041",
          800: "#393636",
          900: "#322f30",
          950: "#1a1919",
        },
      },
    },
  },
  plugins: [],
};
