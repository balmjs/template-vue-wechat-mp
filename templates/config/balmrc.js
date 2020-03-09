/*eslint-env node*/
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MpPlugin = require('mp-webpack-plugin');
const balm = require('balm');
const env = require('./env');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  // server: {
  //   open: true,
  //   proxyConfig: {
  //     context: '/api',
  //     options: {
  //       target: 'http://your.project.dev', // Target host
  //       changeOrigin: true // Needed for virtual hosted sites
  //     }
  //   }
  // },
  roots: {
    source: 'app',
    target: env.buildMP ? 'dist/mp' : 'dist/web'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router'],
      main: env.buildMP ? './app/scripts/main.mp.js' : './app/scripts/main.js'
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [
      new VueLoaderPlugin(),
      ...(env.buildMP
        ? [
            new webpack.DefinePlugin({
              'process.env.isMiniprogram': process.env.isMiniprogram // 注入环境变量，用于业务代码判断
            }),
            new MpPlugin(require('./miniprogram.config'))
          ]
        : [])
    ],
    // extractCss: {
    //   enabled: balm.config.env.isProd,
    //   prefix: 'extra-'
    // },
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '..', 'app', 'scripts')
    },
    webpackOptions: env.buildMP
      ? {
          output: {
            path: path.resolve(__dirname, '../dist/mp/common'), // 放到小程序代码目录中的 common 目录下
            library: 'createApp', // 必需字段，不能修改
            libraryExport: 'default', // 必需字段，不能修改
            libraryTarget: 'window' // 必需字段，不能修改
          }
        }
      : {}
  }
  // More Config
};
