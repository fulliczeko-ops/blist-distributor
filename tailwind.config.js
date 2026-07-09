/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#191b1d',
          2: '#232629',
          3: '#2d3134',
        },
        ember: {
          DEFAULT: '#d9480f',
          bright: '#ff6a1f',
          dim: '#8a2f0c',
        },
        paper: '#faf9f7',
        stone: '#5b6167',
        ash: '#e6e4e0',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
