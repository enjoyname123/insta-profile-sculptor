import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        igtext: "#262626",
        iglink: "#00376B",
        igbutton: "#0095F6",
        iggray: "#8E8E8E",
        igbg: "#FAFAFA",
        igborder: "#DBDBDB",
        igseparator: "#EFEFEF",
      },
      fontFamily: {
        instagram: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        "skeleton-loading": {
          "0%": { backgroundColor: "#F0F0F0" },
          "100%": { backgroundColor: "#E0E0E0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        skeleton: "skeleton-loading 1s linear infinite alternate",
        "fade-in": "fade-in 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;