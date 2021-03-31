const path = require( 'path' );
const webpack = require( 'webpack' );
const {	merge } = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );

module.exports = merge( common, {
	mode: 'production',
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false,
							modules: false
						}
          },
          'postcss-loader',
        ],
      },
    ]
	},
	plugins: [
    new MiniCssExtractPlugin( {
			filename: '[name].css'
		} ),
  ],
	optimization: {
		minimize: true,
		minimizer: [
    `...`,
    new CssMinimizerPlugin(),
  ],
	},
	performance: {
		hints: false,
	}

} )
