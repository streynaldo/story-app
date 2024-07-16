import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class NavLink extends LitWithoutShadow {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define("nav-link", NavLink);
