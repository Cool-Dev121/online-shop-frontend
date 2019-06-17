module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
