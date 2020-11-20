function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    presetEnvConfig,
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
          }

          return options;
        });
    });
  });
}

TailwindPlugin.defaultOptions = () => ({
  shouldImport: false,
  shouldTimeTravel: false,
  tailwindConfig: undefined,
  presetEnvConfig: {
    stage: 0,
    autoprefixer: false,
  },
});

module.exports = TailwindPlugin;
