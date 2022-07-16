import { h, Component, Prop } from '@stencil/core';
import { i18n } from '../../../utils/i18n';
export class CardVideo {
  constructor() {
    this.id_video = '';
    this.type_video = 'Vem que eu te explico!';
    this.active = false;
  }
  render() {
    const styleBorder = this.border_bottom ? 'border-bottom' : '';
    const video_active = this.active ? 'active' : '';
    return (h("div", { id: this.id_video, class: "c-card-video " + styleBorder },
      h("div", { class: "c-card-video__thumb " + video_active },
        h("yduqs-image", { src: this.thumb_video, alt: "" }),
        h("div", { class: "c-card-video__description_time" }, this.time)),
      h("div", { class: "c-card-video__description" },
        h("p", { class: "c-paragraph" },
          parseInt(this.module_video) == 0 || this.module_video == 'todos' ? i18n('pager.todos') : parseInt(this.module_video) == 99 || this.module_video == 'apresentacao' ? i18n('pager.apresentacao') : parseInt(this.module_video) == 100 || this.module_video == 'conclusao' ? i18n('pager.conclusao') : i18n('pager.modulo') + ' ' + this.module_video,
          " - ",
          this.type_video),
        h("h2", { class: "c-heading", innerHTML: this.title_video }),
        h("p", { class: "c-paragraph", innerHTML: this.paragraph }))));
  }
  static get is() { return "yduqs-card-video"; }
  static get properties() { return {
    "id_video": {
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
      "attribute": "id_video",
      "reflect": false,
      "defaultValue": "''"
    },
    "module_video": {
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
      "attribute": "module_video",
      "reflect": false
    },
    "type_video": {
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
      "attribute": "type_video",
      "reflect": false,
      "defaultValue": "'Vem que eu te explico!'"
    },
    "title_video": {
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
      "attribute": "title_video",
      "reflect": false
    },
    "subtitle_video": {
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
      "attribute": "subtitle_video",
      "reflect": false
    },
    "thumb_video": {
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
      "attribute": "thumb_video",
      "reflect": false
    },
    "link_video": {
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
      "attribute": "link_video",
      "reflect": false
    },
    "paragraph": {
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
      "attribute": "paragraph",
      "reflect": false
    },
    "time": {
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
      "attribute": "time",
      "reflect": false
    },
    "border_bottom": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "border_bottom",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
