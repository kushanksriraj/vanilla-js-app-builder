const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "vanillaJS App",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },

  mode: "production",
};

module.exports = webpackConfig;
