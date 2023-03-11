module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-webpack5"
  },
  docs: {
    docsPage: "automatic"
  }
};