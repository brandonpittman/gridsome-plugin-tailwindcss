# gridsome-plugin-tailwindcss

[Example project](http://github.com/brandonpittman/gridsome-plugin-tailwindcss-ffs)

This plugin will add [Tailwind](http://tailwindcss.com) to your
[Gridsome](http://gridsome.org) project. You're on your own for adding the
actual `@tailwind` directives in your own CSS. Adding them for you would be a
hassle for you in the long run. Just add a CSS file that includes:

```postcss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

…somewhere in your CSS pipeline. Can be a standalone file or in the default
layout. Better to do it in a standalone file. I import mine as a Wepback module
in `main.js`. But it's your choice! 😄

To use this plugin, run `npm install -D gridsome-plugin-tailwindcss` add the following to your `gridsome.config.js`.

If you don't supply a config file path, Tailwind defaults will be used by default.

```javascript
modules.exports = {
plugins: [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
     tailwindConfig: './some/file/js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: true,
      shouldImport: true,
      shouldTimeTravel: true,
    }
  }
]
}
```
## PurgeCSS

[PurgeCSS](https://www.purgecss.com/with-postcss) is enabled by default. If you'd like to disable it, pass `shouldPurge:
false` to the plugin options object.

## postcss-import

[postcss-import](https://github.com/postcss/postcss-import) included by default. Pass `shouldImport: false` to disable.

## postcss-preset-env

[postcss-preset-env](https://github.com/csstools/postcss-preset-env) included by default. Pass `shouldTimeTravel: false` to disable. You may also pass a config object to the plugin as `presetEnvConfig`.

