import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },
      whitespace: {
        'pre-wrap': 'pre-wrap',
      },
      backgroundImage: {
        'melted-gradient': "linear-gradient(to bottom, transparent, #1A191D)",
      },
      colors: {
        primary: "#0AD3FF",
        secondary: "",
        background: "#1A191D",
        accent: "",
        error: "",
        success: "",
        warning: "",
        info: "",
        
      }
    },
  },
  plugins: [],
};
export default config;
