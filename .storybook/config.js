import { configure } from "@storybook/html";

configure(
  [
    require.context("../stories", true, /\.stories\.(js|mdx)$/),
    require.context("../styles", true, /\.stories\.(js|mdx)$/),
    require.context("../templates", true, /\.stories\.(js|mdx)$/)
  ],
  module
);
