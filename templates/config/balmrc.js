const devMP = process.argv.includes('--dev-mp');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MpPlugin = require('mp-webpack-plugin');
const env = require('./env');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = (balm, cssInit) => {
  const config = cssInit
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
            lib: ['vue', 'vue-router', 'axios', 'kbone-api'],
            ui: ['kbone-ui'],
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

  if (devMP) {
    config.useDefaults = false;
    config.styles.minify = true; // Fuck MP sourcemap bug
    config.styles.options = {
      minifySelectors: false // 因为 wxss 编译器不支持 .some>:first-child 这样格式的代码，所以暂时禁掉这个
    };
    config.scripts.minify = true; // 开发者工具可能无法完美支持业务代码使用到的 es 特性，建议自己做代码压缩
  }

  return config;
};
