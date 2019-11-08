import { addParameters, configure } from "@storybook/html";
import { theme } from "./theme";

addParameters({
  options: {
    theme
  }
});

configure([require.context("../src", true, /\.stories\.(js|mdx)$/)], module);
