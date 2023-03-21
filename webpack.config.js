var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    // to create a bundle
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devServer: {
    // for live reloading
    static: "./dist",
  },
  devtool: "inline-source-map", // to show the error of exact location
  plugins: [
    // for managing the html
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    // output configurations
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // will generate new build every time
    publicPath: "/", // for server
  },
  optimization: {
    runtimeChunk: "single",
  },
};
