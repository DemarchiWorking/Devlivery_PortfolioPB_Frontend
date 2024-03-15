module.exports = {
  darkMode: 'class', // Ativa o modo escuro com base na classe 'dark'
  content: [
    './src/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
