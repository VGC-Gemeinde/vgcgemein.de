declare module "*.svg" {
	import type { HTMLTemplateResult } from "lit";

	const content: HTMLTemplateResult;
	export default content;
}
