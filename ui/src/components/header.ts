import { css, html, LitElement } from "lit";

class Header extends LitElement {
	static styles = css`
		.header {
			display: flex;
			flex-direction: row;
      justify-content: var(--header-orientation);
			height: 50px;
      padding: var(--header-padding);
      box-sizing: border-box;
      border-bottom: 2px solid var(--pawmi-orange); 
		}

		.header * {
			max-height: 100%;
		}
	`;

	render() {
		return html`
      <header class="header">
				<a href="/">
					<img src="/assets/images/logo.png" alt="VGC Gemeinde">
				</a>
			</header>
    `;
	}
}

customElements.define("vg-header", Header);
