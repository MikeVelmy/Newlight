import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#475569",
          dark: "#334155",
        },
        secondary: "#06b6d4",
        accent: "#475569",
        ink: "#0f172a",
        surface: "#f8fafc",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
