/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const AutoImport = require('unplugin-auto-import/vite')
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? []
    config.plugins.push(AutoImport({ imports: ['vue'], dts: '.nuxt/auto-imports.d.ts' }))
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window',
      },
    }
  },
}
export default config
