import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

import pluginJs from "@eslint/js";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		rules: {
			"vue/script-setup-uses-vars": "error",
			"vue/multi-word-component-names": "off",
			"@typescript-eslint/ban-ts-ignore": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-empty-function": "off",
			"vue/custom-event-name-casing": "off",
			"no-use-before-define": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: ".*", args: "none" }],
			"@typescript-eslint/no-duplicate-enum-values": "off",
			"no-unused-vars": [
				"error",
				// we are only using this rule to check for unused arguments since TS
				// catches unused variables but not args.
				{ varsIgnorePattern: ".*", args: "none" }
			],
			"space-before-function-paren": "off",
			"vue/attributes-order": "off",
			"vue/one-component-per-file": "off",
			"vue/html-closing-bracket-newline": "off",
			"vue/max-attributes-per-line": "off",
			"vue/multiline-html-element-content-newline": "off",
			"vue/singleline-html-element-content-newline": "off",
			"vue/attribute-hyphenation": "off",
			"vue/require-default-prop": "off",
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always",
						normal: "never",
						component: "always"
					},
					svg: "always",
					math: "always"
				}
			],
			"vue/multi-word-component-names": [
				"error",
				{
					ignores: ["index"] // 需要忽略的组件名
				}
			]
		},
		ignores: [
			//
			"*.sh",
			"node_modules",
			"*.md",
			"*.woff",
			"*.ttf",
			".vscode",
			".idea",
			"dist",
			"/public",
			"/docs",
			".husky",
			".local",
			"/bin",
			"components.d.ts"
		]
	}
];
