const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
