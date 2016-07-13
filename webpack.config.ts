const {
  HotModuleReplacementPlugin,
  DefinePlugin,
  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack');

const ProgressPlugin = require('webpack/lib/ProgressPlugin.js');
const {ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');

// Export
module.exports = webpackConfig;


function webpackConfig(options: any = {}): WebpackConfig {

  const CONSTANTS = {
    ENV: JSON.stringify(options.ENV),
    HMR: options.HMR,
    PORT: 3000,
    HOST: 'localhost'
  };

  return {
    cache: true,
    // devtool: 'hidden-source-map',
    // devtool: 'source-map',
    devtool: 'cheap-module-eval-source-map',


    entry: {
      polyfills: './src/polyfills',
      vendor:    './src/vendor',
      main:      './src/main.browser'
    },

    resolve: {
      extensions: ['', '.ts', '.js', '.json'],
      modules: [ 'src', 'node_modules']
    },

    output: {
      path: 'dist',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      loaders: [
        // Support for .ts files.
        { test: /\.ts$/, loader: 'awesome-typescript-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.html/,  loader: 'raw-loader' },
        { test: /\.css$/,  loader: 'raw-loader' },
      ]
    },


    plugins: [
      new HotModuleReplacementPlugin(),
      new ForkCheckerPlugin(),
      new TsConfigPathsPlugin(),
      new CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),
      new DefinePlugin(CONSTANTS),
      new ProgressPlugin({})
    ],

    devServer: {
      contentBase: './src',
      port: CONSTANTS.PORT,
      hot: CONSTANTS.HMR,
      inline: CONSTANTS.HMR,
      historyApiFallback: true
    },

    node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  };
}
