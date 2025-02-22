module.exports = {
	root: true,
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	env: {
		node: true,
		// browser: true,
		// es6: true
	},
	extends: ['airbnb-base', 'plugin:vue/strongly-recommended'],
	plugins: ['prettier'],
	// The rules are personal preference.
	// These rules are just an example of the rules I currently have configured.
	rules: {
		'no-console': 'warn',
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'max-len': ['error', { code: 500, ignoreStrings: true, ignoreUrls: true }],
		'import/no-unresolved': 0,
		'linebreak-style': 0,
		'comma-dangle': 0,
		'import/prefer-default-export': 0,
		'no-unused-expressions': ['error', { allowTernary: true }],
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'object-curly-newline': ['error', { ObjectPattern: 'never' }],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'never'
			}
		],
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		]
	}
};
