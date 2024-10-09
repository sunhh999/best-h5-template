import type { RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";

// import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "root",
		component: Layout,
		redirect: { name: "Demo" },
		children: [
			{
				path: "about",
				name: "About",
				component: () => import("@/views/about/index.vue"),
				meta: {
					title: "关于",
					noCache: true
				}
			}
		]
	}
];

export default routes;
