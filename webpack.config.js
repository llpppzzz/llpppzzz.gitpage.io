const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.less/,
				loaders: ['style-loader', 'css-loader', 'autoprefixer', 'less-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: { name: '[name].[ext]?[hash]' }
			},
			{
				test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
				loader: "file-loader"
	  		},
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin('common.js'),
		// new webpack.ProvidePlugin({
		// 	jQuery: "jquery",
		// 	$: "jquery"
		// }),

	]
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = 'source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
	])
}
