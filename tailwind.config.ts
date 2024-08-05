import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: '60px',
        25: '100px',
        62: '248px'
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      }
    },
  },
  plugins: [],
};
export default config;
