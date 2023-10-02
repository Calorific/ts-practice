module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  rules: {
    "indent": ["error", 2],
    "curly": 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'padded-blocks': 0,
    'no-multiple-empty-lines': 0,
    'operator-linebreak': 0,
    'multiline-ternary': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 0,
    'no-case-declarations': 0
  }
}
