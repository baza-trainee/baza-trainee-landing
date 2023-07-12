/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        yellow: {
          500: '#FFD210',
          600: '#FFBD00',
          700: '#FFB000',
          800: '#FD9B00',
        },
        neutral: {
          75: '#CECECE',
          100: '#B1B1B1',
          200: '#939393',
          300: '#767676',
          400: '#585858',
          500: '#464646',
          600: '#353535',
          700: '#232323',
          800: '#121212',
        },
        base: {
          light: '#FCFCFC',
          dark: '#FEFEFE',
        },
        faint: {
          light: '#151515',
          dark: '#E2DFD3',
        },
        accent: {
          light: '#FFD014',
          dark: '#D7B21F',
        },
        critic: {
          light: '#FF4314',
          dark: '#D13E19',
        },
        warning: {
          light: '#FFDC14',
          dark: '#D8BC20',
        },
        success: {
          light: '#14FF18',
          dark: '#1CD41F',
        },
        black: '#151515',
        blue: '#009aff',
        dark: '#262626',
      },
      fontFamily: {
        // secondary: ['var(--font-inter)'],
      },
      linearGradientColors: {
        black: [
          '33.27deg',
          'rgba(6, 6, 6, 0.95) 8.04%',
          'rgba(6, 6, 6, 0.4465) 104.18%',
        ],
        white: [
          '90deg',
          'rgba(255, 255, 255, 0.02) 0%',
          'rgba(252, 252, 252, 0) 40%',
          'rgba(252, 252, 252, 1) 40%',
          'rgba(252, 252, 252, 1) 50%',
          'rgba(252, 252, 252, 1) 60%',
          'rgba(252, 252, 252, 0) 60%',
          'rgba(255, 255, 255, 0.02) 100%',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
