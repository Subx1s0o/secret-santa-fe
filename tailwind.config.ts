import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
       
      },
    },
  },
  plugins: [],
};
export default config;
