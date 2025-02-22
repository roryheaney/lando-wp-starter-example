/**
 * Internal application javascript files.
 * Supports ES6 and JSX by compiling scripts with Babel.
 */
module.exports = {
	test: /\.(js|jsx)$/, // Updated to include JSX files
	exclude: /node_modules/,
	use: [
		{
			loader: 'babel-loader',
			options: {
				presets: [
					[
						'@babel/preset-env',
						{
							targets: {
								browsers: [
									'>0.25%',
									'not ie 11',
									'not op_mini all'
								],
							}
						}
					],
					'@babel/preset-react' // Added React preset for JSX support
				]
			}
		},
	],
};
