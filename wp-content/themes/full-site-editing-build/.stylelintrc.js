module.exports = {
	extends: [ '@wordpress/stylelint-config/scss' ],
	rules: {
		// Custom rules here
		'selector-class-pattern': '^[a-z]+(-[a-z]+)*$',
		'max-nesting-depth': 3,
	},
	ignoreFiles: [ 'node_modules/**/*', 'build/**/*', 'dist/**/*' ],
};
