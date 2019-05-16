function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    purgeConfig,
    presentEnvConfig,
    shouldImport,
    shouldPurge,
    shouldTimeTravel,
  } = options

  api.chainWebpack(config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        shouldImport && options.plugins.push(require('postcss-import')())

        options.plugins.unshift(require('tailwindcss')(tailwindConfig))

        shouldTimeTravel &&
          options.plugins.push(require('postcss-preset-env')(presentEnvConfig))

        process.env.NODE_ENV === 'production' &&
          shouldPurge &&
          options.plugins.push(
            require('@fullhuman/postcss-purgecss')(purgeConfig),
          )

        return options
      })
  })
}

TailwindPlugin.defaultOptions = () => ({
  tailwindConfig: './tailwind.config.js',
  shouldPurge: true,
  shouldImport: true,
  shouldTimeTravel: true,
  presentEnvConfig: {
    stage: 0
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
