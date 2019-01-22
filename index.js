const tailwindcss = require('tailwindcss')

class TailwindPlugin {
  static defaultOptions() {
    return {
      config: './tailwind.js'
    }
  }

  constructor(api, options) {
    const tailwindOptions = options

    api.chainWebpack(config => {
      config.module
        .rule('css') // or sass, scss, less, postcss, stylus
        .oneOf('normal') // or module
        .use('postcss-loader')
        .tap(options => {
          options.plugins.unshift(tailwindcss(tailwindOptions.config))
          return options
        })
    })
  }
}

module.exports = TailwindPlugin
