const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
      filename: '[name].[hash].bundle.js',
      chunkFilename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public', 'index.html'),
        filename: './index.html'
      }),
  ],
}