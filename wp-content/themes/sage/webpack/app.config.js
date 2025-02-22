const path = require('path');

module.exports = (mode) => {
	const assetsObject = {
		common: [
			'./assets/scripts/Common.js'
		],
		vue: ['./assets/scripts/V-App.js'],
		home: './assets/scripts/Home.js',
		// gutenberg: './assets/scripts/GutenbergBlocks.js',
	};

	if (mode === 'production') {
		assetsObject.common.push('./assets/styles/common.scss');
	}

	return {
		/**
		 * Project paths.
		 *  /d/LocalByFlyWheel/default-timber---wordpress/app/public/wp-content/themes/timber-press-web-pack
		 * @type {Object}
		 */
		paths: {
			root: path.resolve(__dirname, '../'),
			public: path.resolve(__dirname, '../public'),
			sass: path.resolve(__dirname, '../assets/styles'),
			webfonts: path.resolve(__dirname, '../assets/webfonts'),
			images: path.resolve(__dirname, '../assets/images'),
			javascript: path.resolve(__dirname, '../assets/scripts'),
			vendor: path.resolve(__dirname, '../assets/vendor'),
			// temps: path.resolve(__dirname, '../assets/temp'),
			relative: '../',
			external: /node_modules|bower_components/
		},

		/**
     * Collection of application front-end assets.
     *
     * @type {Array}
     */
		assets: assetsObject,

		resolve: {
			extensions: ['.js', '.css', '.scss', '.jsx', '.vue'],
		},

		/**
		 * List of filename schemas for different
		 * application assets.
		 *
		 * @type {Object}
		 */
		outputs: {
			css: { filename: 'styles/[name].css' },
			webfont: { filename: 'webfonts/[name].[ext]' },
			image: { filename: 'images/[path][name].[ext]' },
			javascript: { filename: 'scripts/[name].js' },
			vendor: path.resolve(__dirname, '../public/vendor'),
			// temp: { filename: 'temp/[name].[ext]' }
		},

		/**
		 * List of libraries which will be provided
		 * within application scripts as external.
		 *
		 * @type {Object}
		 */
		externals: {
			jquery: 'jQuery',
			react: 'React',
			'react-dom': 'ReactDOM'
		},

		/**
		 * Settings of other build features.
		 *
		 * @type {Object}
		 */
		settings: {
			sourceMaps: mode !== 'production'
		}
	};
};
