module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 800: "#0055bd", A700: "#326de6" },
        white: { A700: "#ffffff" },
        gray: { 50: "#f9f9fa", 600: "#6e6e6e", "600_3d": "#6e6e6e3d" },
        blue_gray: { 50: "#efeff2", 700: "#505968" },
        black: { 900: "#000000", "900_26": "#00000026" },
        amber: { A400: "#ffc700" },
        teal: { 300: "#58a399" },
        red: { A700: "#ff0000" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
