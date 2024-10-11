// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import rules from './rules.js';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		rules
	}
);
