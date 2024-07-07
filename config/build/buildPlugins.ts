import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: options.paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev)
    }),
    options.isDev && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}