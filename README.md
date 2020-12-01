🚨 **If you get errors about PostCSS v8, check out Tailwind's docs for the latest info about the [compat version](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).**

# gridsome-plugin-tailwindcss

This plugin will add [Tailwind](http://tailwindcss.com) to your
[Gridsome](http://gridsome.org) project.

## Who This Is For

If you want to set up Tailwind with the least amount of effort in a Gridsome
project, this is for you. If you want to lean in to the _Way of
Tailwind_&mdash;using `tailwind.config.js` or keep your CSS inside your Vue
files' style blocks&mdash;this is the plugin for you. If you want to have a
global CSS file and dump a bunch of shit in there, you should look elsewhere.

## Install

`npm install -D gridsome-plugin-tailwindcss tailwindcss@latest` 

`npm install -D postcss-import postcss-preset-env #(if you want these plugins and you've updated the config)`

## Usage

I've gone ahead and automatically imported the default `tailwind.css` file from
the Tailwind npm package. It's just add a CSS file that includes:

```postcss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**You do not need to import Tailwind into a CSS file.**

You may be wondering, "Where do I add global CSS?!" Short answer, you don't.
Long answer, read the Tailwind docs on [creating plugins][plugins] and use
`tailwind.config.js` to add base styles and create components/utilities there.

**If you need to create `tailwind.config.js`, run `./node_modules/.bin/tailwind init` to create one.**

[plugins]: https://tailwindcss.com/docs/plugins/#app

## Customize

Set any options you want to set in `gridsome.config.js`.

```javascript
module.exports = {
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
  ],
};
```

**If you don't supply a config file path, Tailwind defaults will be used.**

## Plugins

The following PostCSS plugins can be enabled if you install their dependencies.

### postcss-import

Install `postcss-import` and pass `shouldImport: true` to enable.

### postcss-preset-env

Install `postcss-preset-env` and pass `shouldTimeTravel: true` to enable. You may also pass a
config object to the plugin as `presetEnvConfig`.

With this one plugin, you should be ready to use Tailwind right away. Keep your
customization to `tailwind.config.js` whenever possible, but you can use the
full power of Tailwind in your Vue components when
necessary.

## Examples

- [🍸 Aperitif &mdash; A delectable starter template for your next Gridsome project.](https://github.com/brandonpittman/aperitif)
- [Example project](http://github.com/brandonpittman/gridsome-plugin-tailwindcss-ffs)

Happy coding!

<a href="https://www.buymeacoffee.com/blp" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
