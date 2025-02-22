// rules/sass.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');

module.exports = function sassRuleFactory(mode) {
	if (mode === 'production') {
		return {
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: sass,
					},
				},
			],
		};
	}

	return {}; // Return an empty object or a different rule for development
};
