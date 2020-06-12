const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const packageConfig = require('./package.json');

module.exports = function (env = {}) {
  const output = {
    path: path.resolve(__dirname, env.outputPath || 'dist'),
    filename: env.module ? `${packageConfig.name}.esm.js` : `${packageConfig.name}.js`,
    publicPath: '/js/',
    library: env.module ? 'ext3d' : {
      commonjs: 'sprite-extend-3d',
      amd: 'sprite-extend-3d',
      root: ['spritejs', 'ext3d'],
    },
    libraryTarget: env.module ? 'var' : 'umd',
    globalObject: 'this',
  };

  let babelConf;

  const babelRC = './.babelrc';
  if(fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC));
    babelConf.babelrc = false;
  }

  const plugins = [];

  if(env.mode === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }));
  }

  if(env.module) {
    plugins.push(new EsmWebpackPlugin());
    plugins.push(new webpack.BannerPlugin({
      banner: "import * as spritejs from 'https://unpkg.com/spritejs/dist/spritejs.esm.js';",
      raw: true,
    }));
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
            options: babelConf,
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
