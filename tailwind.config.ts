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
        mainTextColor: "#27313F",
        secondTextColor: "#4D5662",
        mainBlueColor: "#0D9DDF",
        secondBlueColor: "#E7F6FE",
        thirdBlueColor: "#5F84B0",
        greenColor: "#4BBC5C",
        redColor: "#F64242",
        beigeColor:"#FCD6A3",
        mainBorderColor: "#E1E5EB"
      }
    }
  },
  plugins: [],
};
export default config;
