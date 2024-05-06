import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chow: "#4CAD73",
        gray: {
          custom: "#BDBDBD",
          dark: "#333333",
          light: "#F2F2F2",
        },
      },
      backgroundColor: {
        chow: "#4CAD73",
        grey: "#BDBDBD",
        greyLight: "#F2F2F2",
      },
      maxWidth: {
        mobile: "414px",
      },
    },
  },
  plugins: [],
};

export default config;
