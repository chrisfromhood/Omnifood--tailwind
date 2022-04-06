module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'hero-picture': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../img/hero.jpg)",
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
        // Simple 16 column grid
        'fr-55-45': '55fr 45fr',
      }
    },


    plugins: [],
  }
}
