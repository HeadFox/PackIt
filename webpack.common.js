/* eslint-disable */
const path = require('path');
// const webpack = require("webpack")
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

const config = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'output.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      layouts: path.resolve(__dirname, 'src/components/layouts'),
      commons: path.resolve(__dirname, 'src/components/commons'),
      images: path.resolve(__dirname, 'src/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }, 'eslint-loader'],
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifcircle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
        exclude: /node_modules/,
        include: __dirname,
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader?limit=1024&name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'PackIt', template: 'src/main.ejs', lang: 'fr' }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  devtool: 'source-map',
};

module.exports = config;
