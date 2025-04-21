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
        // Add Tibetan colors
        tibetan: {
          maroon: '#8B0000',
          gold: '#FFD700',
          brown: '#8B4513',
        },
        // Update KeyGuardian colors based on design doc
        keyguardian: {
          'dark-navy': '#1A2C34',
          'teal': '#2A3F4A',
          'vibrant-blue': '#007BFF',
          'light-text': '#FFFFFF',
          'gray-text': '#B0B0B0',
          'key-bg': '#1C2526',
        },
        // Add Story Automation colors
        storyAutomation: {
          'purple-dark': '#4F0A59',
          'purple-light': '#7A2F9A',
          'text-light': '#FFFFFF', // Assuming white text
          'text-muted': '#E0E0E0'  // Assuming a slightly dimmer text for less emphasis
        },
        // Add Recipe Scraper colors
        recipeScraper: {
          'bg-light': '#F8F9FA',
          'card-bg': '#FFFFFF',
          'primary-green': '#28A745',
          'light-green': '#DCEDC8', // Using a lighter green for tags/accents
          'text-dark': '#212529',
          'text-muted': '#6C757D',
          'border-light': '#DEE2E6',
        },
      },
      fontFamily: { // Ensure sans and mono are present
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['Crimson Pro', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        tibetan: ['Noto Sans Tibetan', 'sans-serif'], // Fallback to sans-serif
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'], // Add Monospace
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
