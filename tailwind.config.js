/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        symbols: ["Material Symbols Outlined"],
      },
      fontSize: {
        xxs: "0.72rem",
        xxxs: "0.68rem",
      },
      colors: {
        /* General Colors */
        "theme-g": {
          DEFAULT: "var(--theme-g)",
          live: "var(--theme-g-live)",
        },
        /* Color Set 1 */
        "theme-cs1": {
          DEFAULT: "var(--theme-cs1)",
          10: "var(--theme-cs1-10)",
          11: "var(--theme-cs1-11)",
          12: "var(--theme-cs1-12)",
          15: "var(--theme-cs1-15)",
          16: "var(--theme-cs1-16)",
          20: "var(--theme-cs1-20)",
          30: "var(--theme-cs1-30)",
          35: "var(--theme-cs1-35)",
          40: "var(--theme-cs1-40)",
          50: "var(--theme-cs1-50)",
          60: "var(--theme-cs1-60)",
          70: "var(--theme-cs1-70)",
        },
        /* Color Set 2 */
        "theme-cs2": {
          DEFAULT: "var(--theme-cs2)",
          10: "var(--theme-cs2-10)",
        },
      },
      height: {
        navigation: "var(--navigation-bar-height)",
      },
      padding: {
        navigation: "var(--navigation-bar-height)",
      },
    },
  },
  plugins: [],
};
