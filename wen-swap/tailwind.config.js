/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        108: "27rem",
      },
      colors: {
        "primary-black": "#010002",
        "primary-gray": "#D0D0D1",
        "primary-green": "#439E43",
        "secondary-gray": "#393C3A",
        "secondary-black": "#000a02",
        "asset-detail-bg": "#1e1e1e",
        "secondary-green": "#327A32",
        "primary-blue": "#f57b14",
        "secondary-blue": "#f57b14",
        "orange":"#f57b14",
        "yellow":"#ffee01",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
};
