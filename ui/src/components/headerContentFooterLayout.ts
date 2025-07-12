import { css, html, LitElement } from "lit";

class HeaderContentFooterLayout extends LitElement {
	static styles = css`
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container * {
    width: 100%;
  }`;

	render() {
		return html`
      <div class="container">
        <vg-header>
          <slot name="navigation"></slot>
        </vg-header>
        <main>
          <slot></slot>
        </main>
        <vg-footer></vg-footer>
      </div>
    `;
	}
}

customElements.define("vg-hcf-layout", HeaderContentFooterLayout);
