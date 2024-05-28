// rollup.config.js
import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from 'rollup-plugin-scss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


import pkg from "./package.json" assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			// typescript({ tsconfig: "./tsconfig.json" }),
			typescript(),
			scss(),
			// terser()
		]
	},
	{
		input: "src/index.ts",
		output: [{ file: `./build/index.d.ts`, format: "esm" }],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/],
	},
];