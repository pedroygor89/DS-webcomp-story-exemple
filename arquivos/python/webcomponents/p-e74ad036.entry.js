import{r as s,h as t}from"./p-c4393f38.js";const i=class{constructor(t){s(this,t),this.project_python=!1,this.background_img="false",this.background_video="false",this.background_video_opacity="false",this.background_video_blur=!1,this.teacher="",this.teacher_avatar="false",this.teacher_link="false",this.collaboration_text="Colaboração",this.cover_preparation=!1,this.names_prof=[],this.names_clb=[],this.professores=[],this.avatar=[],this.link=[],this.colaboradores_nome=[],this.english=!1,this.spanish=!1,this.title_size="u-title-super line-height-md",this.lg_title=!1,this.xl_title=!1,this.template_anitta=!1,this.template_ibmec=!1}async curadores(){let s=this.professores;s=this.teacher.split(",");let t=this.avatar;t=this.teacher_avatar.split(",");let i=this.link;i=this.teacher_link.split(",");for(let e=0;e<s.length;e++)this.names_prof.push({name:s[e],img:t[e],link:i[e]})}async colaboradores(){let s=this.colaboradores_nome;void 0!==s&&s.length>0&&(s=this.contributors.split(","));for(let t=0;t<s.length;t++)this.names_clb.push({name:s[t]})}componentWillLoad(){document.body.classList.contains("project_python")&&(this.project_python=!0);const s=document.querySelector("html").getAttribute("lang");"en-us"===s?this.english=!0:"es"===s&&(this.spanish=!0);var t=this.title_cover.length;t>48&&t<96?(this.lg_title=!0,this.xl_title=!1):t>=96&&(this.lg_title=!1,this.xl_title=!0)}componentWillRender(){this.curadores(),this.colaboradores()}openModal(s){document.getElementById(s).setAttribute("isopen","true")}render(){let s,i,e=this.background_text_mobile,a=this.background_text;if(this.background_text&&"false"!==this.background_text?this.background_text!=a||this.background_text_mobile&&"false"!=this.background_text_mobile?this.background_text_mobile==e&&this.background_text==a&&(s=`theme-text-bg-${a}`,i=`theme-text-bg-black-${e}`):s=`theme-text-bg-${a}`:"false"!=this.background_text||this.background_text_mobile&&"false"!=this.background_text_mobile?"false"==this.background_text&&this.background_text_mobile==e&&(s="",i=`theme-text-bg-black-${e}`):(s="",i=""),this.project_python)l="c-cover-bg c-cover-height project-python";else var l="c-cover-bg c-cover-height";return t("div",{class:"c-cover"},t("div",{class:l,title:`${this.background_img_title}`,style:"false"!==this.background_img&&{"background-image":"url('"+this.background_img+"')"}},"false"!==this.background_video&&t("div",{class:`c-cover-video-background ${"false"!==this.background_video_opacity&&"opacity-"+this.background_video_opacity} ${this.background_video_blur&&"blurred-video"}`},t("video",{autoplay:!0,muted:!0,loop:!0},t("source",{src:this.background_video,type:"video/mp4"}),"Seu navegador não suporta vídeos em HTML5.")),t("div",{class:"container c-cover-height"},t("div",{class:"row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height"},t("div",{class:"col-12 col-sm-12 box-cover "+(this.xl_title?"xl-title col-md-10 col-lg-8":this.lg_title?"lg-titles col-md-9 col-lg-7":this.project_python?" col-md-10 col-lg-8":" col-md-8 col-lg-6")},t("div",{class:"theme-details"},t("h1",null,t("span",{class:`${s} ${i}`,innerHTML:this.title_cover})),this.project_python&&t("slot",{name:"yduqs-cover-definition"}),"false"!=this.teacher?t("div",{class:"box-professor"},this.names_prof.map((s=>t("div",{class:"avatar-professor"},t("div",{class:"avatar-professor-img "+(!this.teacher_avatar||this.avatar.length<this.professores.length||"false"==this.names_prof[0].img?"without-avatar":""),style:{"background-image":"url('"+s.img+"')"}}),this.project_python?t("div",null,t("button",{class:"modal c-button u-text--small d-inline-block me-3 mb-3",onClick:()=>this.openModal("modal-cover-video")},t("span",{class:"material-icons d-inline-block"},"ondemand_video"),t("span",null,"Assista ao vídeo de apresentação")),t("button",{class:"c-button u-text--small d-inline-block me-3 mb-3",onClick:()=>this.openModal("modal-cover-teacher")},t("span",{class:"material-icons d-inline-block"},"person"),t("span",null,"Conheça seu professor")),t("button",{class:"c-button u-text--small d-inline-block me-3 mb-3",id:"start_class","data-cy":"btn-next"},t("span",{class:"material-icons d-inline-block"},"login"),t("span",null,"Iniciar")),t("yduqs-modal",{id:"modal-cover-video",class:"cover-modal"},t("div",{class:"row"},t("div",{class:"col"},t("span",{class:"c-modal__title"},"Vídeo de apresentação"))),t("div",{class:"row"},t("div",{class:"col"},t("slot",{name:"yduqs-cover-video"})))),t("yduqs-modal",{id:"modal-cover-teacher",class:"cover-modal"},t("div",{class:"row"},t("div",{class:"col"},t("span",{class:"c-modal__title"},"Conheça seu professor"))),t("div",{class:"row"},t("div",{class:"col"},t("slot",{name:"yduqs-cover-teacher"}))))):t("h4",null,this.link.length==this.names_prof.length&&"false"!=this.names_prof[0].link?t("a",{href:`${s.link}`,target:"_blank"},t("span",{class:"avatar-professor "+(this.background_text?this.teacher_avatar?"theme_text_bg_with-avatar":"theme_text_bg_without-avatar":this.teacher_avatar?"theme_text_bg_without_bg":"theme_without_avatar_without_bg"),innerHTML:s.name})):t("span",{class:this.background_text?"false"!=this.names_prof[0].img?"theme_text_bg_with-avatar":"theme_text_bg_without-avatar":this.teacher_avatar?"theme_text_bg_without_bg":"theme_without_avatar_without_bg",innerHTML:s.name})))))):"",t("div",{class:this.names_clb.length>=1&&"false"!=this.names_clb[0].name&&this.contributors?"":"without-clb"},t("h4",{class:"mb-1 mt-4 collaboration-title"},this.english?"Collaboration":this.spanish?"Colaboración":"Colaboração"," "),t("div",{class:"box-clb"},this.names_clb.map((s=>t("div",{class:"ml-5 avatar-professor "},t("h4",null,t("span",{class:this.background_text?"theme_text_bg_colaboradores":"theme_text_bg_colaboradores_without_bg",innerHTML:s.name})))))))))))),!this.project_python&&t("div",{class:"container theme-definition-wrapper"},t("div",{class:"row align-items-center justify-content-center"},t("div",{class:"col-12"},t("div",{class:"theme-definition"},t("div",{class:"row align-items-baseline justify-content-center"},t("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},!this.template_anitta&&!this.template_ibmec&&t("h6",{class:"c-heading u-medium"},this.english?"Description":this.spanish?"Descripción":"Descrição"),this.template_anitta&&t("h6",{class:"c-heading u-medium"},"Para começar"),this.template_ibmec&&t("h6",{class:"c-heading u-medium"},"Apresentação")),t("div",{class:"col-12 col-sm-12 col-md-9 col-lg-9"},t("slot",{name:"yduqs-cover-definition"}))),t("div",{class:"row align-items-baseline justify-content-center"},t("div",{class:"col-sm-12 col-md-3 col-lg-3"},t("h6",{class:"c-heading u-medium"},this.template_anitta?"Qual a ideia?":this.english?"Purpose":"Propósito")),t("div",{class:"col-sm-12 col-md-9 col-lg-9"},t("slot",{name:"yduqs-cover-purpose"}))),this.cover_preparation?t("div",{class:"row align-items-baseline justify-content-center"},t("div",{class:"col-12 col-sm-12 col-md-3 col-lg-3"},t("h6",{class:"c-heading u-medium"},this.template_anitta?"Prepara":this.english?"Preparation":this.spanish?"Preparación":"Preparação")),t("div",{class:"col-sm-12 col-md-9 col-lg-9"},t("slot",{name:"yduqs-cover-preparation-text"}))):"")))))}};export{i as yduqs_cover}