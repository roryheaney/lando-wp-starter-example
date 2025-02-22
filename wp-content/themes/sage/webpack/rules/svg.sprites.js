// eslint-disable-next-line arrow-body-style
module.exports = (config) => {
	// Log the entire config object
	// console.log('SVG Sprite Loader Config:', config.paths.images);

	return {
		// test: /\.svg$/,
		// loader: 'svg-sprite-loader',

		test: /\.svg$/,
		include: config.paths.images,
		exclude: config.paths.webfonts,
		oneOf: [
			{
				// Apply svg-sprite-loader for SVGs imported in JS files
				issuer: /\.[jt]sx?$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: { extract: true, spriteFilename: 'sprites.svg' }
					},
					'svgo-loader'
				]
			},
			{
				// Apply file-loader for SVGs in stylesheets
				issuer: /\.(scss|css)$/,
				loader: 'file-loader'
			}
		]
	};
};
