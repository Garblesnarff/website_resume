/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dbeafe',
          200: '#bcd9fe',
          300: '#90befd',
          400: '#5e99fb',
          500: '#3b76f6',
          600: '#2558ea',
          700: '#1e45d3',
          800: '#1e3cac',
          900: '#1e3786',
        },
        secondary: {
          50: '#eefafc',
          100: '#d3f2f7',
          200: '#aee5f0',
          300: '#79d2e6',
          400: '#41b8d5',
          500: '#2299b8',
          600: '#1d7c9b',
          700: '#1c647f',
          800: '#1d5269',
          900: '#1a4559',
        },
        accent: {
          50: '#fef2f4',
          100: '#fde6eb',
          200: '#fbd0da',
          300: '#f7adbe',
          400: '#f27a97',
          500: '#e63f6b',
          600: '#cf2455',
          700: '#ad1a48',
          800: '#911941',
          900: '#7c1a3c',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.5',
          },
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};