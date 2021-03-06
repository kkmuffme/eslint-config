module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'./index',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/forbid-prop-types': [
			'error',
			{
				forbid: ['any'],
				checkContextTypes: true,
				checkChildContextTypes: true,
			},
		],
		// prop spreading is dangerous but has its use cases
		'react/jsx-props-no-spreading': 1,
		// prefer arrow functions for defining components
		'react/function-component-definition': [
			1,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'react/prop-types': 0,
			},
		},
	],
};
