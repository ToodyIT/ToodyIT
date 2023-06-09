// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "600px",
        lg: "769px",
        vl: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "#139A20",
        secondary: "#8F56EB",
        "grey-800": "#1F2125",
        "neutral-900": "#141414",
      },
      fontFamily: {
        poppins: ["Poppins"],
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
