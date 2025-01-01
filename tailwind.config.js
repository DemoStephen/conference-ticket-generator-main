/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "desktop-bg": "url(/src/assets/images/background-desktop.png)",
      "tablet-bg": "url(/src/assets/images/background-tablet.png)",
      "mobile-bg": "url(/src/assets/images/background-mobile.png)",
      "pattern-line": "url(/src/assets/images/pattern-lines.svg)",
      "pattern-circle": "url(/src/assets/images/pattern-circle.svg)",
      "pattern-squiggly-line-bottom":
        "url(/src/assets/images/pattern-squiggly-line-bottom.svg)",
      "pattern-squiggly-line-top":
        "url(/src/assets/images/pattern-squiggly-line-top.svg)",
    },
  },
  plugins: [],
};
