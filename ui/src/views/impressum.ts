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
			align-items: flex-start;

      color: var(--falinks-blue);
      gap: 30px;
		}

    h1, h2 {
      margin: 0;
    }
    
    td {
      padding-right: 30px;
      padding-bottom: 10px;
      vertical-align: top;
    }

    .impressum {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .data-identifier {
      font-weight: 500;
    }
  `;

	render() {
		return html`
			<vg-hcf-layout>
        <div class="content">
          <h1>Impressum</h1>
          <div class="impressum">
            <h2>VGC Gemeinde</h2>
            <table>
              <tr>
                <td class="data-identifier">Ansprechpartner</td>
                <td>Alexander Kampf</td>
              </tr>
              <tr>
                <td class="data-identifier">Email</td>
                <td>webmaster@vgcgemein.de</td>
              </tr>
              <tr>
                <td class="data-identifier">Anschrift</td>
                <td>
                  Krafftstr. 8<br>
                  63065 Offenbach am Main<br>
                  Deutschland
                </td>
              </tr>
            </table>
          </div>
        </div>
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-impressum", Impressum);