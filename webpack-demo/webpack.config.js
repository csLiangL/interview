const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * loader： 1、下载    2、使用
 * plugins：1、下载    2、引入   3、使用
 */
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            // loader
            {
                test: /\.css$/,
                // 从下到上执行
                use: [
                    // 从CommonJS模块中提取出css样式，创建style标签，并插入到head中。
                    "style-loader",
                    // 将css资源变成CommonJS模块。
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 需要安装less-loader和less
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: "url-loader",
                options: {
                    // 小图用base64存储。
                    // base64会增大图片体积，但不用发起请求。
                    limit: 1024,
                    // url-loader默认使用ES6模块化，关闭，使用CommonJS解析。
                    esModule: false,
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        // 复制index.html到打包目录下，并自动创建script标签，引用打包后的js文件。
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    mode: "development",    // 默认是生产模式
}