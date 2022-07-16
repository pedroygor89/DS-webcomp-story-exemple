import { h, Component, Prop, Method } from '@stencil/core';
export class Textarea {
  constructor() {
    this.teacher_avatar = 'false';
    this.teacher_link = 'false';
    this.collaboration_text = 'Colaboração';
    this.cover_preparation = false;
    this.names_prof = [];
    this.names_clb = [];
    this.professores = [];
    this.avatar = [];
    this.link = [];
    this.colaboradores_nome = [];
    this.english = false;
    this.spanish = false;
    this.title_size = 'u-title-super line-height-md';
    this.lg_title = false;
    this.xl_title = false;
    this.template_anitta = false;
    this.template_ibmec = false;
  }
  async curadores() {
    let professores = this.professores;
    professores = this.teacher.split(",");
    let avatar = this.avatar;
    avatar = this.teacher_avatar.split(",");
    let link = this.link;
    link = this.teacher_link.split(",");
    for (let i = 0; i < professores.length; i++) {
      this.names_prof.push({ name: professores[i], img: avatar[i], link: link[i] });
    }
  }
  async colaboradores() {
    let colaboradores_nome = this.colaboradores_nome;
    if (typeof this.contributors !== 'undefined' && this.contributors.length > 0) {
      colaboradores_nome = this.contributors.split(',');
      for (let i = 0; i < colaboradores_nome.length; i++) {
        this.names_clb.push({ name: colaboradores_nome[i] });
      }
    }
    else {
      this.names_clb.push({ name: this.contributors });
    }
  }
  componentWillLoad() {
    const htmlTagCover = document.querySelector('html');
    const htmlLanguageCover = htmlTagCover.getAttribute('lang');
    if (htmlLanguageCover === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageCover === 'es') {
      this.spanish = true;
    }
    var titleSize = this.title_cover.length;
    if (titleSize > 48 && titleSize < 96) {
      this.lg_title = true;
      this.xl_title = false;
    }
    else if (titleSize >= 96) {
      this.lg_title = false;
      this.xl_title = true;
    }
  }
  componentWillRender() {
    this.curadores();
    this.colaboradores();
    let teacher_avatar = this.teacher_avatar;
    //console.log(teacher_avatar);
    let teacher_link = this.teacher_link;
    //console.log(teacher_link);
  }
  render() {
    let backgroundText;
    let backgroundTextMobile;
    let refTextBgMobile = this.background_text_mobile;
    let refTextBg = this.background_text;
    if (this.background_text && this.background_text !== 'false') {
      if (this.background_text == refTextBg && (!this.background_text_mobile || this.background_text_mobile == "false")) {
        backgroundText = `theme-text-bg-${refTextBg}`;
      }
      else if (this.background_text_mobile == refTextBgMobile && this.background_text == refTextBg) {
        backgroundText = `theme-text-bg-${refTextBg}`;
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    else {
      if (this.background_text == 'false' && (!this.background_text_mobile || this.background_text_mobile == "false")) {
        backgroundText = "";
        backgroundTextMobile = "";
      }
      else if (this.background_text == 'false' && this.background_text_mobile == refTextBgMobile) {
        backgroundText = "";
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    return (h("div", { class: `c-cover` },
      h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { "background-image": "url('" + this.background_img + "')" } },
        h("div", { class: "container c-cover-height" },
          h("div", { class: 'row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height' },
            h("div", { class: `col-12 col-sm-12 box-cover ${this.xl_title ? 'xl-title col-md-10 col-lg-8' : this.lg_title ? 'lg-titles col-md-9 col-lg-7' : ' col-md-8 col-lg-6'}` },
              h("div", { class: "theme-details" },
                h("h1", null,
                  h("span", { class: `${backgroundText} ${backgroundTextMobile}`, innerHTML: this.title_cover })),
                this.teacher != 'false' ? // Se tiver Professor preenchido
                  h("div", { class: "box-professor" }, this.names_prof.map((item) => h("div", { class: "avatar-professor" },
                    h("div", { class: `avatar-professor-img ${!this.teacher_avatar || this.avatar.length < this.professores.length || this.names_prof[0].img == "false" ? 'without-avatar' : ''}`, style: { "background-image": "url('" + item.img + "')" } }),
                    h("h4", null, this.link.length == this.names_prof.length && this.names_prof[0].link != "false" ?
                      (h("a", { href: `${item.link}`, target: "_blank" },
                        h("span", { class: `avatar-professor ${
                          // Se tiver background_text
                          this.background_text ?
                            // Se tiver teacher_avatar
                            this.teacher_avatar ?
                              // Se tiver background_text e teacher_avatar
                              'theme_text_bg_with-avatar'
                              // Se tiver background_text e não tiver teacher_avatar
                              : 'theme_text_bg_without-avatar'
                            // Se não tiver background_text
                            : this.teacher_avatar ?
                              // Se não tiver background_text e tiver teacher_avatar
                              'theme_text_bg_without_bg'
                              // Se não tiver background_text e não tiver teacher_avatar
                              : 'theme_without_avatar_without_bg'}`, innerHTML: item.name })))
                      :
                        (h("span", { class: `${
                          // Se tiver background_text
                          this.background_text ?
                            // Se tiver background_text
                            this.names_prof[0].img != "false" ?
                              // Se o professor 1 tiver imagem
                              'theme_text_bg_with-avatar'
                              // Se o professor 1 não tiver imagem
                              : 'theme_text_bg_without-avatar'
                            // Se não tiver background_text
                            : this.teacher_avatar ?
                              // Se tiver teacher_avatar
                              'theme_text_bg_without_bg'
                              // Se não tiver teacher_avatar
                              : 'theme_without_avatar_without_bg'}`, innerHTML: item.name }))))))
                  : // Se não tiver Professor preenchido
                    '',
                h("div", { class: `${this.names_clb.length >= 1 && this.names_clb[0].name != "false" && this.contributors ? 'mb-4' : 'without-clb'}` },
                  h("h4", { class: "mb-1 mt-4 collaboration-title" },
                    this.english ? 'Collaboration' : this.spanish ? 'Colaboración' : 'Colaboração',
                    " "),
                  h("div", { class: "box-clb" }, this.names_clb.map((item) => h("div", { class: "ml-5 avatar-professor " },
                    h("h4", null,
                      h("span", { class: `${this.background_text ? 'theme_text_bg_colaboradores' : 'theme_text_bg_colaboradores_without_bg'}`, innerHTML: item.name }))))))))))),
      h("div", { class: "container theme-definition-wrapper" },
        h("div", { class: 'row align-items-center justify-content-center' },
          h("div", { class: 'col-12' },
            h("div", { class: "theme-definition" },
              h("div", { class: 'row align-items-baseline justify-content-center' },
                h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' },
                  !this.template_anitta && !this.template_ibmec && h("h6", { class: "c-heading u-medium" }, this.english ? 'Description' : this.spanish ? 'Descripción' : 'Descrição'),
                  this.template_anitta && h("h6", { class: "c-heading u-medium" }, "Para come\u00E7ar"),
                  this.template_ibmec && h("h6", { class: "c-heading u-medium" }, "Apresenta\u00E7\u00E3o")),
                h("div", { class: 'col-12 col-sm-12 col-md-9 col-lg-9' },
                  h("slot", { name: "yduqs-cover-definition" }))),
              h("div", { class: 'row align-items-baseline justify-content-center' },
                h("div", { class: 'col-sm-12 col-md-3 col-lg-3' }, this.template_anitta ?
                  h("h6", { class: "c-heading u-medium" }, "Qual a ideia?")
                  :
                    h("h6", { class: "c-heading u-medium" }, this.english ? 'Purpose' : this.spanish ? 'Propósito' : 'Propósito')),
                h("div", { class: 'col-sm-12 col-md-9 col-lg-9' },
                  h("slot", { name: "yduqs-cover-purpose" }))),
              this.cover_preparation ?
                h("div", { class: 'row align-items-baseline justify-content-center' },
                  h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, this.template_anitta ?
                    h("h6", { class: "c-heading u-medium" }, "Prepara")
                    :
                      h("h6", { class: "c-heading u-medium" }, this.english ? 'Preparation' : this.spanish ? 'Preparación' : 'Preparação')),
                  h("div", { class: 'col-sm-12 col-md-9 col-lg-9' },
                    h("slot", { name: 'yduqs-cover-preparation-text' })))
                : ''))))));
  }
  static get is() { return "yduqs-cover"; }
  static get properties() { return {
    "background_img": {
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
      "attribute": "background_img",
      "reflect": false
    },
    "background_img_title": {
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
      "attribute": "background_img_title",
      "reflect": false
    },
    "title_cover": {
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
      "attribute": "title_cover",
      "reflect": false
    },
    "teacher": {
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
      "attribute": "teacher",
      "reflect": false
    },
    "teacher_avatar": {
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
      "attribute": "teacher_avatar",
      "reflect": false,
      "defaultValue": "'false'"
    },
    "teacher_link": {
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
      "attribute": "teacher_link",
      "reflect": false,
      "defaultValue": "'false'"
    },
    "contributors": {
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
      "attribute": "contributors",
      "reflect": false
    },
    "background_text": {
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
      "attribute": "background_text",
      "reflect": false
    },
    "collaboration_text": {
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
      "attribute": "collaboration_text",
      "reflect": false,
      "defaultValue": "'Colabora\u00E7\u00E3o'"
    },
    "cover_preparation": {
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
      "attribute": "cover_preparation",
      "reflect": false,
      "defaultValue": "false"
    },
    "background_text_mobile": {
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
      "attribute": "background_text_mobile",
      "reflect": false
    },
    "names_prof": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "names_clb": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "professores": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "avatar": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "link": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "colaboradores_nome": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
        "references": {
          "Array": {
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
    "english": {
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
      "attribute": "english",
      "reflect": false,
      "defaultValue": "false"
    },
    "spanish": {
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
      "attribute": "spanish",
      "reflect": false,
      "defaultValue": "false"
    },
    "title_size": {
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
      "attribute": "title_size",
      "reflect": false,
      "defaultValue": "'u-title-super line-height-md'"
    },
    "lg_title": {
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
      "attribute": "lg_title",
      "reflect": false,
      "defaultValue": "false"
    },
    "xl_title": {
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
      "attribute": "xl_title",
      "reflect": false,
      "defaultValue": "false"
    },
    "template_anitta": {
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
      "attribute": "template_anitta",
      "reflect": false,
      "defaultValue": "false"
    },
    "template_ibmec": {
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
      "attribute": "template_ibmec",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "curadores": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
    },
    "colaboradores": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
}
