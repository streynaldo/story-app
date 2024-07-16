import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class NavLinks extends LitWithoutShadow {
  constructor() {
    super();
  }
  render() {
    return html`
      <ul class="navbar-nav">
        <nav-link content="Dashboard" to="/"></nav-link>
        <nav-link content="Add Story" to="./add.html"></nav-link>
      </ul>
    `;
  }
}

customElements.define("nav-links", NavLinks);
