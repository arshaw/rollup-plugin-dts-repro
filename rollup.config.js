const dts = require('rollup-plugin-dts').default

module.exports = {
  input: './src/main.d.ts',
  output: {
    format: 'es',
    file: './out/combined.d.ts'
  },
  plugins: [
    dts()
  ]
}
