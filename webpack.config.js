const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve:  {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ] 

}