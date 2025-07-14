import { css, html, LitElement } from "lit";

class Home extends LitElement {
	static styles = css`
		.odd {
			color: var(--wooloo-white);
			background: var(--falinks-blue);
		}

		.even {
			color: var(--falinks-blue);
			background: var(--wooloo-white);
		}

		.section {
			padding-top: 30px;
			padding-bottom: 30px;
		}

		@media screen and (max-width: 992px) {
			.section {
				padding-top: 10px;
				padding-bottom: 10px;
			}
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

		.even-to-odd {
			height: calc(0.015 * 100vw);
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
			gap: 30px;
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

		.odd .text-with-image {
			flex-direction: row-reverse;
		}

		.text-with-image h1 {
			border-bottom: 2px solid var(--pawmi-orange);
		}

		.text-with-image img {
			width: 55%;
			filter: drop-shadow(0px 0px 5px var(--zekrom-black));
		}

		.text-with-image .video {
			position: relative;
			min-width: 55%;
			max-width: 55%;
			height: 350px;
			filter: drop-shadow(0px 0px 5px var(--zekrom-black));
		}

		.video iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		@media screen and (max-width: 992px) {
			.text-with-image {
				flex-direction: column !important;
			}

			.text-with-image img {
				width: 100%;
			}

			.text-with-image .video {
				min-width: 100%;
				max-width: 100%;
			}

			.hide-for-mobile {
				display: none;
			}
		}

		.text-with-image a {
			color: var(--pawmi-orange);
		}

		.text-with-heading {
			display: flex;
			flex-direction: column;
			gap: 10px;
			line-height: 1.3;
		}

		.admins {
			display: flex;
			flex-direction: row;
			gap: 20px;
		}

		.admin {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 10px;
		}

		.admin img {
			width: 125px;
			height: 125px;
			border-radius: 50%;
			margin-bottom: 10px;
			gap: 3px;
		}

		.name {
			font-weight: 700;
		}

		.role {
			font-size: 12px;
			font-weight: 400;
		}

		h1 {
			margin: 0;
		}
		p {
			margin: 0;
		}
	

		.nav-link {
			font-weight: 500;
			color: var(--falinks-blue);
		}
	`;

