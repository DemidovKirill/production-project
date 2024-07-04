import {RuleSetRule} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const typescriptLoader =     {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: /\.module\./,
              localIdentName: options.isDev ? '[local]' : '[hash:base64:8]'
            }
          }
        },
        "sass-loader"
      ]
    }

  return [
    typescriptLoader,
    styleLoader
  ]
}