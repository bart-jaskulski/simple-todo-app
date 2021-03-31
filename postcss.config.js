/* Run this command to install all dependencies
 * npm i -D postcss postcss-cli postcss-import postcss-normalize postcss-preset-env postcss-combine-media-query postcss-pxtorem cssnano
 */
const path = require('path')
const postcssImport = require( 'postcss-import' )
const postcssNormalize = require( 'postcss-normalize' )
const postcssPresetEnv = require( 'postcss-preset-env' )
const postcssCombineMediaQuery = require( 'postcss-combine-media-query' )
const postcssPxToRem = require( 'postcss-pxtorem' )
const cssnano = require( 'cssnano' )

module.exports = ctx => (
	{
		// map: ctx.options.map,
		plugins: [
			// postcssImport(
			// 	postcssNormalize().postcssImport( {
			// 		path: path.resolve(process.cwd(), 'css')
			// 	} )
			// ),
			postcssPresetEnv( {
				// importFrom: path.resolve( process.cwd(), 'css', '_custom-media.css'),
				autoprefixer: {
					'grid': false,
				},
				features: {
					"custom-media-queries": true,
					"custom-properties": true,
					"custom-selectors": true,
					"nesting-rules": true,
				},
			} ),
			postcssCombineMediaQuery(),
			postcssPxToRem( {
				rootValue: 16,
				mediaQuery: true,
				propList: [ "*", "!border*" ],
				unitPrecision: 1,
				minPixelValue: 10,
			} ),
			// ctx.env === 'production' ? cssnano() : null,
		]
	})
