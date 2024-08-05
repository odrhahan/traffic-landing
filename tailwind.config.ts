import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      spacing: {
        1.5: "6px",
        12.5: "50px",
        13.5: "54px",
        15: "60px",
        25: "100px",
        32.5: "130px",
        62: "248px",
        184: "736px",
        222.5: "890px",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "gray-1": "rgb(var(--color-gray-1) / <alpha-value>)",
        "gray-2": "rgb(var(--color-gray-2) / <alpha-value>)",
        "gray-black": "rgb(var(--color-gray-black) / <alpha-value>)",
      },
      fontSize: {
        "3.25xl": ["32px", { lineHeight: "36px" }],
        "5.5xl": ["52px", { lineHeight: "80px" }],
      },
      lineHeight: {
        5.5: "22px",
      },
      boxShadow: {
        box: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
