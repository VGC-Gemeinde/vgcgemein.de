declare module "*.svg" {
	import type { SVGTemplateResult } from "lit";

	const content: SVGTemplateResult;
	export default content;
}
