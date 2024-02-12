import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      "460px": { max: "460px" },
      "580px": { max: "580px" },
      "1362px": { max: "1362px" },
    },
    extend: {
      boxShadow: {
        primary: "0px 0px 12px 0px rgba(91, 101, 204, 0.36)",
      },
      fontFamily: {
        iransansx: ["var(--font-iran-sans-x)"],
        inter: ["var(--font-inter)"],
        peyda: ["var(--font-peyda)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-primary": "#14151F",
        "blue-secondary": "#5B65CC",
        "red-primary": "#FF0000",
        "green-primary": "#008000",
        "gray-primary": "#757575",
        "gray-secondary": "#EFF2F7",
        "orange-primary": "#EB9F5D",
      },
    },
  },
  plugins: [],
};
export default config;
