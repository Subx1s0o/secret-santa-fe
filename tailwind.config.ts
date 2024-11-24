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
       blue: "#0080FF",
       turquoise: "#93CBDF",
       red: "#FF0055",
       grey: "rgba(0, 0, 0, 0.88)"
      },
      spaces: {
        9: "36px"
      },
      boxShadow: {
        super: "0px 0px 50px 20px"
      },
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

