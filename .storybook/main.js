module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-essentials"],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};