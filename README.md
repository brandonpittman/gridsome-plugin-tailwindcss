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
    //   config: './some/file/js'
    // }
  }
]
```
