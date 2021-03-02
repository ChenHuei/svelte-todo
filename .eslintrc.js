module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'handle-callback-err': 'off',
    'no-template-curly-in-string': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'prettier/prettier': 'error',
    camelcase: 'off',
    curly: 'off',
  },
}
