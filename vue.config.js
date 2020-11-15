const path = require('path')

const Config = {
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'))
  },
  lintOnSave: true //每次保存时lint代码
}

module.exports = Config