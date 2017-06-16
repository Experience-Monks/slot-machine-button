const path = require('path');

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: './demo',
    overlay: true,
    watchContentBase: true,
  }
};
