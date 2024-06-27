const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    output: {
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.pug",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    (mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    }
}
