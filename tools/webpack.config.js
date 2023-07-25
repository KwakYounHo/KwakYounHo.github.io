const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
    path: path.join(__dirname, '..'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.css$/],
        use: ['style-loader', 'css-loader']
      },
      {
        test: [/\.ts$/, /\.tsx/],
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HWP({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
}