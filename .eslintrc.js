module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       extensions: ['.js', '.jsx', '.json'],
  //       map: [['@', '.']],
  //     },
  //   },
  // },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['html'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'import/no-unresolved':0,
    'import/extensions':0
  },
};
