module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
    'linebreak-style': ['error', 'windows'],
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
  },
};
