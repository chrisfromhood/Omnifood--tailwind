module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'form-linear': "linear-gradient(to right bottom, #eb984e, #e67e22)",
      'img-box': "linear-gradient( to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35) ), url(../img/eating.jpg);"
    },
    colors: {
      'primary': '#e67e22',
      'secondary': '#cf711f',
      'light': '#fdf2e9',
      'gray-one': '#888',
      'gray-two': '#6f6f6f',
      'gray': '#555',
      'dark': '#333',
      'white': '#fff',
      'brown': '#45260a',
      'green': '#51cf66',
      'green-one': '#94d82d',
      'yelow-one': '#ffd43b',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'shad': '0 0 0 8px rgba(230, 125, 34,  0.5)',
        'card-shad': '0 24px 48px rgba(0, 0, 0,  0.08)',
      },
      gridTemplateColumns: {
        // grid
        'fr-55-45': '55fr 45fr',
        'fr-2-1': '2fr 1fr',
        'fr-3-2': '3fr 2fr',
        'footer': '1.5fr 1.5fr 1fr 1fr 1fr',
      }
    },

    screens: {
      'xl': { 'max': '1344px' },
      // => @media (max-width: 1344px) { ... }

      'lg': { 'max': '1200px' },
      // => @media (max-width: 1200px) { ... }

      'md': { 'max': '944px' },
      // => @media (max-width: 944px) { ... }

      'tablet': { 'max': '850px' },
      // => @media (max-width: 850px) { ... }

      'ipad': { 'max': '704px' },
      // => @media (max-width: 704px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'mob': { 'max': '544px' },
      // => @media (max-width: 544px) { ... }
    }
  }
}
