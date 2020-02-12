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
    // I'm giving into peer pressure.
    ['css', 'scss', 'sass', 'less', 'stylus', 'postcss'].forEach(lang => {
      config.module
        .rule(lang)
        .oneOf('normal')
        .use('postcss-loader')
        .tap(options => {
          options.plugins.unshift(
            ...[
              shouldImport && postcssImport,
              tailwind,
              shouldTimeTravel && postcssPresetEnv
            ]
          );

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
    autoprefixer: false
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
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
});

module.exports = TailwindPlugin;
