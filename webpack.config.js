const path = require('path');
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist'
  }
}
