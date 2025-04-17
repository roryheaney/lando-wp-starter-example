/* eslint-disable no-unused-vars */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
// eslint-disable-next-line import/no-extraneous-dependencies
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
// eslint-disable-next-line import/no-extraneous-dependencies, , prettier/prettier
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies,
const CopyPlugin = require( 'copy-webpack-plugin' );

// Conditionally include the style entry point for production only
const isProduction = process.env.NODE_ENV === 'production';
const entryPoints = {
	main: path.resolve( __dirname, 'src/js/index.js' ),
	admin: path.resolve( __dirname, 'src/js/admin.js' ),
};
if ( isProduction ) {
	// Add style entry in production because we are using sass from @wordpress/scripts
	// and we need to compile it separately
	entryPoints.style = path.resolve( __dirname, 'src/scss/main.scss' );
}
module.exports = {
	...defaultConfig,
	entry: entryPoints,
	output: {
		filename: 'js/[name].js', // Output JS to dist/js/
		path: path.resolve( __dirname, 'dist' ),
	},
	plugins: [
		// Filter out existing MiniCssExtractPlugin to avoid duplicates
		...defaultConfig.plugins.filter(
			( plugin ) => ! ( plugin instanceof MiniCssExtractPlugin )
		),
		// Explicitly add MiniCssExtractPlugin with custom output path
		new MiniCssExtractPlugin( {
			filename: 'css/[name].css', // Output CSS to dist/css/
		} ),
		new CopyPlugin( {
			patterns: [
				{
					from: path.resolve( __dirname, 'src/images' ),
					to: 'images/[path][name].[ext]',
				},
			],
		} ),
		// ...defaultConfig.plugins,
		new BrowserSyncPlugin(
			{
				// BrowserSync options
				host: 'localhost',
				port: 3000, // Explicitly set port
				proxy: 'https://fancy-squares.lndo.site/', // Your local WordPress site URL
				files: [
					'dist/**/*.css',
					{
						match: [
							'*.php',
							'template/*.html',
							'patters/*.php',
							'parts/*.html',
							'partials/**/*.php',
							'lib/**/*.php',
							'dist/**/*.js',
						],
					},
				],
				reloadDelay: 250,
			},
			{
				injectChanges: true, // Enable CSS injection
				injectCss: true, // Explicitly enable CSS injection
			}
		),
	],
};
