const { colors } = require("./src/styles/variables");

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue}'],
  theme: {
    extend: {
      colors: colors,
    }
  },
}