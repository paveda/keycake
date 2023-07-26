const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve('./src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/template.html'),
      filename: 'index.html',
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
    alias: {
      '~': path.resolve('./src'),
    }
  }
}