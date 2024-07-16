import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HTMLWebpackPlugin({
    'template': options.paths.html,
  }),
  new MiniCssExtractPlugin({
    'filename': 'css/[name].[contenthash:8].css',
    'chunkFilename': 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    '__IS_DEV__': JSON.stringify(options.isDev),
  }),
  options.isDev && new ReactRefreshWebpackPlugin({ 'overlay': false }),
].filter(Boolean);
