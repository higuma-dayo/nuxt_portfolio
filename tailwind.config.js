/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["'Rajdhani', sans-serif"],
      },
      backgroundImage: {
        about: "url('/images/about.png')",
        history: "url('/images/history.png')",
        works: "url('/images/works.png')",
      },
    },
    colors: {
      primary: '#d8fa00',
      'primary-content': '#000000',
      'primary-dark': '#acc700',
      'primary-light': '#e3ff2e',

      secondary: '#00fa9f',
      'secondary-content': '#000000',
      'secondary-dark': '#00c77f',
      'secondary-light': '#2effb3',

      background: '#1a1a1a',
      foreground: '#262626',
      border: '#404040',

      copy: '#fbfbfb',
      'copy-light': '#d9d9d9',
      'copy-lighter': '#a6a6a6',

      success: '#00fa00',
      warning: '#fafa00',
      error: '#fa0000',

      'success-content': '#000000',
      'warning-content': '#000000',
      'error-content': '#fffafa',
    },
  },
  darkMode: 'class',
  plugins: [],
}
