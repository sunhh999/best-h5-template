import { createApp } from "vue";

import Router from "@/router";

import App from "./App.vue";
import "./style.css";

const globsApp = createApp(App);

globsApp
	.use(Router)

	.mount("#app");
