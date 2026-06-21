import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fffaf0',
        foreground: '#1f1308',
        border: '#ead9bd',
        primary: {
          DEFAULT: '#c41e3a',
          foreground: '#fffaf0',

          50: '#e6f5f0',
          100: '#b3e0d3',
          200: '#80ccb6',
          300: '#4db799',
          400: '#26a882',
          500: '#008060',
          600: '#007356',
          700: '#006249',
          800: '#00523d',
          900: '#003d2e',
          950: '#001f17',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fbc8c8',
          300: '#f8a0a0',
          400: '#f06b6b',
          500: '#c81e32',
          600: '#b41a2d',
          700: '#961425',
          800: '#7c1222',
          900: '#691222',
          950: '#3b050e',
        },
        accent: {
          50: '#fdfaeb',
          100: '#f9f0c7',
          200: '#f3de8a',
          300: '#edc84e',
          400: '#e6b42a',
          500: '#d4a03c',
          600: '#b8831c',
          700: '#956218',
          800: '#7a4e1b',
          900: '#67401c',
          950: '#3c220b',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#3a3a3a',
          900: '#2a2a2a',
          950: '#121212',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
