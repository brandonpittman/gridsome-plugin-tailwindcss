# gridsome-plugin-tailwindcss

[Example project](http://github.com/brandonpittman/gridsome-plugin-tailwindcss-ffs)

This plugin will add [Tailwind](http://tailwindcss.com) to your [Gridsome](http://gridsome.org) project. You're on your own for adding the actual `@tailwind` directives in your own CSS. Adding them for you would be a hassle for you in the long run.

To use this plugin, run `npm install -D gridsome-plugin-tailwindcss` add the following to your `gridsome.config.js`.

If you don't supply a config file path, `./tailwind.config.js` will be used by default.

```javascript
plugins: [
  {
    use: 'gridsome-plugin-tailwindcss',
    // options: {
    //   tailwindConfig: './some/file/js',
	//   purgeConfig: {},
	//   shouldPurge: true
    // }
  }
]
```

## postcss-import

Included by default. Pass `shouldImport: false` to disable.

## postcss-nesting

Included by default. Pass `shouldNest: false` to disable.

## autoprefixer

Included by default. Pass `shouldAutoprefix: false` to disable.

## PurgeCSS

PurgeCSS is enabled by default. If you'd like to disable it, pass `shouldPurge:
false` to the plugin options object.
