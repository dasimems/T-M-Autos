/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: {
          DEFAULT: "#110A4E",
          "100": "rgba(17,10,78,.1)",
          "200": "rgba(17,10,78,.2)",
          "300": "rgba(17,10,78,.3)",
          "400": "rgba(17,10,78,.4)",
          "500": "rgba(17,10,78,.5)",
          "600": "rgba(17,10,78,.6)",
          "700": "rgba(17,10,78,.7)",
          "800": "rgba(17,10,78,.8)",
          "900": "rgba(17,10,78,.9)"
        },
        secondary: {
          DEFAULT: "#C31F20",
          "100": "rgba(195,31,32,.1)",
          "200": "rgba(195,31,32,.2)",
          "300": "rgba(195,31,32,.3)",
          "400": "rgba(195,31,32,.4)",
          "500": "rgba(195,31,32,.5)",
          "600": "rgba(195,31,32,.6)",
          "700": "rgba(195,31,32,.7)",
          "800": "rgba(195,31,32,.8)",
          "900": "rgba(195,31,32,.9)",
        }
      }
    }
  },
  plugins: []
};
