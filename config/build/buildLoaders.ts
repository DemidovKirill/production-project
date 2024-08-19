import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './buildLoaders/buildCssLoader';
import { buildBabelLoaders } from './buildLoaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader: RuleSetRule = buildBabelLoaders();

  const styleLoader: RuleSetRule = buildCssLoader(options.isDev);

  return [babelLoader, typescriptLoader, styleLoader, svgLoader, fileLoader];
};
