/* eslint-disable */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
/* eslint-enable */

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
});
