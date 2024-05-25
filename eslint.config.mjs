import eslintPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
	...eslintPluginAstro.configs.all,
	{
		rules: {
			...eslintPrettier.rules,
			"astro/no-set-html-directive": "off",
		},
	},
	eslintPluginPrettierRecommended,
];
