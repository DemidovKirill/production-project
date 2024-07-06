import {RuleSetRule} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  }

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }

  const typescriptLoader: RuleSetRule =     {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const styleLoader: RuleSetRule = {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: /\.module\./,
              localIdentName: '[local]'
            }
          }
        },
        "sass-loader"
      ]
    }

  return [
    typescriptLoader,
    styleLoader,
    svgLoader,
    fileLoader
  ]
}