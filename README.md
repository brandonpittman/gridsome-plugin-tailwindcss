# gridsome-plugin-tailwindcss

This plugin will add [Tailwind](http://tailwindcss.com) to your
[Gridsome](http://gridsome.org) project.

## Who This Is For

If you want to set up Tailwind with the least amount of effort in a Gridsome
project, this is for you. If you want to lean in to the _Way of
Tailwind_&mdash;using `tailwind.config.js` or keep your CSS inside your Vue
files' style blocks&mdash;this is the plugin for you. If you want to have a
global CSS file and dump a bunch of crap in there, you'll wind up fighting this
plugin.

## Install

`npm install -D gridsome-plugin-tailwindcss`

## Usage

I've gone ahead and automatically imported the default `tailwind.css` file from
the Tailwind npm package. It's just add a CSS file that includes:

```postcss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

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
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
  ],
};
```

**If you don't supply a config file path, Tailwind defaults will be used.**

## Plugins

The following PostCSS plugins are also included with this plugin:

## Examples

- [🍸 Aperitif &mdash; A delectable starter template for your next Gridsome project.](https://github.com/brandonpittman/aperitif)
- [Example project](http://github.com/brandonpittman/gridsome-plugin-tailwindcss-ffs)

Happy coding!

<a href="https://www.buymeacoffee.com/blp" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
