/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 20s linear infinite",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      gridTemplateColumns: {
        menu: "auto repeat(2, minmax(0, 1fr))",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "0rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "6rem",
        },
      },
      colors: {
        "off-white": "#f8f8f8",
        footer: "#efefef",
        sage: "#628171",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        fancy: ["var(--font-family-classical-romance)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
