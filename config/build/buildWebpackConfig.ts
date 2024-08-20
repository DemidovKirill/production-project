import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const BuildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: {
      main: paths.entry,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    ...(isDev && { devtool: 'inline-source-map' }),
    ...(isDev && { devServer: buildDevServer(options) }),
  };
};
