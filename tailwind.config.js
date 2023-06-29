/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        black: '#151515',
        'black-light': '#232323',
        gray: '#1C1C1C',
        'gray-light': '#cecece',
        'gray-dark': '#262626',
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
        'base-on-light': '#FCFCFC',
        'base-on-dark': '#FEFEFE',
        'faint-on-light': '#151515',
        'faint-on-dark': '#E2DFD3',
        'accent-on-light': '#FFD014',
        'accent-on-dark': '#D7B21F',
        'critic-on-light': '#FF4314',
        'critic-on-dark': '#D13E19',
        'warning-on-light': '#FFDC14',
        'warning-on-dark': '#D8BC20',
        'success-on-light': '#14FF18',
        'success-on-dark': '#1CD41F',
      },
      fontFamily: {
        // secondary: ['Inter', 'sans-serif'],
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
      mixin: {
        'center-block': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
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
