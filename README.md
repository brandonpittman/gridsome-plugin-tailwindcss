[**Read this first**.](https://www.brandonpittman.net/tailwind-purge-config)

I would recommend against going for a plugin to use Tailwind with Gridsome.
It's no longer necessary and I don't intend to auto-inject Tailwind in a
particular place as to not force anyone into a certain way of including CSS in
their project. You can include Tailwind into your project using Webpack, Vue
components, and regular stylesheets. Choosing one of those for you doesn't do
anyone any good.

# gridsome-plugin-tailwindcss

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
