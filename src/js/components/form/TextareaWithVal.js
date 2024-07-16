import { html, nothing } from "lit";
import LitWithoutShadow from "../base/LitWithoutShadow";

class TextareaWithVal extends LitWithoutShadow {
  static properties = {
    value: { type: String, reflect: true },
    rows: { type: Number, reflect: true },
    inputId: { type: String, reflect: true },
    labelName: { type: String, reflect: true },

    validMessage: { type: String, reflect: true },
    invalidMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.rows = 3;
    this.required = false;
  }

  render() {
    return html`
      <textarea
        id=${this.inputId || nothing}
        class="form-control"
        rows=${this.rows || nothing}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${(e) => (this.value = e.target.value)}
      ></textarea>
      <label for="${this.inputId}" class="text-black"
        >${this.labelName}</label
      >
      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${this.invalidMessage}</div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validMessage}</div> `;
    }

    return html``;
  }
}

customElements.define("textarea-with-validation", TextareaWithVal);
