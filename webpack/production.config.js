const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// params
const OUTPUT_PATH = '../prod';
const SOURCE_PATH = '../src';

module.exports = {
    mode: 'production',
    performance: {
        hints: 'warning'
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[hash].css"
        }),
        new HtmlWebpackPlugin({
            env: 'production',
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],

    entry: {
        main: path.join(__dirname, SOURCE_PATH, 'index.tsx'),
        // property – vendor's name
        // vendor: ['react', 'react-dom']
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                cache: true
            }),
        ],
        splitChunks: {
            cacheGroups: {
                // vendor chunk - only js
                vendor: {
                    // sync + async chunks
                    chunks: 'all',
                    name: 'vendor',
                    // test: 'vendor',
                    // import file path containing node_modules
                    // test: /node_modules/
                    test: /\/node_modules\/[\w\/.]+\.js$/
                }
            }
        }
    },

    output: {
        filename: "[chunkhash].js",
        path: path.join(__dirname, OUTPUT_PATH),
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader' or 'babel-loader'.
            {
                test: /\.tsx?$/,
                loader: "babel-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },

            {
                test: /\.s?css$/,
                include: [/node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },

            {
                test: /\.(png|jp?g|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use : [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/svg/',
                    }
                }]
            },

            {
                test: /\.(woff|woff2|eot|ttf)?$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'assets/fonts/',
                }
            },
        ]
    }
};