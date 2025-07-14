import { html, LitElement } from "lit";

class NotFound extends LitElement {
	render() {
		return html`
      404 not found
    `;
	}
}

customElements.define("vg-not-found", NotFound);
