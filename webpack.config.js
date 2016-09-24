const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const myArgs = process.argv.slice(2);
const isHot = myArgs.indexOf('--hot') !== -1;
const additionalPlugins = isHot ? ['react-hmre'] : [];

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js/'),
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'].concat(additionalPlugins),
        },
      },
    ],
  },
};
