function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    presetEnvConfig,
    importUrlConfig,
    shouldImport,
    shouldTimeTravel,
  } = options;

  const tailwind = tailwindConfig
    ? require("tailwindcss")(tailwindConfig)
    : require("tailwindcss");

  api.chainWebpack((config) => {
    ["css", "scss", "sass", "less", "stylus", "postcss"].forEach((lang) => {
      config.module
        .rule(lang)
        .oneOf("normal")
        .use("postcss-loader")
        .tap((options) => {
          if (shouldTimeTravel) {
            options.plugins.unshift(
              require("postcss-preset-env")(presetEnvConfig)
            );
          }

          options.plugins.unshift(tailwind);

          if (shouldImport) {
            options.plugins.unshift(require("postcss-import")());
            options.plugins.unshift(
              require("postcss-import-url")(importUrlConfig)
            );
          }

          return options;
        });
    });
  });
}

TailwindPlugin.defaultOptions = () => ({
  shouldImport: true,
  shouldTimeTravel: true,
  importUrlConfig: {
    modernBrowser: true,
  },
  tailwindConfig: undefined,
  presetEnvConfig: {
    stage: 0,
    autoprefixer: false,
    features: {
      "focus-visible-pseudo-class": false,
      "focus-within-pseudo-class": false,
    },
  },
});

module.exports = TailwindPlugin;
