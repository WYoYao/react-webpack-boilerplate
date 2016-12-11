var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板 将创建出来的js类型全部添加到新创建的页面里面
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 获取启动文件的绝对路径
var node_modules = path.resolve(__dirname, 'node_modules');
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devSever: {
        //The webpack-dev-server will serve the files in the current directory, unless you configure a specific content base.
        //Using this configuration, webpack-dev-server will serve the static files in your build folder. It’ll watch your source files, and recompile the bundle whenever they are changed.
        //This modified bundle is served from memory at the relative path specified in publicPath (see API). It will not be written to your configured output directory. Where a bundle already exists at the same URL path, the bundle in memory takes precedence (by default).
        contentBase: './build',
        // a small webpack-dev-server client entry is added to the bundle which refresh the page on change
        inline: true,
        //Enable special support for Hot Module Replacement
        hot: true,
        //Set this as true if you want to access dev server from arbitrary url.
        historyApiFallback: false,
        //Set this if you want to enable gzip compression for assets
        compress: true,
        port: 8080,
        stats: { colors: true }
    },
    entry: {
        index: [
            /**
             * //devServer{hot} 需要
             */
            'webpack/hot/dev-server',
            /**
             * There is no inline: true flag in the webpack-dev-server configuration, because the webpack-dev-server module has no access to the webpack configuration. Instead, the user must add the webpack-dev-server client entry point to the webpack configuration.
                To do this, simply add the following to all entry points: webpack-dev-server/client?http://«path»:«port»/
             */
            'webpack-dev-server/client?http://127.0.0.1:8080',
            path.resolve(__dirname, 'app/index.js')
        ],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        // 提高webpack搜索的速度
        alias: {}
    },
    devtool: 'source-map',
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
        loaders: [
            {
                // 匹配，.js .jsx
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                // 排除模块中
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            },
        ]
    },
    plugins: [
        //devServer{hot} 需要
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'React Webpack',
            template: './app/index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' }),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
    ]
}