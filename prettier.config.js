export default {
	useTabs: true,
	tabWidth: 1,
	singleQuote: false,
	quoteProps: "consistent",
	htmlWhitespaceSensitivity: "ignore",

	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
	tailwindFunctions: ["tv"],
};
