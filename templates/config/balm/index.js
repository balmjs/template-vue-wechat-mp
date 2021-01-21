const devWithMP = process.argv.includes('--with-mp');
const path = require('path');
const webpack = require('webpack');
const { spawn } = require('child_process');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MpPlugin = require('mp-webpack-plugin');
const env = require('../env');

function resolve(dir) {
  return path.join(path.join(__dirname, '..', '..'), dir);
}

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
              spawn('npm', ['run', 'dev:mp'], { stdio: 'inherit' });
            }
          }
        },
        roots: {
          source: 'app',
          tmp: isMP ? '.mp' : '.tmp',
          target: isMP ? 'dist/mp' : 'dist/web'
        },
        styles: {
          extname: 'scss',
          dartSass: true
        },
        scripts: {
          entry: {
            lib: ['vue', 'vue-router', 'axios', 'kbone-api'],
            ui: ['kbone-ui'],
            main: isMP ? './app/scripts/main.mp.js' : './app/scripts/main.js'
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
            '@': resolve('app/scripts')
          },
          webpackOptions: {
            node: {
              // 避免 webpack 注入不必要的 setImmediate polyfill 因为 Vue 已经将其包含在内
              setImmediate: false
            }
          }
        },
        assets: isMP
          ? {}
          : {
              root: 'assets', // Replace 'assets' to your remote project root
              cache: true,
              excludes: ['dist/web/css/reset.css']
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
