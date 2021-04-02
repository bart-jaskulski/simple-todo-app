const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../assets' ),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
						plugins: [
							"@babel/plugin-proposal-class-properties",
							"@babel/plugin-proposal-private-methods",
						]
          }
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
