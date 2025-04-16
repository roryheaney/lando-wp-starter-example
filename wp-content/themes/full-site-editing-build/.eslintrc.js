module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		// Custom rules here
		'no-console': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'prefer-template': 'error',
	},
	ignorePatterns: [ 'node_modules/**/*', 'build/**/*', 'dist/**/*' ],
};
