// import path from 'path'
import { VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import type { Plugin, PluginOption } from "vite";
import PagesPlugin from "vite-plugin-pages";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export function createVitePlugins(viteEnvs: ViteEnv) {
	const vitePiugins: (Plugin | Plugin[] | PluginOption[])[] = [
		vue(),

		vueJsx(),

		PagesPlugin({
			pagesDir: "src/views", // 目录存储
			extensions: ["vue"], // 只希望处理 Vue 组件

			// 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
			exclude: ["**/components/*.vue"]
		}),
		// vant 组件自动按需引入
		Components({
			dts: "types/components.d.ts",
			resolvers: [VantResolver()]
		}),
		// 允许 setup 语法糖上添加组件名属性
		vueSetupExtend()
	];

	return vitePiugins;
}
