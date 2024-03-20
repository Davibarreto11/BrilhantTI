/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryGray": "#2B2D42",
        "primaryPurple": "#2E0249",
        "pimaryPink": "#702B9E",
        "primaryBlue": "#5591F5",
        "secondaryGray": "#2d2b42",
        "secondaryPurple": "#4E2C70",
        "secondaryPink": "#9C43F8",
        "tertiaryPurple": "#855DF7",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1439px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
  },
  plugins: [],
};

export default config;
