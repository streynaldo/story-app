import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class CardItem extends LitWithoutShadow {
  static properties = {
    id: { type: String, reflect: true },
    author: { type: String, reflect: true },
    date: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.author = "";
    this.date = "";
    this.id = "";
  }

  render() {
    return html`
      <a
        href="#"
        class="text-decoration-none text-black"
        data-bs-toggle="modal"
        data-bs-target="#storyDetailModal"
        data-id="${this.id}"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${this.author}</h5>
            <p class="card-text text-end">${this.date}</p>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define("card-item", CardItem);
