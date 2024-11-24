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
      backgroundImage: {
        santa: "url('/santa.avif')",
      },
    },
  },
  plugins: [],
} satisfies Config

