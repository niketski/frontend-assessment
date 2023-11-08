const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
    ],

    devServer: {
        port: 4000,
        hot: true
    },

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/, // .js and .jsx files
              exclude: /node_modules/, // excluding the node_modules folder
              use: {
                loader: "babel-loader",
              },
            },
            {
              test: /\.(scss)$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader
                },
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: () => [
                        require('autoprefixer')
                      ]
                    }
                  }
                },
                {
                  loader: 'sass-loader'
                }
              ]
            },
            {
              test: /\.(woff|woff2|eot|ttf)$/, // to import fonts
              loader: "url-loader",
              options: { limit: false },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: './images/[name].[hash].[ext]',
                      limit: 10000,
                    },
                  },
                ],
              },
          ],
    },

    

};