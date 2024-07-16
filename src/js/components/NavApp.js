import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class NavApp extends LitWithoutShadow {
  static properties = {
    appName: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#" id="logo">${this.appName}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <nav-links></nav-links>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-app", NavApp);
