/**
 * External dependencies image files. This rule allows for emiting
 * image assets of external libraries to the application.
 */
module.exports = (config) => ({
	test: /\.(png|jpe?g|gif|svg)$/,
	include: config.paths.external,
	loader: 'file-loader',
	options: {
		publicPath: config.paths.relative,
		name: config.outputs.webfont.filename
	}
});
