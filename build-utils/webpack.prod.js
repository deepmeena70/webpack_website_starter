const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPath = require('./common-paths');

const config = {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: 'static/[name].[chunkhash].js',
      path: commonPath.outputPath,
      clean: true,
      publicPath: '',
  },
    module:{
        rules: [
          {
            test: /\html$/,
            loader: 'html-loader'
          },
          {
              test: /\.(s[ac]|c)ss$/i,
              use: [
                   MiniCssExtractPlugin.loader,
                   'css-loader',
                   'sass-loader',
              ],
          },
        ]
    },
    plugins: [
          new MiniCssExtractPlugin({
            filename: 'main.[chunkhash].css'
        })
      ]
};

module.exports = config;