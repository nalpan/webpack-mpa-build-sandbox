const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
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
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'src/page1'),
      },
      {
        directory: path.join(__dirname, 'src/page2'),
      },
    ],
    open: true,
    compress: true,
    port: 8000,
    hot: 'only',
  },
}