import type { ESBuildOptions } from "vite";

import { isDevFn, isProdFn } from "../utils";

export function createEsbuildConfig(isDeleteCon: boolean, mode: string) {
	let config = {};
	if (isDeleteCon && isProdFn(mode)) {
		config = {};
	}

	if (isDeleteCon && isDevFn(mode)) {
		config = {
			drop: ["console", "debugger"]
		};
	}

	return config as ESBuildOptions;
}
