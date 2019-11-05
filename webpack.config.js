const path = require('path');

const conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './assets/js/'),
    filename: 'index.js',
    publicPath: 'assets/js/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
};

module.exports = conf;
