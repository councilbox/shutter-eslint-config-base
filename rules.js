import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const shutterRules = {
	'@typescript-eslint/no-explicit-any': 0,
	'@typescript-eslint/no-unused-vars': [2, { 
		'argsIgnorePattern': '^_', // Ignora argumentos de funciones que empiezan con '_'
		'varsIgnorePattern': '^_', // Ignora variables que empiezan con '_'
		'caughtErrorsIgnorePattern': '^_', // Ignora variables de 'catch' que empiezan con '_'
		'ignoreRestSiblings': true // Ignorar las variables no utilizadas cuando se extraen propiedades de un objeto
	}],
	'array-bracket-spacing': ['error', 'never'],
	'arrow-parens': ['error', 'as-needed'],
	'arrow-spacing': 2,
	'block-spacing': [2, 'always'],
	'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
	'camelcase': 2,
	'comma-dangle': ['error', 'only-multiline'],
	'comma-spacing': [2, { 'before': false, 'after': true }],
	'comma-style': 2,
	'computed-property-spacing': 2,
	'constructor-super': 2,
	'func-call-spacing': 2,
	'generator-star-spacing': 2,
	'guard-for-in': 2,
	'indent': [2, 'tab', { 'SwitchCase': 1 }],
	'key-spacing': [2, {
		'singleLine': {
			'beforeColon': false,
			'afterColon': true
		},
		'multiLine': {
			'beforeColon': false,
			'afterColon': true
		}
	}],
	'keyword-spacing': 2,
	'linebreak-style': [2, 'unix'],
	'lines-around-comment': [2, {
		'allowBlockStart': true,
		'allowObjectStart': true,
		'beforeBlockComment': true,
		'beforeLineComment': false
	}],
	'max-len': ['warn', {
		code: 120,
		ignoreStrings: true,
		ignoreTemplateLiterals: true,
		tabWidth: 4
	}],
	'newline-after-var': 2,
	'newline-before-return': 2,
	'newline-per-chained-call': 0,
	'no-alert': 2,
	'no-caller': 2,
	'no-case-declarations': 2,
	'no-catch-shadow': 2,
	'no-class-assign': 2,
	'no-confusing-arrow': 2,
	'no-console': 1,
	'no-const-assign': 2,
	'no-debugger': 2,
	'no-dupe-args': 2,
	'no-dupe-keys': 2,
	'no-duplicate-case': 2,
	'no-div-regex': 2,
	'no-empty': [2, { 'allowEmptyCatch': true }],
	'no-empty-pattern': 2,
	'no-else-return': 0,
	'no-eval': 2,
	'no-extend-native': 2,
	'no-ex-assign': 2,
	'no-extra-bind': 2,
	'no-extra-boolean-cast': 2,
	'no-extra-label': 2,
	'no-extra-semi': 2,
	'no-fallthrough': 2,
	'no-func-assign': 2,
	'no-global-assign': 2,
	'no-implicit-coercion': 2,
	'no-implicit-globals': 2,
	'no-inner-declarations': 2,
	'no-invalid-regexp': 2,
	'no-invalid-this': 2,
	'no-irregular-whitespace': 2,
	'no-lonely-if': 2,
	'no-mixed-operators': 2,
	'no-mixed-spaces-and-tabs': 2,
	'no-multi-spaces': 2,
	'no-multi-str': 2,
	'no-multiple-empty-lines': [1, { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }],
	'no-native-reassign': 2,
	'no-negated-in-lhs': 2,
	'no-new': 2,
	'no-new-func': 2,
	'no-new-wrappers': 2,
	'no-obj-calls': 2,
	'no-proto': 2,
	'no-regex-spaces': 2,
	'no-restricted-imports': 2,
	'no-return-assign': 2,
	'no-self-assign': 2,
	'no-self-compare': 2,
	'no-sequences': 2,
	'no-shadow': 2,
	'no-shadow-restricted-names': 2,
	'no-spaced-func': 2,
	'no-sparse-arrays': 2,
	'no-this-before-super': 2,
	'no-throw-literal': 2,
	'no-unexpected-multiline': 2,
	'no-unmodified-loop-condition': 2,
	'no-unreachable': 2,
	'no-unused-vars': [2, { 
		'argsIgnorePattern': '^_', // Ignora argumentos de funciones que empiezan con '_'
		'varsIgnorePattern': '^_', // Ignora variables que empiezan con '_'
		'caughtErrorsIgnorePattern': '^_', // Ignora variables de 'catch' que empiezan con '_'
		'ignoreRestSiblings': true // Ignorar las variables no utilizadas cuando se extraen propiedades de un objeto
	}],
	'no-useless-call': 2,
	'no-useless-computed-key': 2,
	'no-useless-concat': 2,
	'no-useless-rename': 2,
	'no-var': 2,
	'no-whitespace-before-property': 2,
	'object-curly-newline': 0,
	'object-curly-spacing': [2, 'always'],
	'object-property-newline': [2, { 'allowMultiplePropertiesPerLine': true }],
	'prefer-const': 2,
	'prefer-rest-params': 2,
	'prefer-spread': 2,
	'prefer-template': 2,
	'quotes': [2, 'single', { 'avoidEscape': true }],
	'semi': [2, 'always'],
	'semi-spacing': 2,
	'space-before-blocks': 2,
	'space-before-function-paren': [2,
		{
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}],
	'space-in-parens': [2, 'never'],
	'spaced-comment': [2, 'always'],
	'strict': 2,
	'valid-typeof': 2,
	'yoda': 2
};

const rules = [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: { ...shutterRules }
	}
];

export default rules;