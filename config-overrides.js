/**
 * /* config-overrides.js
 *
 * @format
 */

const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.md?$/,
    use: [
      {
        loader: "html-loader",
      },
      {
        loader: "markdown-loader",
      },
    ],
  })
);
