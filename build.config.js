const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    library: 'SlotMachineButton',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  externals: {
    'react': 'react',
    'prop-types': 'prop-types',
    'gsap': 'gsap'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
