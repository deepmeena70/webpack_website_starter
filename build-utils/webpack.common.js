const commonPath = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: `${commonPath.appEntry}/index.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    module: {

        rules: [
            {
                test:/\.js/,
                exclude: /node_modules|.typeface.json/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|jfif|mp3)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[contenthash][ext][query]'
                }

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash][ext][query]'
                }
            },
         
        ],
    },

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

module.exports = config;

