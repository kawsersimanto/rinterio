/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ABEF5F",
        "primary-light": "rgba(171, 239, 95, 0.20)",
        "primary-light-300": "rgba(171, 239, 95, 0.50)",
      },
      container: {
        center: true,
        padding: {
          md: "2rem",
          DEFAULT: "1.25rem",
        },
        screens: {
          DEFAULT: "1170px",
        },
      },
    },
  },
  plugins: [],
};
