const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = function (env) {
    // Define entries
    let entries = {
        initial: "./initial.js",
        "vendor-react": ["react", "react-dom"],
    };

    // Define Plugins
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "vendor-react.js",
            name: "vendor-react",
            chunks: ["vendor-react"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "common.js",
            name: "common",
        }),
        new ExtractTextPlugin({
            allChunks: true,
            disable: false,
            filename: "[name].css",
        })
    ];

    // Define Dev tools
    let devtool = "source-map";

    return {
        devServer: {
            compress: true,
            contentBase: path.join(__dirname, "dist"),
            hot: true,
            inline: true,
            port: 8000,
        },
        devtool: devtool,
        entry: entries,
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: "awesome-typescript-loader",
                    test: /\.tsx?$/,
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader"],
                    }),
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "less-loader"],
                    }),
                },
                {
                    include: /initial/,
                    test: /\.(jpe?g|gif|png|svg)$/,
                    use: "url-loader?limit=128000",
                },
                {
                    exclude: /initial/,
                    test: /\.(jpe?g|gif|png|svg)$/,
                    use: "file-loader?hash=sha512&digest=hex&name=images/[name].[ext]?[hash]",
                },
                {
                    test: /\.(ttf)$/,
                    use: "file-loader?name=fonts/[name].[ext]",
                },
            ],
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "./dist"),
        },
        plugins: plugins,
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".css", ".less"],
        },
    };
};
