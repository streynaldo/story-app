import { html, nothing } from "lit";
import LitWithoutShadow from "../base/LitWithoutShadow";

class InputImageWithPreview extends LitWithoutShadow {
  static properties = {
    inputId: { type: String, reflect: true },
    labelName: { type: String, reflect: true },
    validMessage: { type: String, reflect: true },
    invalidMessage: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    isValid: { type: Boolean, reflect: true },
    imageSrc: { type: String },
  };

  constructor() {
    super();
    this.imageSrc = "";
    this.required = false;
    this.isValid = true;
  }

  render() {
    return html`
      <label for=${this.inputId} class="text-black">${this.labelName}</label>
      <div class="preview-container">
        ${this.imageSrc
          ? html`<img
              class="preview-image mb-2 rounded"
              src="${this.imageSrc}"
              alt="Image preview"
              style="width: 100px; height: 100px;"
            />`
          : html``}
      </div>
      <input
        id=${this.inputId || nothing}
        type="file"
        class="form-control ${this.isValid ? "" : "is-invalid"}"
        accept="image/*"
        ?required=${this.required}
        @change=${this._handleFileChange}
      />

      ${this._feedbackTemplate()}
    `;
  }

  _feedbackTemplate() {
    let validFeedbackTemplate = "";
    let invalidFeedbackTemplate = "";
    if (this.validMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }
    if (this.invalidMessage) {
      invalidFeedbackTemplate = html`
        <div class="invalid-feedback">${this.invalidMessage}</div>
      `;
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }

  _handleFileChange(e) {
    this.isValid = false;
    const file = e.target.files[0];
    const submitButton = document.querySelector("#submitBtn");

    submitButton.addEventListener("click", () => {
      if (file) {
        this.isValid = true;
        this.requestUpdate();
      } else {
        this.isValid = false;
        this.requestUpdate();
      }
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
        this.isValid = true;
        this.requestUpdate();
      };
      reader.readAsDataURL(file);
    } else {
      this.imageSrc = "";
      this.isValid = false;
      this.requestUpdate();
    }
  }
}

customElements.define("input-image-with-preview", InputImageWithPreview);
