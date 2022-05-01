const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Overpass', ...fontFamily.sans],
      },
      fontSize: {
        sm: ['0.875rem', '1.4rem'],
        md: ['0.9375rem', '1.5rem'],
        '3xl': ['1.75rem', '2.25rem'],
      },
      backgroundImage: {
        'black-gradient':
          'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);',
      },
      borderRadius: {
        '4xl': '1.875rem',
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
