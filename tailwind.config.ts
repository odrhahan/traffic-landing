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
        "1.5xl": "1448px",
      },
      spacing: {
        1.5: "6px",
        4.5: "18px",
        12.5: "50px",
        13.5: "54px",
        15: "60px",
        25: "100px",
        32.5: "130px",
        35: "140px",
        62: "248px",
        184: "736px",
        222.5: "890px",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "gray-1": "rgb(var(--color-gray-1) / <alpha-value>)",
        "gray-2": "rgb(var(--color-gray-2) / <alpha-value>)",
        "gray-6": "rgb(var(--color-gray-6) / <alpha-value>)",
        "gray-black": "rgb(var(--color-gray-black) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "quarterary-500": "rgb(var(--color-quarterary-500) / <alpha-value>)",
      },
      fontSize: {
        "2.75xl": ["28px", { lineHeight: "36px" }],
        "3.25xl": ["32px", { lineHeight: "36px" }],
        "5.5xl": ["52px", { lineHeight: "80px" }],
      },
      lineHeight: {
        5.5: "22px",
      },
      boxShadow: {
        box: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        xs: "0px 1px 12px 0px rgb(var(--color-primary))",
        inset: "inset 0px -9px 21px -10px rgba(0,0,0,0.75)",
        "box-step": "0px 21.508px 43.016px -10.754px rgba(16, 24, 40, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
