const path = require("path");
require("babel-core/register");
require("babel-polyfill");

module.exports = {
	devtool: 'source-map',
	entry: ['babel-polyfill', './index.js'],
	output: {
		filename: "index.js",
		path: path.join(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			},

		]

	},
}
