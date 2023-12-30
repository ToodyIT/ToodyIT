// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "600px",
      lg: "769px",
      vl: "1024px",
      xl: "1440px",
      notLg: { max: "768px" },
    },
    extend: {
      colors: {
        primary: "#139A20",
        secondary: "#2E2E2E",
        grey: "#141414",
        greyLight: "#9A9A9A",
      },
      fontFamily: {
        sans: ["var(--font-overpass)"],
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        ".flex-center": {
          "align-items": "center",
          "justify-content": "center",
        },
      });
      matchUtilities(
        {
          size: (value) => ({
            width: value,
            height: value,
          }),
        },
        { values: theme("width") }
      );
    }),
  ],
};
