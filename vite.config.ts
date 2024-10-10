import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv, defineConfig } from "vite";

import { createVitePlugins, createEsbuildConfig, createProxy } from "./build/index";
import { wrapperEnv, pathResolve } from "./build/utils";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);

	const viteEnv = wrapperEnv(env);
	const { VITE_PUBLIC_PATH, VITE_GLOB_APP_PORT, VITE_PROXY, VITE_DELETE_CONSOLE } = viteEnv;

	return {
		base: VITE_PUBLIC_PATH,
		plugins: createVitePlugins(env),
		esbuild: createEsbuildConfig(VITE_DELETE_CONSOLE, mode),
		server: {
			host: true,
			port: VITE_GLOB_APP_PORT,
			proxy: createProxy(VITE_PROXY)
		},
		resolve: {
			alias: [
				{
					find: /\/#\//,
					replacement: pathResolve("types")
				},
				{
					find: "@",
					replacement: pathResolve("src")
				}
			],
			dedupe: ["vue"]
		},
		build: {
			target: "es2015",
			cssTarget: "chrome80",
			outDir: "dist",
			reportCompressedSize: false,
			chunkSizeWarningLimit: 2000,
			rollupOptions: {
				output: {
					chunkFileNames: "static/js/[name]-[hash].js",
					entryFileNames: "static/js/[name]-[hash].js",
					assetFileNames: "static/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
