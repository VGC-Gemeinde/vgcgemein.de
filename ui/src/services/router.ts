import { Router } from "@vaadin/router";

export const router = new Router();
router.setRoutes([
	{ path: "/", component: "vg-home" },
	{ path: "(.*)", component: "vg-not-found" },
]);
