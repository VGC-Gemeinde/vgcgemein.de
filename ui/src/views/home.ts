
import { css, html, LitElement } from "lit";
import Discord from "@fortawesome/fontawesome-free/svgs/brands/discord.svg";
import YouTube from "@fortawesome/fontawesome-free/svgs/brands/youtube.svg";
import Twitter from "@fortawesome/fontawesome-free/svgs/brands/square-x-twitter.svg";
import Twitch from "@fortawesome/fontawesome-free/svgs/brands/twitch.svg";

class Home extends LitElement {
	static styles = css`
		.odd-section {
			color: var(--wooloo-white);
			background: var(--falinks-blue);
		}

		.odd-to-even {
			height: calc(0.015 * 100vw);
			background: linear-gradient(
				to bottom right,
				var(--falinks-blue) 0%,
				var(--falinks-blue) 49%,
				var(--wooloo-white) 50%,
				var(--wooloo-white) 100%
			);
		}

		.content {
			margin: auto;
			max-width: var(--max-content-width);
			padding: var(--content-padding);
			box-sizing: border-box;
			
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.teaser {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;
			margin: 20px;
		}

		.teaser img {
			height: var(--teaser-size);
		}

		.join {
			border: 3px solid var(--pawmi-orange);
			border-radius: 20px;
			padding-top: 10px;
			padding-bottom: 8px;
			padding-left: 15px;
			padding-right: 15px;
			color: var(--falinks-blue);
			font-weight: 500;
			font-size: 1.5em;
			text-decoration: none;
			background: var(--wooloo-white);
			transition: background 0.5s;
		}

		.join:hover {
			background: var(--pawmi-orange);
		}
	`;

	render() {
		return html`
			<vg-hcf-layout>
				<div class="odd-section">
					<div class="content">
						<div class="teaser">
							<img src="/assets/images/logo-full-white.svg" alt="VGC Gemeinde">
							<a
								class="join"
								target="_blank"
								rel="noopener noreferrer"
								href="https://discord.com/invite/Qb8RMupASu"
							>Discord beitreten</a>
						</div>
					</div>
				</div>
				<div class="odd-to-even"></div>
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-home", Home);