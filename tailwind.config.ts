import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#1E3765',
        "cyan-500": '#6FC7EA',
        "secondary": '#2D2D2D',
      }
    },
  },
  plugins: [],
};
export default config;
