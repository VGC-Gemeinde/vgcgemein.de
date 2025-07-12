import { css, html, LitElement } from "lit";

class Impressum extends LitElement {
	static styles = css`
		.content {
			margin: auto;
			max-width: var(--max-content-width);
			padding: var(--content-padding);
			box-sizing: border-box;
			
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--content-padding);

      color: var(--falinks-blue);
		}

  `;

	render() {
		return html`
			<vg-hcf-layout>
        <div class="content">
          <h1>Impressum</h1>
        </div>
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-impressum", Impressum);