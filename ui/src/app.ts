import { html, LitElement } from "lit";

class App extends LitElement {
	render() {
		return html`
      <div id="router-outlet">
				VGC Gemeinde
			</div>
    `;
	}
}

customElements.define("vgc-gemeinde-app", App);
