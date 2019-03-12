# gridsome-plugin-tailwindcss

[**Read this first**](https://www.brandonpittman.net/tailwind-purge-config)

[If you're about to message me that it doesn't work, look at this. Or read the
Tailwind docs about how to generally make Tailwind classes
available.](http://github.com/brandonpittman/gridsome-plugin-tailwindcss-ffs)

This plugin will add [Tailwind](http://tailwindcss.com) to your
[Gridsome](http://gridsome.org) project.

To use this plugin, run `npm install -D gridsome-plugin-tailwindcss` add the following to your `gridsome.config.js`.

If you don't supply a config file path, `./tailwind.js` will be used by default.

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
