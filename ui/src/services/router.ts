import { Router } from "@vaadin/router";

export const router = new Router();
router.setRoutes([
	{ path: "/", component: "vg-home" },
	{ path: "/impressum", component: "vg-impressum" },
	{ path: "/datenschutz", component: "vg-datenschutz" },
	{ path: "(.*)", component: "vg-not-found" },
]);
