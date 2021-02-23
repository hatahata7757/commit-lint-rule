module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '/tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requireing-type-checking'
  ]
}
