// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': { path: ['src'] },
    'postcss-at-rules-variables': {},
    'postcss-each': {},
    // 'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    'postcss-calc': { warnWhenCannotResolve: true },
    // 'postcss-color-function': {},
    'css-mqpacker': {},
    'autoprefixer': {},
    // 'postcss-normalise': {}, // FIXME: Couldn't get this to work
    'postcss-reporter': { filter: msg => msg.type !== 'dependency' },
  }
}