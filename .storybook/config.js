import { addParameters, configure } from "@storybook/html";
import { theme } from "./theme";

addParameters({
  options: {
    theme
  }
});

configure(
  [
    require.context("../styles", true, /\.stories\.(js|mdx)$/),
    require.context("../markup", true, /\.stories\.(js|mdx)$/)
  ],
  module
);
