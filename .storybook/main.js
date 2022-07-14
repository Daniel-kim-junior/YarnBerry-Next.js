module.exports = {
  addons: ["@storybook/addon-jest", "storybook-addon-styled-component-theme/dist/preset"],
  framework: "@storybook/react",
  stories: ["../stories/**/*.stories.@(js|mdx)"],
};
