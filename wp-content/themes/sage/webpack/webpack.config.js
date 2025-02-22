const path = require('path');
const fs = require('fs');
const isdev = require('isdev');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-v3-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { merge } = require('webpack-merge');

const javascriptRule = require('./rules/javascript');
const vuejs = require('./rules/vuejs');

// const config = require('./app.config');
const getAppConfig = require('./app.config');
const createSassRule = require('./rules/sass');
const createFontsRule = require('./rules/fonts');
const createImagesRule = require('./rules/images');
// const createSvgSpriteRule = require('./rules/svg.sprites');
const createVueCss = require('./rules/vuecss');
const createVueScss = require('./rules/vuescss');
const createExternalFontsRule = require('./rules/external.fonts');
const createExternalImagesRule = require('./rules/external.images');

// const MODE_BEING_RUN = process.env.npm_lifecycle_event;
module.exports = (env, argv) => {
	const mode = argv.mode || 'development';
	const configFunction = getAppConfig(mode);
	const config = configFunction; // Get the configuration for the specific mode
	const sassRule = createSassRule(mode);
	const fontsRule = createFontsRule(config);
	const imagesRule = createImagesRule(config);
	// const svgSpriteRule = createSvgSpriteRule(config);
	const vuecss = createVueCss(config);
	const vuescss = createVueScss(config);
	const externalFontsRule = createExternalFontsRule(config);
	const externalImagesRule = createExternalImagesRule(config);

	const webpackConfig = {
		mode: argv.mode,

		/**
			* Should the source map be generated?
			* @type {string|undefined}
		*/
		devtool: isdev && config.settings.sourceMaps ? 'cheap-module-source-map' : undefined,

		/**
			* Application entry files for building.
			* @type {Object}
		*/
		entry: config.assets,

		// target: ['web', 'es6'],

		/**
			* Output settings for application scripts.
			* @type {Object}
		*/
		output: {
			path: config.paths.public,
			filename: config.outputs.javascript.filename,
		},

		/**
			* split js for production js optimimzation
			* @type {Object}
		*/
		optimization: {
			nodeEnv: 'production',
			// minimize: true,
			minimizer: [
			// eslint-disable-next-line no-undef
				new TerserPlugin({
					test: /\.js(\?.*)?$/i,
					parallel: true
				}),
			],
		},

		cache: {
			type: 'memory'
		// type: 'filesystem',
		// cacheLocation: path.resolve(__dirname, '.test_cache'),
		},

		/**
			* External objects which should be accessible inside application scripts.
			* @type {Object}
		*/
		externals: config.externals,

		/**
			* Performance settings to speed up build times.
			* @type {Object}
		*/
		performance: {
			hints: false,
		},

		/**
			* Build rules to handle application assset files.
			* @type {Object}
		*/
		module: {
			rules: [
				vuecss,
				vuescss,
				vuejs,
				sassRule,
				fontsRule,
				imagesRule,
				javascriptRule,
				externalFontsRule,
				externalImagesRule,
				// svgSpriteRule,
			],
		},

		/**
			* Vue integration
		*/
		resolve: {
			alias: {
				vue$: argv.mode === 'production' ? 'vue/dist/vue.cjs.prod.js' : 'vue/dist/vue.cjs.js',
				'@': path.resolve(__dirname, 'assets'),
			// vue: '@vue/compat',
			},
		},

		/**
			* Common plugins which should run on every build.
			* @type {Array}
		*/
		plugins: [
			new SvgSpriteLoaderPlugin({ plainSprite: true }),
			new webpack.DefinePlugin({
				__VUE_PROD_DEVTOOLS__: argv.mode !== 'production',
			}),
			new CleanWebpackPlugin({
				default: config.paths.root,
				cleanOnceBeforeBuildPatterns: config.paths.public,
			}),
			new VueLoaderPlugin(),
			new webpack.LoaderOptionsPlugin({
				minimize: !isdev,
			// postcss: {}
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),
			...(argv.mode === 'production' ? [
				new MiniCssExtractPlugin({
				// This outputs your CSS to the public/styles directory with the name of the entry point
					filename: '../public/styles/[name].css',
				}),
			] : []),
			// ESLint configuration
			new ESLintPlugin({
				extensions: ['js', 'vue', 'jsx'],
				formatter: 'table',
			}),
			// new StyleLintPlugin(),
			new CopyPlugin({
				patterns: [
					{
						from: config.paths.images,
						to: config.outputs.image.filename,
					},
					{
						from: config.paths.webfonts,
						to: config.outputs.webfont.filename,
					},
					{
						from: config.paths.vendor,
						to: config.outputs.vendor,
					},
				// {
				// from: config.paths.temps,
				// to: config.outputs.temp.filename,
				// },
				],
			}),
			new BrowserSyncPlugin(
				{
					host: 'localhost',
					proxy: 'https://sage-10.wordpress.test/',
					// https: true,
					files: [
						'public/**/*.css',
						{
							match: [
								'*.php',
								'template-parts/*.php',
								'template-parts/**/*.php',
								'template-parts/**/**/*.php',
								'partials/**/*.php',
								'lib/**/*.php',
								'public/**/*.js'
							],
						},
					],
					reloadDelay: 250
				},
				{
					injectChanges: true,
					injectCss: true,
				// reload: false
				}
			),
		],
	};

	// Include devServer configuration only for development mode
	// if (mode === 'development') {
	// 	webpackConfig.devServer = {
	// 		https: {
	// 			key: fs.readFileSync('./localhost.key'),
	// 			cert: fs.readFileSync('./localhost.crt'),
	// 		},
	// 		// ... other devServer settings
	// 	};
	// }

	return merge(webpackConfig, {
		// Additional specific configurations can be merged here if needed
	});
};
