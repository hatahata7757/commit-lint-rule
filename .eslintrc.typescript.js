// .eslintrc.typescript.js
const baseConfig = require(".eslintrc.js")

const overrideConfig = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  settings: {
    'import/resolver': {
      node: {
        'extensions': ['.ts', '.d.ts'],
      },
    },
  },

}

module.exports = Object.assign({}, baseConfig, overrideConfig)
