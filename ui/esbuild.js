import fs from "node:fs";
import * as esbuild from "esbuild";

const svgLoader = {
	name: "svg-loader",
	setup(build) {
		// Load ".txt" files and return an array of words
		build.onLoad({ filter: /\.svg$/ }, async (args) => {
			const text = await fs.promises.readFile(args.path, "utf8");
			return {
				contents: `import { html } from "lit";
        const template = html\`${text}\`;
        export default template;
        `,
				loader: "js",
			};
		});
	},
};

await esbuild.build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	outdir: "dist",
	format: "esm",
	plugins: [svgLoader],
});
