/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Night shift" palette. Values live in src/index.css as CSS variables.
        night: {
          DEFAULT: 'rgb(var(--night) / <alpha-value>)',
          raised: 'rgb(var(--night-raised) / <alpha-value>)',
          line: 'rgb(var(--night-line) / <alpha-value>)',
        },
        birch: {
          DEFAULT: 'rgb(var(--birch) / <alpha-value>)',
          shade: 'rgb(var(--birch-shade) / <alpha-value>)',
          line: 'rgb(var(--birch-line) / <alpha-value>)',
        },
        ink: 'rgb(var(--ink) / <alpha-value>)',
        slate: 'rgb(var(--slate) / <alpha-value>)',
        fog: 'rgb(var(--fog) / <alpha-value>)',
        spruce: 'rgb(var(--spruce) / <alpha-value>)',
        sodium: {
          DEFAULT: 'rgb(var(--sodium) / <alpha-value>)',
          deep: 'rgb(var(--sodium-deep) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'sans-serif'],
        ui: ['"Big Shoulders Text"', '"Arial Narrow"', 'sans-serif'],
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        measure: '68ch',
      },
    },
  },
  plugins: [],
};
