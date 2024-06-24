/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BF0042',
        'textgray': '#686262',
        'footergray': '#D9D9D9',
        'primary-light': '#FCF2F6',
      }
    },
  },
  plugins: [],
}

