module.exports = {
  mode: 'jit',
  purge: ['./*html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6326',
        secondary: {
          100: '#E2E2D5',
          200: '888883',
        }
      },
      fontFamily: {
        body: ['Urbanist'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

