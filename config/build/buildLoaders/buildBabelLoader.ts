export const buildBabelLoaders = () => ({
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            nsSeparator: '~',
            locales: ['en', 'ru'],
            keyAsDefaultValue: true,
          },
        ],
      ],
    },
  },
});
