import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class Spinner extends LitWithoutShadow {
  constructor() {
    super();
  }
  render() {
    return html`
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      ;
    `;
  }
}

customElements.define("spinner-component", Spinner);
