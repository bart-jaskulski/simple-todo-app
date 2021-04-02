const postcssPresetEnv = require( 'postcss-preset-env' )
const postcssPxToRem = require( 'postcss-pxtorem' )

module.exports = ctx => (
	{
		plugins: [
			postcssPresetEnv( {
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
			postcssPxToRem( {
				rootValue: 16,
				mediaQuery: true,
				propList: [ "*", "!border*" ],
				unitPrecision: 1,
				minPixelValue: 10,
			} ),
		]
	})
