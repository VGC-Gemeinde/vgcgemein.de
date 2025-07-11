import { css, html, LitElement } from "lit";

class Header extends LitElement {
	static styles = css`
		.header {
			height: 50px;
      padding: var(--header-padding);
      box-sizing: border-box;
      border-bottom: 3px solid var(--pawmi-orange); 
		}

		.header-inner {
			display: flex;
			flex-direction: row;
			max-width: var(--max-content-width);
			margin: auto;
      justify-content: flex-start;
			height: 100%;
		}

		.header-inner * {
			max-height: 100%;
		}

		.header-inner img {
			height: 100%;
		}
	`;

	render() {
		return html`
      <header class="header">
				<div class="header-inner">
					<a href="/">
						<img src="/assets/images/logo-blue.svg" alt="VGC Gemeinde">
					</a>
				</div>
			</header>
    `;
	}
}

customElements.define("vg-header", Header);
