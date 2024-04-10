import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: 'rgb(118, 140, 255)',
        customRed: 'rgb(255 0 0)'
      },
      boxShadow: {
        'inset-custom': 'inset 0 0 0 1px rgba(0,0,0,.06)',
      },
    },
  },
  plugins: [],
};
export default config;