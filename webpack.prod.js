const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const webpackConfig = merge(common, {
  mode: "production",
});

module.exports = webpackConfig;
