/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 4s infinite',
      },
      keyframes: {
        gradient: {
          '70%': {
            transform: 'scale(1.2) translate(50px)',
          },
        },
      },
      backdropFilter: {
        'blur-lg': 'blur(80px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Make sure you have this plugin installed for backdrop-filter utility
  ],
};
