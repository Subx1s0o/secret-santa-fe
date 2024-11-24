import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
       black: "#4D4747",
       pink: "#E3A4E2",
       "light-blue": "#66B3FF",
       blue: "#0080FF"
      },
      spaces:{},
      fontSize: {
        xl: ["36px",{fontWeight: 700}],
        lg: ["24px", {lineHeight: "32px"}],
        md: ["18px", {lineHeight: "24px"}],
        sm: ["14px", {lineHeight: "14px"}]

      },
      backgroundImage: {
        santa: "url('/santa.avif')",
      },
    },
  },
  plugins: [],
} satisfies Config

