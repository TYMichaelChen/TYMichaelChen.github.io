var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var PORT = process.env.PORT || '3030';

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:['react', "es2015"]
          }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devServer: {
    port: PORT,
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
        filename: 'css/main.css',
        allChunks: true
    }),
    new CopyWebpackPlugin([
        {from:'app/static/images',to:'images'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      },
      output: {
        comments: false
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
};
