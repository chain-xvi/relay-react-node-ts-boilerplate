const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	watch: true,
	watchOptions: {
    ignored: /node_modules/,
  },
  entry: path.join(__dirname, "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  resolve: {
	  extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
  module: {
    rules: [
    	{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
				test: /\.(css)$/,
				use: ['css-loader']
			},
			{
			  test: /\.(s(a|c)ss)$/,
			  use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: {
					      localIdentName: "[name]__[local]___[hash:base64:5]",
					    },
							sourceMap: false,
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
    ]
  },
  plugins: [
  	new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
		new MiniCssExtractPlugin()
  ]
}