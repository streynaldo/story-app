import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class FooterApp extends LitWithoutShadow {
  constructor() {
    super();
  }

  render() {
    return html`
      <p class="text-center text-white mb-0">
        &copy; 2021 StoryKu. All Rights Reserved.
      </p>
    `;
  }
}

customElements.define("footer-app", FooterApp);
