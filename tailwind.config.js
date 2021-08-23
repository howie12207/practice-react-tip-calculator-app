module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          900: "#00494d",
          800: "#5e7a7d",
          700: "#7f9c9f",
          500: "#26c0ab",
          200: "#c5e4e7",
          100: "#f4fafa",
        },
      },
      letterSpacing: {
        "super-widest": ".5em",
      },
      lineHeight: {
        "3rem": "3rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
