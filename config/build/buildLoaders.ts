import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const fileLoader: RuleSetRule = {
    'test': /\.(png|jpe?g|gif|woff2|woff)$/i,
    'type': 'asset/resource',
  };

  const svgLoader: RuleSetRule = {
    'test': /\.svg$/,
    'use': ['@svgr/webpack', 'url-loader'],
  };

  const typescriptLoader: RuleSetRule = {
    'test': /\.tsx?$/,
    'use': 'ts-loader',
    'exclude': /node_modules/,
  };

  const babelLoader: RuleSetRule = {
    'test': /\.(js|jsx|tsx|ts)$/,
    'exclude': /node_modules/,
    'use': {
      'loader': 'babel-loader',
      'options': {
        'presets': ['@babel/preset-env'],
        'plugins': [
          [
            'i18next-extract',
            {
              'nsSeparator': '~',
              'locales': ['en', 'ru'],
              'keyAsDefaultValue': true,
            },
          ],
        ],
      },
    },
  };

  const styleLoader: RuleSetRule = {
    'test': /\.s[ac]ss$/i,
    'use': [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        'loader': 'css-loader',
        'options': {
          'modules': {
            'auto': /\.module\./,
            'localIdentName': '[local]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [
    babelLoader,
    typescriptLoader,
    styleLoader,
    svgLoader,
    fileLoader,
  ];
};
