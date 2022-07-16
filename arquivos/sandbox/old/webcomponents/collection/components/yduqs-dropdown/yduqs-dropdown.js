import { h, Component, Prop, State } from '@stencil/core';
export class Drop {
  componentDidLoad() {
    if (this.colsize !== "" || this.colsize !== undefined) {
      this._colsize = this.colsize;
      console.log(this._colsize);
    }
    else {
      this._colsize = "12";
    }
  }
  render() {
    return (h("div", { class: `container-drop col-md-${this._colsize}` },
      h("select", { class: "drop-options", "arial-label": "Selecionar elemento" },
        h("slot", null))));
  }
  static get is() { return "yduqs-dropdown"; }
  static get properties() { return {
    "colsize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "colsize",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_colsize": {}
  }; }
}
