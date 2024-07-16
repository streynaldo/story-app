import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class Button extends LitWithoutShadow {
  static properties = {
    label: { type: String, reflect: true },
    classList: { type: String, reflect: true },
    link: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.label = "";
    this.type = "button";
    this.class = "";
    this.href = "#";
  }

  render() {
    return html`
      <a class="${this.classList}" href="${this.link}">${this.label}</a>
    `;
  }
}

customElements.define("button-item", Button);
