/**
 * External dependencies font files. This rule allows for emiting
 * font assets of external libraries to the application.
 */
module.exports = (config) => ({
	test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
	include: config.paths.external,
	loader: 'file-loader',
	options: {
		publicPath: config.paths.relative,
		name: config.outputs.webfont.filename
	}
});
