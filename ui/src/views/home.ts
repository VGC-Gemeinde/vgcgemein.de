
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

		.even-section {
			color: var(--falinks-blue);
			background: var(--wooloo-white);
		}

		.odd-to-even {
			height: calc(0.01 * 100vw);
			background: linear-gradient(
				to bottom right,
				var(--falinks-blue) 0%,
				var(--falinks-blue) 49%,
				var(--wooloo-white) 50%,
				var(--wooloo-white) 100%
			);
		}

		.even-to-odd {
			height: calc(0.01 * 100vw);
			background: linear-gradient(
				to bottom right,
				var(--wooloo-white) 0%,
				var(--wooloo-white) 49%,
				var(--falinks-blue) 50%,
				var(--falinks-blue) 100%
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
			gap: var(--content-padding);
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

		.text-with-image {
			display: flex;
			flex-direction: row;
			align-items: center;
			max-width: 850px;
			gap: 30px;
		}

		.text-with-image h1 {
			border-bottom: 2px solid var(--pawmi-orange);
		}

		.text-with-image img {
			width: 55%;
			filter: drop-shadow(0px 0px 5px var(--zekrom-black));
		}

		@media screen and (max-width: 992px) {
			.text-with-image img {
				display: none;
			}
		}

		.text-with-heading {
			display: flex;
			flex-direction: column;
			gap: 10px;
			line-height: 1.3;
		}

		h1 {
			margin: 0;
		}
		p {
			margin: 0;
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
				<div class="even-section">
					<div class="content">
						<div class="text-with-image">
							<div class="text-with-heading">
								<h1>Community</h1>
								<p>
									Wir sind mit über 800 Mitgliedern die größte deutschprachige VGC-Community überhaupt. Seit Ende 2022 bringen wir Pokemon-Begeisterte
									aus der ganzen DACH-Region zusammen für Tuniere, Community-Events, Trainingssession und mehr. Der aktive Discord-Server ist ein
									Austauschort für alle, egal ob kompetitiv oder casual. Als Community haben wir ein Gemeinschaftsgefühl gefunden das es so vor der Gründung
									der VGC Gemeinde nicht gab.
								</p>
							</div>
							<img src="/assets/images/community.jpeg">
						</div>
					</div>
				</div>
				<div class="even-to-odd"></div>
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-home", Home);