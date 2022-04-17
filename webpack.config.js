const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    page1: './src/page1/index.js',
    page2: './src/page2/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'page1.html',
      chunks: ['page1'],
      template: 'src/page1/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      chunks: ['page2'],
      template: 'src/page2/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
}