import animatePlugin from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1600px', 
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1700px',  // The maximum 'screen-width'  ->  the last limitation on the container's width (max-width)
      }
    },
    extend: {
      colors: {
        primary: {
          500: '#EF4056',
          600: '#ED1944',
        },
        secondary: {
          500: '#19bfd3',
        },
        green: {
          500: '#029A49',
        },
        orange: {
          500: '#F67F17',
        },
        neutral: {
          500: '#f0f0f1',
        },
        'purple': '#B12BA4',
        'dark-1': '#000000',
  			'dark-2': '#09090A',
  			'dark-3': '#101012',
  			'dark-4': '#1F1F22',
  			'light-1': '#FFFFFF',
  			'light-2': '#EFEFEF',
  			'light-3': '#9b9ba3',
  			'light-4': '#5C5C7B',
        'text-1': '#000000',
        'text-2': '#3f4064',
        'text-3': '#858585',
        'border-1': '#e0e0e2',
      },

      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        yekan: ['var(--font-yekan)', 'Arial', 'sans-serif'],
        heydari: ['var(--font-heydari)', 'Arial', 'sans-serif'],
        geist: ['var(--font-geist)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': 'text-3xl'
      }
    },
  },
  corePlugins: {

  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({})
      addUtilities({});
    }),
    animatePlugin,
  ],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
