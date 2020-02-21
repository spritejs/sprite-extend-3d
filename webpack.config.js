const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const packageConfig = require('./package.json');

module.exports = function (env = {}) {
  const output = {
    path: path.resolve(__dirname, env.outputPath || 'dist'),
    filename: env.module ? `${packageConfig.name}.esm.js` : `${packageConfig.name}.js`,
    publicPath: '/js/',
    library: ['spritejs', 'ext3d'],
    libraryTarget: env.module ? 'var' : 'umd',
    globalObject: 'this',
  };

  const plugins = [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ];

  if(env.module) {
    plugins.push(new EsmWebpackPlugin());
  }

  return {
    mode: env.mode || 'none',
    entry: './src/index',
    output,
    // resolve: {
    //
    // },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!ogl).*/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(frag|vert|glsl)$/,
          use: {
            loader: 'raw-loader',
            options: {},
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals: {
      spritejs: 'spritejs',
    },
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || '.'),
      compress: true,
      port: 3000,
      hot: true,
      // ...
    },

    plugins,
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
