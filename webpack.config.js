const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const webpack = require("webpack");
const NpmInstallPlugin = require("npm-install-webpack2-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "output.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss", ".css", ".jpeg", ".jpg", ".gif", ".png"],
    alias: {
      config: path.resolve(__dirname, "config", "config.js"),
      commons: path.resolve(__dirname, "src/components/commons"),
      images: path.resolve(__dirname, "src/assets/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            { loader: "postcss-loader" },
            { loader: "sass-loader", options: { importLoaders: 1 } },
          ],
        }),
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          "file-loader?context=src/assets/images/&name=images/[path][name].[ext]", {
            loader: "image-webpack-loader",
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
                quality: "75-90",
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
        loader: "file-loader?limit=1024&name=fonts/[name].[ext]",
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({ title: "PackIt", template: "src/main.ejs", lang: "fr" }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "defer" }),
    new StyleLintPlugin(),
    new NpmInstallPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  devtool: "eval-source-map",
};

module.exports = config;

if (process.env.DB_HOST === "production") {
  module.exports.plugins.push([
    new UglifyJsPlugin(),
  ]);
}
