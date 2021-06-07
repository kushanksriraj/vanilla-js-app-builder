const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const webpackConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});

module.exports = webpackConfig;
