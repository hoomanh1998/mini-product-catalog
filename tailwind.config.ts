import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        night: "var(--color-night)",
        yellow: "var(--color-yellow)",
        gray: "var(--color-gray)",
      },
    },
  },
  plugins: [],
};

export default config;
