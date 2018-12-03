'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

const resolve = (dir) => path.join(__dirname, '..', dir)

const createLintingRule = () => ({
  // test: /\.(js|vue)$/,
  // loader: 'eslint-loader',
  // enforce: 'pre',
  // include: [resolve('src'), resolve('test')],
  // options: {
  //   formatter: require('eslint-friendly-formatter'),
  //   emitWarning: !config.dev.showEslintErrorsInOverlay
  // }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components': resolve('src/components'),
      'common': resolve('src/common'),
      'page': resolve('src/page'),
      'api': resolve('src/api'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      // {
      //   test: resolve('static/lib/nasa'),
      //   loader: 'expose-loader?Nasa'
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg$/,
        use: [
          {loader: 'svg-sprite-loader', options: {} },
          {loader: 'svgo-loader', options: config.svgoConfig }
        ],
        include: [resolve('src/assets/icons')]
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
