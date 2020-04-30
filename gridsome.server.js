function TailwindPlugin(api, options) {
  const {
    tailwindConfig,
    purgeConfig,
    presetEnvConfig,
    importUrlConfig,
    shouldImport,
    shouldPurge,
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
          if (shouldTimeTravel)
            options.plugins.unshift(
              require("postcss-preset-env")(presetEnvConfig)
            );

          options.plugins.unshift(tailwind);

          if (shouldImport) {
            options.plugins.unshift(require("postcss-import")());
            options.plugins.unshift(
              require("postcss-import-url")(importUrlConfig)
            );
          }

          // eslint-disable-next-line no-unused-expressions
          if (process.env.NODE_ENV === "production" && shouldPurge) {
            options.plugins.push(
              require("@fullhuman/postcss-purgecss")(purgeConfig)
            );
          }

          return options;
        });
    });
  });
}

TailwindPlugin.defaultOptions = () => ({
  shouldPurge: true,
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
  purgeConfig: {
    keyframes: true,
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
      "./src/**/*.svg",
    ],
    whitelist: [
      "body",
      "html",
      "img",
      "a",
      "g-image",
      "g-image--lazy",
      "g-image--loaded",
      "active",
      "active--exact",
    ],
    whitelistPatterns: [
      /shiki/,
      /prism/,
      /token$/,
      /markdown/,
      /rich-text/,
      /richtext/,
      /.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/,
      /data-v-.*/,
      />>>/,
      /::v-deep/,
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: (content) => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

      return broadMatches.concat(innerMatches);
    },
  },
});

module.exports = TailwindPlugin;
