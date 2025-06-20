import { html, LitElement } from "lit";
import { router } from "./services/router";

class App extends LitElement {
	#initRouter() {
		const routerOutlet = this.shadowRoot?.querySelector("#router-outlet");
		if (!routerOutlet) {
			return;
		}
		router.setOutlet(routerOutlet);
	}

	async firstUpdated() {
		this.#initRouter();
	}

	render() {
		return html`
      <div id="router-outlet"></div>
    `;
	}
}

customElements.define("vg-app", App);
