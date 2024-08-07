import stylexPlugin from "@stylexjs/rollup-plugin";

const config = {
	input: "./index.js",
	output: {
		file: "./.build/bundle.js",
		format: "es",
	},
	plugins: [
		stylexPlugin({
			fileName: "./.build/stylex.css",
			dev: false,
			classNamePrefix: "x",
			unstable_moduleResolution: {
				type: "commonJS",
				rootDir: __dirname,
			},
		}),
	],
};

export default config;
