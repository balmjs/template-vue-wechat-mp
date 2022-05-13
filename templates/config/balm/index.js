const devWithMP = process.argv.includes('--with-mp');
const { spawn } = require('child_process');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const MpPlugin = require('mp-webpack-plugin');
const env = require('../env');
const getEntry = require('./entry');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = (balm, wxInit) => {
  const { isMP, isDev } = balm.config.env;

  const config = wxInit
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
          historyOptions: true, // For vue-router `mode: 'history'`,
          next: () => {
            if (!isMP && devWithMP) {
              spawn('npm', ['run', 'mp:dev'], { stdio: 'inherit' });
            }
          }
        },
        roots: {
          source: env.appRoot,
          tmp: isMP ? '.mp' : '.tmp',
          target: isMP ? 'dist/mp' : 'dist/web'
        },
        styles: {
          extname: 'scss'
        },
        scripts: {
          entry: {
            lib: [
              'vue',
              'vue-router',
              'axios',
              'axios-miniprogram-adapter',
              'balm-ui',
              'kbone-api',
              'wx-server-sdk'
            ],
            ...getEntry(isMP)
          },
          loaders: [
            {
              test: /\.md$/,
              use: [
                {
                  loader: 'html-loader',
                  options: {
                    minimize: false
                  }
                }
              ]
            },
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
                ...(isMP ? ['vue-improve-loader'] : [])
              ]
            }
          ],
          plugins: [
            new VueLoaderPlugin(),
            ...(isMP
              ? [
                  new webpack.DefinePlugin({
                    'process.env.isMiniprogram': process.env.isMiniprogram
                  }),
                  new MpPlugin(require('../wx/kbone.config'))
                ]
              : [])
          ],
          // extractCss: {
          //   enabled: balm.config.env.isProd,
          //   prefix: 'extra-'
          // },
          alias: {
            vue$: 'vue/dist/vue.esm.js',
            'balm-ui-event': 'balm-ui/plugins/event/index.js',
            'balm-ui-store': 'balm-ui/plugins/store/index.js',
            '@': env.resolve(`${env.appRoot}/scripts`)
          },
          webpackOptions: {
            node: {
              // 避免 webpack 注入不必要的 setImmediate polyfill 因为 Vue 已经将其包含在内
              setImmediate: false
            }
          }
        },
        extras: {
          includes: ['CNAME']
        },
        assets: isMP
          ? {}
          : {
              cache: true,
              excludes: ['dist/web/css/reset.css', 'dist/web/img/**/*']
            }
        // More Config
      };

  if (isMP && isDev) {
    config.useDefaults = false;
    config.styles.minify = true; // Fuck MP sourcemap bug
    config.styles.options = {
      minifySelectors: false // 因为 wxss 编译器不支持 .some>:first-child 这样格式的代码，所以暂时禁掉这个
    };
    config.scripts.minify = true; // 开发者工具可能无法完美支持业务代码使用到的 es 特性，建议自己做代码压缩
  }

  return config;
};
