function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    purgeConfig,
    presetEnvConfig,
    shouldImport,
    shouldPurge,
    shouldTimeTravel,
  } = options

  const postcssImport = require('postcss-import')()

  const tailwind = tailwindConfig
    ? require('tailwindcss')(tailwindConfig)
    : require('tailwindcss')

  const postcssPresetEnv = require('postcss-preset-env')(presetEnvConfig)

  const purgecss = require('@fullhuman/postcss-purgecss')(purgeConfig)

  api.chainWebpack(config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        shouldImport && options.plugins.push(postcssImport)

        options.plugins.push(tailwind)

        shouldTimeTravel && options.plugins.push(postcssPresetEnv)

        process.env.NODE_ENV === 'production' &&
          shouldPurge &&
          options.plugins.push(purgecss)

        return options
      })
  })
}

TailwindPlugin.defaultOptions = () => ({
  shouldPurge: true,
  shouldImport: true,
  shouldTimeTravel: true,
  tailwindConfig: undefined,
  presetEnvConfig: {
    stage: 0,
  },
  purgeConfig: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
    ],
    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
})

module.exports = TailwindPlugin
