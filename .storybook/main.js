/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // {
    //   name: '@storybook/addon-styling',
    //   options: {
    //     sass: {
    //       implementation: require('sass'),
    //     },
    //   },
    // },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: { disableTelemetry: true, },
  docs: {
    autodocs: "tag",
  },
};
export default config;
