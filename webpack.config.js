const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css"
    // disable: process.env.NODE_ENV === "development"
});
const webpack = require('webpack'); //to access built-in plugins

const pages = [
    'index'
];
const paths = {
    styles: './src/styles/',
    scripts: './src/',
    images: './src/img/',
    static: path.resolve(__dirname, './static')
};

const plugins = [
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor-[hash].js',
        minChunks(module) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),
    new WebpackChunkHash(),
    new WebpackCleanupPlugin(),
    new CopyWebpackPlugin([{from: paths.static, to: 'static'}],{copyUnmodified: true}),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({openAnalyzer: true}),
    new HtmlWebpackPlugin({
        title: "Main",
        template: "./src/index.html",
        minify: {
            collapseWhitespace: true
        },
        hash: true,
    }),
];

let entries = {};

// TODO wraitable for.... what?
pages.forEach(page => {
    Object.defineProperty(entries, page, {
        value: paths.scripts+page+'.js',
        enumerable: true,
        writable: true
    })
});
module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[hash].js"
    },
    devtool: process.env.NODE_ENV==="production" ? "nosources-source-map" : "cheap-eval-source-map",
    plugins: plugins,
    module: {

        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {test: /\.css$/, exclude: /node_modules/, use: ['style-loader',{loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'},'postcss-loader']},
            {
                test: /\.(png|svg|jpg|gif)$/,
                loaders: [
                    // 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]&outputPath=assets/imgs/',
                    'url-loader?limit=8192',
                    // {loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
                    {loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {progressive: true},
                            gifsicle: {interlaced: false},
                            optipng: {optimizationLevel: 4},
                            pngquant: {quality: '75-90', speed: 3}
                        }
                    }]
            },
            {test: /\.(woff|woff2|eot|ttf|otf)$/,use: [
                'file-loader?name=assets/fonts/[name].[ext]&publicPath=/']},
            {test: /\.json$/,use: [
                'file-loader?name=testData/[name].[ext]&publicPath=/']}
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, 'build'),
        compress: true,
        stats: "errors-only",
        open: true,
        hot: true,
        index: 'index.html',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    resolve: {
        alias:{
            Static: path.resolve(__dirname, 'static'),
            Common: path.resolve(__dirname, 'src/Components/Common'),
            Root: path.resolve(__dirname, 'src')
        }
    }
};