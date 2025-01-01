/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      mobile:
        "url('/src/assets/images/pattern-lines.svg'), url('/src/assets/images/pattern-squiggly-line-top.svg'), url('/src/assets/images/pattern-circle.svg'), url('/src/assets/images/pattern-squiggly-line-bottom.svg'), url('/src/assets/images/background-mobile.png')",
      tablet:
        "url('/src/assets/images/pattern-lines.svg'), url('/src/assets/images/pattern-squiggly-line-top.svg'), url('/src/assets/images/pattern-circle.svg'), url('/src/assets/images/pattern-squiggly-line-bottom.svg'), url('/src/assets/images/background-tablet.png')",
      desktop:
        "url('/src/assets/images/pattern-lines.svg'), url('/src/assets/images/pattern-squiggly-line-top.svg'), url('/src/assets/images/pattern-circle.svg'), url('/src/assets/images/pattern-squiggly-line-bottom.svg'), url('/src/assets/images/background-desktop.png')",
    },
    backgroundPosition: {
      "position": "top, top right, center, bottom left, center",
    },
  },
  plugins: [],
};
