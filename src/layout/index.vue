<script setup lang="ts">
// import { computed } from "vue";
import { LayoutNavBar, LayoutTabbar } from "@/components";

// import { useDarkMode } from "@/hooks/useToggleDarkMode";
// import { useCachedViewStoreHook } from "@/store/modules/cachedView";

// const cachedViews = computed(() => {
// 	return useCachedViewStoreHook().cachedViewList;
// });
</script>

<template>
	<div class="app-wrapper">
		<!-- <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'"> -->
		<van-config-provider>
			<LayoutTabbar />
			<router-view v-slot="{ Component }">
				<!-- <keep-alive :include="cachedViews"> -->
				<component :is="Component" />
				<!-- </keep-alive> -->
			</router-view>
			<LayoutNavBar />
		</van-config-provider>

		<!-- </van-config-provider> -->
	</div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.app-wrapper {
	// .clearfix();
	position: relative;
	height: 100%;
	width: 100%;
}
</style>
