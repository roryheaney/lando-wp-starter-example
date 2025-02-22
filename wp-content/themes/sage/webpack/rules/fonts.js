// Modified fonts.js to export a function
module.exports = (config) => ({
	test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/,
	include: config.paths.webfonts,
	loader: 'file-loader',
	options: {
		publicPath: config.paths.relative,
		name: config.outputs.webfont.filename,
	}
});
