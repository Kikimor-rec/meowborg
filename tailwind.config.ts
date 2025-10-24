import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'meow-yellow': '#FFDD00',
        'meow-red': '#FF0000',
        'meow-black': '#000000',
        'meow-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-heading)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
