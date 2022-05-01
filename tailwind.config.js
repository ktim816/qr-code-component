const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans],
      },
      fontSize: {
        md: ['0.9375rem', '1.1875rem'],
        xl: ['1.375rem', '1.75rem'],
      },
      borderRadius: {
        xl: '10px',
        '3xl': '20px',
        '4xl': '24px',
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
