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
      justify-content: space-between;
			height: 100%;
		}

		.header-inner * {
			max-height: 100%;
		}

		.header-inner img {
			height: 100%;
		}

		.header-inner nav {
			align-self: center;
			display: flex;
			flex-direction: row;
			gap: 10px;
			align-items: center;
		}
	`;

	render() {
		return html`
      <header class="header">
				<div class="header-inner">
					<a href="/">
						<img src="/assets/images/logo-blue.svg" alt="VGC Gemeinde">
					</a>
					<nav>
						<slot></slot>
					</nav>
				</div>
			</header>
    `;
	}
}

customElements.define("vg-header", Header);
