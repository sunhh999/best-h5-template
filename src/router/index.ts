// import { useCachedViewStoreHook } from "@/store/modules/cachedView";
// import NProgress from "@/utils/progress";
// import setPageTitle from "@/utils/set-page-title";
// 这里就是vite-plugin-pages生成的路由信息，正常使用即可
import routes from "virtual:generated-pages";
import { createRouter, createWebHashHistory, type RouteLocationNormalized } from "vue-router";

// import routes from "./routes";

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export interface toRouteType extends RouteLocationNormalized {
	meta: {
		title?: string;
		noCache?: boolean;
	};
}

router.beforeEach((to: toRouteType, from, next) => {
	// NProgress.start();
	// 路由缓存
	// useCachedViewStoreHook().addCachedView(to);
	// 页面 title
	// setPageTitle(to.meta.title);
	next();
});

router.afterEach(() => {
	// NProgress.done();
});

export default router;
