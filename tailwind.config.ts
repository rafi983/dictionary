import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark1: 'var(--color-dark1)',
        dark2: 'var(--color-dark2)',
        dark3: 'var(--color-dark3)',
        dark4: 'var(--color-dark4)',
        gray1: 'var(--color-gray1)',
        gray2: 'var(--color-gray2)',
        gray3: 'var(--color-gray3)',
        cpurple: 'var(--color-purple)',
        cred: 'var(--color-red)',
        cwhite: 'var(--color-white)'
      },
      fontFamily: {
        inherit: 'inherit',
        inter: ['inter', 'sans-serif'],
        lora: ['lora', 'serif'],
        inconsolata: ['inconsolata', 'monospace']
      },
      maxWidth: {
        size: '46.063rem'
      }
    },
  },
  plugins: [],
};
export default config;
