const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            '@': resolve('./src'),
        }
    },
    performance: {
        hints:false
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', 
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx|ts|tsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        // contentBase: './build',
        port: 8081, // 端口号
        // inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html'
        })
    ]
}