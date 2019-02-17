module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'comma-dangle': 'off',
		'no-trailing-spaces': 'off',
		'no-unused-vars': 'off',
		'implicit-arrow-linebreak': 'off',
	},
};
