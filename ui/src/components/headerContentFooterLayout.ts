import { css, html, LitElement } from "lit";
import Discord from "@fortawesome/fontawesome-free/svgs/brands/discord.svg";
import YouTube from "@fortawesome/fontawesome-free/svgs/brands/youtube.svg";
import Twitter from "@fortawesome/fontawesome-free/svgs/brands/square-x-twitter.svg";
import Twitch from "@fortawesome/fontawesome-free/svgs/brands/twitch.svg";

class HeaderContentFooterLayout extends LitElement {
	static styles = css`
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container * {
    width: 100%;
  }
  
  .container main {
    flex-grow: 1;
  }

	.socials {
		display: flex;
		flex-direction: row;
		gap: 10px;
		padding-right: 5px;
	}

	.socials svg {
		fill: var(--pawmi-orange);
		height: 25px;
		width: 25px;
	}

	@media screen and (min-width: 992px) {
		.socials svg {
			height: 20px;
			width: 20px;
		}
	}
  `;

	render() {
		return html`
      <div class="container">
        <vg-header>
          <slot name="navigation"></slot>
				  <div class="socials">
				  	<a
				  		target="_blank"
				  		rel="noopener noreferrer"
				  		href="https://discord.com/invite/Qb8RMupASu"
				  	>${Discord}</a>
				  	<a
				  		target="_blank"
				  		rel="noopener noreferrer"
				  		href="https://www.youtube.com/@VGC_Gemeinde"
				  	>${YouTube}</a>
				  	<a
				  		target="_blank"
				  		rel="noopener noreferrer"
				  		href="https://twitter.com/vgc_gemeinde"
				  	>${Twitter}</a>
				  	<a
				  		target="_blank"
				  		rel="noopener noreferrer"
				  		href="https://www.twitch.tv/vgc_gemeinde"
				  	>${Twitch}</a>
				  </div>
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
