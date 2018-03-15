'use strict'; // eslint-disable-line

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
  ],
  plugins: [
    'html',
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: [
        '.css',
        '.js',
        '.json',
        '.jsx',
        '.marko',
        '.mjs',
        '.vue',
      ] },
    },
    'html/html-extensions': ['.html', '.marko'], // not .vue; it has its own parser
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline', // optional awkward comma on multiline function params
    }],
    'import/extensions': ['error', 'always', {
      css: 'never',
      js: 'never',
      json: 'never',
      jsx: 'never',
      marko: 'never',
      mjs: 'never',
      vue: 'never',
    }],
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // vuex state
      ],
    }],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
  },
};
