import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";
import { ref } from "lit/directives/ref.js";

class ModalDetail extends LitWithoutShadow {
  static properties = {
    title: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                ${this.title}
              </h1>
              <button
                type="button"
                class="border-0 bg-transparent"
                id="closeModal"
                data-bs-dismiss="modal"
              ><i class="bi bi-x-lg"></i></button>
            </div>
            <div class="modal-body">
                <h4 id="titleDetail"></h4>
              <img src="" id="imgDetail" class="img-fluid" alt="Story Image" />
              <p class="mt-3"><strong>Created At:</strong><p id="dateDetail"></p></p>
              <p class="mt-3" id="descDetail"></p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("modal-detail", ModalDetail);
