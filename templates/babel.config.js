module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'prismjs',
      {
        languages: ['markup', 'bash'],
        plugins: ['highlight-keywords']
      }
    ]
  ]
};
