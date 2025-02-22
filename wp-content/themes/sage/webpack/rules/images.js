/**
 * Internal application image files. This rule exceptionally don't emit its files,
 * because they are handled by copy and image-minify webpack plugins.
 */
module.exports = (config) => ({
	test: /\.(png|jpe?g|gif|svg)$/,
	include: config.paths.images,
	loader: 'file-loader',
	options: {
		name: config.outputs.image.filename,
		publicPath: (url) => {
			// `resourcePath` is original absolute path to asset
			// `context` is directory where stored asset (`rootContext`) or `context` option

			// To get relative path you can use
			// const relativePath = path.relative(context, resourcePath);
			const pathArray = url.split('/');
			pathArray.splice(0, 2);
			const path = pathArray.join('/');
			return `../${path}`;
		},
		emitFile: false
	}
});
