const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

// params
const OUTPUT_PATH = '../dist';
const SOURCE_PATH = '../src';

module.exports = {
    mode: 'development',

    plugins: [
        new HotModuleReplacementPlugin(),
        // turbo-build (but has some troubles in hot-reload :( )
        new HardSourceWebpackPlugin(),
        new HtmlWebpackPlugin({
            env: 'development',
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],

    entry: {
        main: path.join(__dirname, SOURCE_PATH, 'index.tsx'),
        // property – vendor's name
        // vendor: ['react', 'react-dom']
    },

    optimization: {
        minimize: false,
        noEmitOnErrors: true,
        moduleIds: 'hashed',
        removeAvailableModules: false,
        removeEmptyChunks: false,
        mergeDuplicateChunks: false,
        splitChunks: {
            cacheGroups: {
                // vendor chunk
                vendor: {
                    // sync + async chunks
                    chunks: 'all',
                    name: 'vendor',
                    // test: 'vendor',
                    // import file path containing node_modules
                    test: /node_modules/
                }
            }
        }
    },

    output: {
        filename: "[name].js",
        path: path.join(__dirname, OUTPUT_PATH),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader' or 'babel-loader'.
            {
                test: /\.tsx?$/,
                // use: ['awesome-typescript-loader'],
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.join(__dirname, "../node_modules", ".cache", "cache-loader")
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader' or 'babel-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.join(__dirname, "../node_modules", ".cache", "cache-loader")
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            sourceMap: true,
                            localIdentName: "[local]_[hash:base64:8]" //[name][local]
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    devServer: {
        stats: 'errors-only',
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, OUTPUT_PATH),
        historyApiFallback: true,
        publicPath: '/',
    }
};