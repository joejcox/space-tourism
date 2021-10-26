const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      orange: colors.orange,
      red: colors.red,
      amber: colors.amber,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      rose: colors.rose,
      yellow: colors.amber,
      dark: "hsl(230, 35%, 7%)",
      highlight: "hsl(231, 77%, 90%)",
      grey: "hsl(0, 0%, 59%);",
    },
    fontFamily: {
      "is-serif": ["Bellefair", "serif"],
      "is-sans-serif": ["Barlow Condensed", "sans-serif"],
    },
    fontSize: {
      "is-1": "150px",
      "is-2": "100px",
      "is-3": "56px",
      "is-4": "32px",
      "is-5": "28px",
      "is-6": "20px",
      "is-7": "16px",
      "is-8": "14px",
    },
    letterSpacing: {
      "ls-1": "4.75px",
      "ls-2": "2.7px",
      "ls-3": "2.35px",
      "ls-4": "1.5px",
      "ls-5": "0.5px",
    },
    extend: {
      backgroundImage: {
        "hero-desktop":
          "url('../../src/assets/home/background-home-desktop.jpg')",
        "hero-destination-desktop":
          "url('../../src/assets/destination/background-destination-desktop.jpg')",
        "hero-crew-desktop":
          "url('../../src/assets/crew/background-crew-desktop.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
