module.exports = (config) => ({
	include: config.paths.scripts,
	exclude: config.paths.sass,
	test: /\.css$/,
	use: [
		'vue-style-loader',
		'css-loader'
	]
});
