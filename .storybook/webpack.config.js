const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  /**
   * Enables the StorySource plugin to allow the developer
   * to see what the story looks like in the addons panel
   */
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });

  /**
   * Enables raw HTML templates to be
   * imported into the story and then
   * subsequently developed in isolation
   */
  config.module.rules.push({
    test: /\.(html)$/,
    use: {
      loader: "html-loader"
    }
  });

  // Return the altered config
  return config;
};
