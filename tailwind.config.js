// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
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
      keyframes: {
        circle: {
          "0%": { transform: "scale(1)" },
          "100%": {
            transform: "scale(10)",
            display: "none",
            opacity: "0",
            visibility: "hidden",
          },
        },
      },
      animation: {
        circle: "circle 1s ease-in-out forwards",
      },
      colors: {
        primary: "#1ab030",
        secondary: "#0c0e11",
        grey: "#07080a",
        greyLight: "#f6f7f9",
        greyLighter: "#6C6C6C",
        greyDark: "#07080a",
        brand: "#1ab030",
        brandDark: "#159a28",
        gold: "#c4a574",
        ink: "var(--landing-ink)",
        panel: "var(--landing-panel)",
        fg: "var(--landing-fg)",
        muted: "var(--landing-muted)",
        line: "var(--landing-line)",
        glass: "var(--landing-glass)",
        nav: "var(--landing-nav)",
        mute: "var(--landing-muted)",
        hair: "var(--landing-line)",
        paper: "var(--landing-ink)",
        accent: "#1ab030",
        field: "var(--landing-panel)",
        fieldInk: "var(--landing-fg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
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
