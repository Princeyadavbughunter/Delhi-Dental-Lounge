import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#c4971b", // Updated to new brand Gold
        lightCream: "rgb(255, 247, 229)",
        yellow: "rgb(205, 159, 82)",
        brandBlue: "#1a1a1a", // Updated to light black for buttons
        brandGreen: "#c4971b", // Added alias for clarity
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
