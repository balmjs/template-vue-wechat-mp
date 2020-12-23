const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MpPlugin = require('mp-webpack-plugin');
const env = require('./env');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = (balm, cssReset) => {
  const config = cssReset
    ? {
        useDefaults: false
      }
    : {
        server: {
          proxyConfig: {
            context: '/api',
            options: {
              target: env.host, // Target host
              changeOrigin: true // Needed for virtual hosted sites
            }
          },
          historyOptions: true // For vue-router `mode: 'history'`
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
            lib: ['vue', 'vue-router', 'vue-meta', 'axios'],
            main: balm.config.env.isMP
              ? './app/scripts/main.mp.js'
              : './app/scripts/main.js'
          },
          loaders: [
            {
              test: /\.vue$/,
              use: [
                {
                  loader: 'vue-loader',
                  options: {
                    compilerOptions: {
                      preserveWhitespace: false
                    }
                  }
                },
                ...(balm.config.env.isMP ? ['vue-improve-loader'] : [])
              ]
            }
          ],
          plugins: [
            new VueLoaderPlugin(),
            ...(balm.config.env.isMP
              ? [
                  new webpack.DefinePlugin({
                    'process.env.isMiniprogram': process.env.isMiniprogram
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
          },
          webpackOptions: {
            node: {
              // 避免 webpack 注入不必要的 setImmediate polyfill 因为 Vue 已经将其包含在内
              setImmediate: false
            }
          }
        },
        assets: balm.config.env.isMP
          ? {}
          : {
              publicUrl: '/',
              root: 'assets', // Replace 'assets' to your remote project root
              cache: true,
              excludes: ['dist/web/css/reset.css']
            }
        // More Config
      };

  return config;
};
