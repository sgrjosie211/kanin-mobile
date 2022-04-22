const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.join(__dirname, 'build'), filename: 'index.js' },
  mode: 'development',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: path.join(__dirname, 'src'),
    port: 8000,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://api.philippines-test.loandm.net',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        // Compile all node_modules except core-js
        exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/, /@babel\/runtime-corejs3/],
        // exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `Caja`,
      template: path.join(__dirname, 'index.html'),
    }),
  ],
}
