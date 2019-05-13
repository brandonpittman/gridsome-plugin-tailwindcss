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
    if (!fs.existsSync(tailwindOptions)) {
      console.error("Tailwind config file doesn't exist. Creating file now.")
      execSync(`./node_modules/.bin/tailwind init ${tailwindOptions.config}`)
    }

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

