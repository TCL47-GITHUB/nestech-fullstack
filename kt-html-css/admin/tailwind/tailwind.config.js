/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.ring-icon1-circle-fill': {
          animation: 'ring-icon1-circle-fill 1s ease-in-out infinite',
        },
      });
    },
  ],
}