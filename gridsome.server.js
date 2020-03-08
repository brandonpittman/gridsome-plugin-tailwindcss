function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    purgeConfig,
    presetEnvConfig,
    shouldImport,
    shouldPurge,
    shouldTimeTravel
  } = options;

  const postcssImport = require('postcss-import')();

  const tailwind = tailwindConfig ?
    require('tailwindcss')(tailwindConfig) :
    require('tailwindcss');

  const postcssPresetEnv = require('postcss-preset-env')(presetEnvConfig);
  const purgecss = require('@fullhuman/postcss-purgecss')(purgeConfig);

  api.chainWebpack(config => {
    ['css', 'scss', 'sass', 'less', 'stylus', 'postcss'].forEach(lang => {
      config.module
        .rule(lang)
        .oneOf('normal')
        .use('postcss-loader')
        .tap(options => {

          if (shouldTimeTravel) options.plugins.unshift(postcssPresetEnv)

          options.plugins.unshift(tailwind)

          if (shouldImport) options.plugins.unshift(postcssImport)

          // eslint-disable-next-line no-unused-expressions
          process.env.NODE_ENV === 'production' &&
            shouldPurge &&
            options.plugins.push(purgecss);

          return options;
        });
    });
  });
}

TailwindPlugin.defaultOptions = () => ({
  shouldPurge: true,
  shouldImport: true,
  shouldTimeTravel: true,
  tailwindConfig: undefined,
  presetEnvConfig: {
    stage: 0,
    autoprefixer: false,
    features: {
      'focus-visible-pseudo-class': false,
      'focus-within-pseudo-class': false
    }
  },
  purgeConfig: {
    keyframes: true,
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './src/**/*.svg'
    ],
    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
      'active',
      'active--exact'
    ],
    whitelistPatterns: [
      /shiki/,
      /prism/,
      /markdown/,
      /.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/,
      /data-v-.*/,
      />>>/,
      /::v-deep/
    ],
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
  }
});

module.exports = TailwindPlugin;
