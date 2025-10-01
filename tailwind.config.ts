import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'cyan': {
          400: '#17B8FF',
          500: '#17B8FF',
        },
        'magenta': {
          400: '#FF4DD8',
          500: '#FF4DD8',
        },
        'orange': {
          400: '#FF8F3A',
          500: '#FF8F3A',
        },
        'dark-bg': '#0B0F14',
        'dark-secondary': '#121821',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
