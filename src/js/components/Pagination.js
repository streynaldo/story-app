import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class Pagination extends LitWithoutShadow {
  static properties = {
    itemsPerPage: { type: Number, reflect: true },
    totalItems: { type: Number, reflect: true },
    totalPages: { type: Number, reflect: true },
    currentPage: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 1;
  }

  render() {
    return html`
      <nav aria-label="pagination">
        <ul class="pagination pagination-sm">
          ${Array.from({ length: this.totalPages }, (_, i) => i + 1).map(
            (page) => html`
              <li
                class="page-item ${this.currentPage === page ? "active" : ""}"
              >
                <a
                  class="page-link"
                  href="#"
                  @click="${() => this._gotoPage(page)}"
                  >${page}</a
                >
              </li>
            `
          )}
        </ul>
      </nav>
    `;
  }

  _prevPage(e) {
    e.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this._notifyPageChange();
    }
  }

  _nextPage(e) {
    e.preventDefault();
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this._notifyPageChange();
    }
  }

  _gotoPage(page) {
    this.currentPage = page;
    this._notifyPageChange();
  }

  _notifyPageChange() {
    const event = new CustomEvent("page-change", {
      detail: { currentPage: this.currentPage },
    });
    this.dispatchEvent(event);
  }
}
customElements.define("pagination-component", Pagination);
