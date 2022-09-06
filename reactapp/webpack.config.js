let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'),

webpackConfig = {
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js'
          },
           // webpack 5 comes with devServer which loads in development mode
          devServer: {
            port: 9092,
            //watchContentBase: true
          },
           // Rules of how webpack will take our files, complie & bundle them for the browser 
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
            ]
          },
          plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

module.exports = webpackConfig;