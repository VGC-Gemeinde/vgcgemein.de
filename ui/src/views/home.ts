
import { css, html, LitElement } from "lit";

class Home extends LitElement {
	static styles = css``;

	render() {
		return html`
			<vg-hcf-layout>
				Home - VGC Gemeinde
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-home", Home);