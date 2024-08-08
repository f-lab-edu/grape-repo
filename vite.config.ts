import babel from "@rollup/plugin-babel";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [
			react(),
			TanStackRouterVite(),
			tsconfigPaths(),
			styleX(),
			babel({
				babelHelpers: "bundled",
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				presets: ["@babel/preset-react"],
				plugins: [
					[
						"@stylexjs/babel-plugin",
						{
							dev: mode !== "production",
							test: false,
							unstable_moduleResolution: {
								type: "commonJS",
								rootDir: __dirname,
							},
						},
					],
				],
			}),
		],
	};
});
