/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xlheight: { raw: '(min-height: 1234px)' },
      },
      fontFamily: {
        primary: 'Cinzel, sans serif',
        secondary: 'Work Sans, sans serif',
        philosopher: 'Philosopher, sans-serif',
      },
      colors: {
        primary: '#FFD1A4',
        primarydark: '#C06936',
        secondary: '#FFD1A4',
        darker: '#22201E',
        dark: '#191919',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        flip: {
          from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
          to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
