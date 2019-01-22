# gridsome-plugin-tailwindcss

This plugin will add [Tailwind](http://tailwindcss.com) to your
[Gridsome](http://gridsome.org) project.

To use this plugin, add the following to your `gridsome.config.js`. If you
don't supply a config file path, `./tailwind.js` will be used by default.

```javascript
plugins: [
	{
		use: 'gridsome-plugin-tailwindcss',
		options: {
			config: './some/file/js'
		}
	}
]
```
