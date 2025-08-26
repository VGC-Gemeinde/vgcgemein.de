import { Task } from "@lit/task";
import { css, html, LitElement, nothing } from "lit";
import { renderTask } from "../utils/renderTask";

class Footer extends LitElement {
	static styles = css`
		.footer {
      padding: var(--footer-padding);
      box-sizing: border-box;
			color: var(--wooloo-white);
			background: var(--falinks-blue);
		}

		.footer-inner {
			display: flex;
			flex-direction: row;
			max-width: var(--max-content-width);
			margin: auto;
			align-items: center;
			justify-content: space-between;
		}

		.footer-links {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		
		.footer-info {
			display: none;
		}

		@media screen and (min-width: 992px) {
			.footer { 
				height: 50px;
			}

			.footer-inner {
				height: 100%;
			}

			.footer-links {
				flex-direction: row;
			}

			.footer-info {
				display: flex;
				flex-direction: row;
				gap: 10px;
			}
		}

		.footer-link {
			color: inherit;
		}
	`;

	#queryMemberCountTask = new Task(this, {
		task: async (): Promise<number> => {
			const response = await fetch(
				"https://discord.com/api/v9/invites/An7DjBxWkh?with_counts=true",
			);

			const parsedResponse = await response.json();
			const fetchedCount = parsedResponse.approximate_member_count;

			if (typeof fetchedCount !== "number") {
				throw new TypeError("Expected number for member count.");
			}

			return fetchedCount;
		},
		args: () => [],
	});

	render() {
		const memberCount = renderTask(this.#queryMemberCountTask);

		return html`
      <footer class="footer">
				<div class="footer-inner">
					<div class="footer-links">
						<a class="footer-link" href="/impressum">
							Impressum
						</a>
						<a class="footer-link" href="/datenschutz">
							Datenschutzerklärung
						</a>
						<a class="footer-link" href="https://paypal.me/VGCGemeindeTR">
							Spenden	
						</a>
					</div>
					<div class="footer-info">
						<div>Heimat der VGC Bundesliga</div>
						${
							memberCount.type === "error"
								? nothing
								: html`Aktuelle Mitglieder: ${memberCount.type === "loading" ? "..." : memberCount.value}`
						}
					</div>
				</div>
			</header>
    `;
	}
}

customElements.define("vg-footer", Footer);