	handleNavigation(id: string) {
		return () =>
			this.renderRoot.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return html`
			<vg-hcf-layout>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#community" @click="${this.handleNavigation("#community")}">Community</a>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#anfaenge" @click="${this.handleNavigation("#anfaenge")}">Anfänge</a>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#regionals" @click="${this.handleNavigation("#regionals")}">Regionals</a>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#bundesliga" @click="${this.handleNavigation("#bundesliga")}">Bundesliga</a>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#ep-teiler" @click="${this.handleNavigation("#ep-teiler")}">Podcast</a>
				<a class="nav-link hide-for-mobile" slot="navigation" href="#staff-team" @click="${this.handleNavigation("#staff-team")}">Staff</a>
				<div class="odd section">
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
				<div class="even section">
					<div class="content">
						<div id="community" class="text-with-image">
							<div class="text-with-heading">
								<h1>Community</h1>
								<p>
									Wir sind mit knapp 900 Mitgliedern die größte deutschsprachige VGC-Community. Seit Ende 2022 bringen wir Pokemon-Begeisterte
									aus der ganzen DACH-Region zusammen für Turniere, Community-Events, Trainingssessions und mehr. Unser aktiver Discord-Server ist ein
									Austauschort für alle, egal ob Neuling oder Profi. Unsere größte Motivation ist es, das Gemeinschaftsgefühl der deutschsprachigen
									Community weiter zu stärken. Werde auch du Teil der <a
										target="_blank"
										rel="noopener noreferrer"
										href="https://discord.com/invite/Qb8RMupASu"
									>VGC Gemeinde</a>.
								</p>
							</div>
							<img class="hide-for-mobile" src="/assets/images/community.jpeg">
						</div>
					</div>
				</div>
				<div class="even-to-odd"></div>
				<div class="odd section">
					<div class="content">
						<div id="anfaenge" class="text-with-image">
							<div class="text-with-heading">
								<h1>Bescheidene Anfänge</h1>
								<p>
									Unser Gründer Tractie rief die VGC Gemeinde zu Beginn der Karmesin- und Purpur-Ära ins Leben, um eine Plattform für Gleichgesinnte
									zu schaffen und Neulingen den Einstieg zu erleichtern. Beim Zusammentreffen der frühsten Gemeindemitglieder auf dem Bochum Regional 2023
									entstand das erste Gemeindefoto. Das Gruppenfoto wurde direkt Tradition und so folgten viele weitere Regional-Bilder. Damals war aber
									noch unklar, wie viele Mitglieder das Foto in Zukunft füllen würden...
							</div>
							<img src="/assets/images/gemeindefoto-2023-bochum-regional.jpg">
						</div>
					</div>
				</div>
				<div class="odd-to-even"></div>
				<div class="even section">
					<div class="content">
						<div id="regionals" class="text-with-image">
							<div class="text-with-heading">
								<h1>Regionals</h1>
								<p>
									Mittlerweile werden die offiziellen Regional Championships in Deutschland und Umgebung immer für ein großes Zusammentreffen genutzt.
									Eine unglaubliche Menge an Gemeindemitgliedern findet sich zusammen und nimmt am Turnier teil. Die Stimmung der Events ist einzigartig:
									Es wird sich gegenseitig gepusht, angefeuert und über die Runden ausgetauscht. Auch zu Abendaktivitäten nach dem Turnier wird sich in
									Gruppen verabredet. Und zum Abschluss des Turniertags gibt es immer die Mittlerweile-Tradition: Das Gemeindefoto. Schau dir auf dem Foto
									an, wie viele von uns sich für das Gruppenfoto beim Dortmund Regional im September 2024 zusammengefunden haben – Wahnsinn!
								</p>
							</div>
							<img src="/assets/images/gemeindefoto-2024-dortmund-regional.jpg">
						</div>
					</div>
				</div>
				<div class="even-to-odd"></div>
				<div class="odd section">
					<div class="content">
						<div id="bundesliga" class="text-with-image">
							<div class="text-with-heading">
								<h1>Bundesliga</h1>
								<p>
									Die VGC Bundesliga ist unser größtes Turnier. Mit 180 Anmeldungen war die vergangene 8. Saison des Turniers auch wieder ein großer
									Erfolg. In einem klassischen Ligasystem tragen die Teilnehmer in 7 Divisionen über mehrere Wochen ihre Matches aus, bis am Ende ein
									Sieger feststeht. Das Ganze wird auch noch durch unser wöchentliches Match of the Week begleitet, indem jeweils ein Match von unseren
									besten Castern kommentiert wird. Alles dazu findest du auf
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.youtube.com/@VGC_Gemeinde">
									unserem YouTube-Kanal</a>.
								</p>
							</div>
							<div class="video">
								<iframe width="560" height="315" src="https://www.youtube.com/embed/91oUiRnGoZk?si=xq3-RRh0W2hwlLtf" allowfullscreen frameborder="0"></iframe>
							</div>
						</div>
					</div>
				</div>
				<div class="odd-to-even"></div>
				<div class="even section">
					<div class="content">
						<div id="ep-teiler" class="text-with-image">
							<div class="text-with-heading">
								<h1>EP-Teiler</h1>
								<p>
									Der EP-Teiler ist unser Podcastformat, in dem wir ganz entspannt mit nennenswerten Mitgliedern der Gemeinde oder der weiteren
									VGC-Community über die verschiedensten Themen sprechen. Von großen Erfolgen bei Turnieren über Einblicke in weniger bekannte
									Teile der Community bis hin zum berüchtigten Blick hinter die Kulissen werden hier alle Storys erzählt. Und das immer in
									gemütlicher Atmosphäre und nicht ohne das ein oder andere Meme. Die Playlist findest du
									<a 
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.youtube.com/watch?v=qqQBQdm2-9o&list=PLkvKoUnKhLVk3bS6k2rMUP2s1xX58ZhSz">
									hier</a>.
								</p>
							</div>
							<div class="video">
								<iframe width="560" height="315" src="https://www.youtube.com/embed/qqQBQdm2-9o?si=RXVF7eCuFHOmcK_k" allowfullscreen frameborder="0"></iframe>
							</div>
						</div>
					</div>
				</div>
				<div class="even-to-odd"></div>
				<div class="odd section">
					<div class="content">
						<div id="staff-team" class="text-with-image">
							<div class="text-with-heading">
								<h1>Staff-Team</h1>
								<p>
									Hinter diesen zahlreichen Projekten der VGC Gemeinde steht mittlerweile ein großes Team an Helfern und Helferinnen. Der
									Gemeinde-Staff besteht aus ca. 40 Mitgliedern, die sich in über 15 aufgabenbezogenen Teams organisieren. Die
									Teams sind jedoch nur sehr locker voneinander getrennt und jeder mit genug Motivation darf überall mithelfen. Ein besonderer
									Dank gilt hier unserem Admin-Team, die ein Überblick über alle Teams haben und Ordnung in das Chaos bringt. Falls du auch mit
									anpacken möchtest, tritt dem
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://discord.com/invite/Qb8RMupASu"
									>
									Discord</a>
									bei und melde dich bei uns!
								</p>
							</div>
							<div class="admins">
								<div class="admin">
									<img src="/assets/images/tano.jpg">
									<div class="name">Tano</div>
									<div class="role">Admin</div>
								</div>
								<div class="admin">
									<img src="/assets/images/vivi.png">
									<div class="name">Vivi</div>
									<div class="role">Admin</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</vg-hcf-layout>
    `;
	}
}

customElements.define("vg-home", Home);
