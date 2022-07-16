import { h, Component, Element, Event, Method, State, Prop } from '@stencil/core';
export class Tabs {
  constructor() {
    this.fixed_titles = false;
    this.gtm_category = [];
    this.gtm_action = [];
    this.gtm_label = [];
  }
  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('yduqs-tab'));
  }
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }
  async openTab(tabIndex) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onChange.emit({ idx: tabIndex });
    }
  }
  render() {
    const darkClass = this.darkmode ? 'c-tabs--dark' : '';
    const colorMode = this.outlined ? 'c-tabs--outlined' : '';
    return (h("div", { class: `c-tabs ${darkClass} ${colorMode}` },
      h("div", { role: "tablist", class: "c-tabs" },
        h("div", { class: "c-tabs__nav" },
          h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
            const openClass = tab.open ? 'c-tab-heading--active' : '';
            var head = this.icons ? `<span class="c-button__icon-text-right material-icons">${this.icons[i]}</span> ${tab.header}` : `${tab.header}`;
            return (h("div", { class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i), innerHTML: head, role: "tab", "data-gtm-event-category": this.gtm_category[i], "data-gtm-event-action": this.gtm_action[i], "data-gtm-event-label": this.gtm_label[i] }));
          }))),
        this.fixed_titles != false ? h("div", { class: "c-tabpanel-scroll" },
          h("slot", null)) : h("slot", null))));
  }
  static get is() { return "yduqs-tabs"; }
  static get properties() { return {
    "darkmode": {
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
      "attribute": "darkmode",
      "reflect": false
    },
    "outlined": {
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
      "attribute": "outlined",
      "reflect": false
    },
    "fixed_titles": {
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
      "attribute": "fixed_titles",
      "reflect": false,
      "defaultValue": "false"
    },
    "icons": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<String>",
        "resolved": "String[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "String": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "gtm_category": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<String>",
        "resolved": "String[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "String": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "gtm_action": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<String>",
        "resolved": "String[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "String": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "gtm_label": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<String>",
        "resolved": "String[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "String": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "tabs": {}
  }; }
  static get events() { return [{
      "method": "onChange",
      "name": "changed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "currentTab": {
      "complexType": {
        "signature": "() => Promise<number>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "openTab": {
      "complexType": {
        "signature": "(tabIndex: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "elem"; }
}
