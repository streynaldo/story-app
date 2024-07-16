import { LitElement } from "lit";

class LitWithoutShadow extends LitElement {
  createRenderRoot() {
    return this;
  }
}
export default LitWithoutShadow;