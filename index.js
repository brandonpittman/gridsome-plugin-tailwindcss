const tailwindcss = require('tailwindcss')
const fs = require('fs')
const { execSync } = require('child_process')

class TailwindPlugin {
  static defaultOptions() {
    return {
      config: './tailwind.config.js',
    }
  }

  constructor(api, options) {
    const tailwindOptions = options

    api.chainWebpack(config => {
      config.module
        .rule('css')
        .oneOf('normal')
        .use('postcss-loader')
        .tap(options => {
          options.plugins.unshift(tailwindcss(tailwindOptions.config))
          return options
        })
    })
  }
}

module.exports = TailwindPlugin

