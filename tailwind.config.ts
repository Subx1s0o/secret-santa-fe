import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
       
      },
      spaces:{},
      fontSize: {},
     
    },
  },
  plugins: [],
} satisfies Config

