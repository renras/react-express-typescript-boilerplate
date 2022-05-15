const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client", "./src/index.ts"],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
