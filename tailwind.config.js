/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coastal: {
          50: '#f4f7f9',
          100: '#e5edf2',
          200: '#cedee7',
          300: '#a6c6d5',
          400: '#75a6be',
          500: '#5389a6',
          600: '#41708b',
          700: '#365a71',
          800: '#304c5e',
          900: '#1b2a34',
          950: '#0f171d',
        },
        sand: {
          50: '#faf9f6',
          100: '#f5f3ec',
          200: '#ece7db',
          300: '#ded5c1',
          400: '#cbbea1',
          500: '#b7a584',
          600: '#a38f6f',
          700: '#837158',
          800: '#6c5d4a',
          900: '#594d3f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
