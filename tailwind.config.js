/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#fcfcfc',
        black: '#121212',
        'black-light': '#232323',
        accent: '#ffd210',
        'gray-light': '#cecece',
        gray: '#767676',
        completed: '#74be4f',
        'in-progress': '#ebcf3c',
        started: '#eb903c',
        neutral: '#353535',
        hover: '#ffbd00',
        pressed: '#fd9b00',
      },
      fontFamily: {
        // primary: ['Exo 2', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
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
