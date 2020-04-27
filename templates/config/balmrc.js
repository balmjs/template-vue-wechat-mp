const path = require('path');
const balm = require('balm');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MpPlugin = require('mp-webpack-plugin');
const env = require('./env');

// Documentation - https://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  server: {
    proxyConfig: {
      context: '/api',
      options: {
        target: env.host, // Target host
        changeOrigin: true // Needed for virtual hosted sites
      }
    }
  },
  roots: {
    source: 'app',
    target: balm.config.env.isMP ? 'dist/mp' : 'dist/web'
  },
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router'],
      main: balm.config.env.isMP
        ? './app/scripts/main.mp.js'
        : './app/scripts/main.js'
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [
      new VueLoaderPlugin(),
      ...(balm.config.env.isMP
        ? [
            new webpack.DefinePlugin({
              'process.env.isMiniprogram': process.env.isMiniprogram // 注入环境变量，用于业务代码判断
            }),
            new MpPlugin(require('./wx.kbone.config'))
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
    }
  },
  assets: balm.config.env.isMP
    ? {}
    : {
        root: 'assets', // Replace 'assets' to your remote project root
        cache: true,
        excludes: ['dist/web/css/reset.css']
      }
  // More Config
};
