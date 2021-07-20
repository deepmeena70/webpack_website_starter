const port = process.env.PORT || 3000;

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        port: port,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    }
}

module.exports = config;