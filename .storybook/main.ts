import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  staticDirs: ['../public'], // Directories that need to be rendered before
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    // Get our aliases @/*
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
