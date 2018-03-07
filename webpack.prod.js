/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/* eslint-enable */

module.exports = merge(common, {
  devtool: 'source-map',
});
