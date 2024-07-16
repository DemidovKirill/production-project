module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  'rules': {
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'indent': [2, 2],
    'quote-props': [2, 'always'],
  },
  'globals': {
    '__IS_DEV__': true,
  },
};