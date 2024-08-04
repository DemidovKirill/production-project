import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/buildLoaders/buildCssLoader';

export default ({
  config,
}: {
  config: webpack.Configuration;
}): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('ts', 'tsx');
  config.module!.rules!.push(buildCssLoader(true));

  const rules = config!.module!.rules as RuleSetRule[];
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = rules.map((rule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config!.plugins!.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }));

  return config;
};
