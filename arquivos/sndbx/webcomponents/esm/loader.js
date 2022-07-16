import { p as promiseResolve, b as bootstrapLazy } from './index-b21d89aa.js';

/*
 Stencil Client Patch Esm v2.17.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy(JSON.parse("[[\"yduqs-menu\",[[0,\"yduqs-menu\",{\"settings\":[16],\"position\":[2],\"english\":[4],\"spanish\":[4],\"hide_search\":[4],\"_isMobile\":[32],\"_isOpen\":[32],\"_isOpenGallery\":[32],\"_isActive\":[32],\"_animate\":[32],\"_activeIndex\":[32],\"_videoModule\":[32],\"videoItems\":[32],\"_titleModuloCover\":[32],\"_menuDeskContainerWidth\":[32],\"initialize\":[64],\"openGalleryVideo\":[64]},[[9,\"resize\",\"handleWindowResize\"]]]]],[\"yduqs-footer\",[[4,\"yduqs-footer\",{\"useimage\":[4],\"btnimprimir\":[4],\"namebtnimprimir\":[1],\"hrefbtnprint\":[1],\"english\":[4],\"spanish\":[4],\"template_anitta\":[4],\"hide_pagination\":[4],\"hide_motivational_messages\":[4]}]]],[\"yduqs-ordered-dnd-challenge\",[[0,\"yduqs-ordered-dnd-challenge\",{\"_id\":[1,\"id\"],\"config\":[1],\"error\":[32],\"chances\":[32],\"tips\":[32],\"time\":[32],\"info\":[32],\"usedChances\":[32],\"hideCount\":[32],\"usedTips\":[32],\"showTip\":[32],\"showFeedback\":[32],\"positiveFeedback\":[32],\"negativeFeedback\":[32],\"failFeedback\":[32],\"dropImage\":[32],\"data\":[32],\"selecteds\":[32],\"sequence\":[32],\"step\":[32],\"tutorialItem\":[32],\"result\":[32],\"showInfo\":[32],\"inCountdownDanger\":[32],\"ordered\":[32],\"gameover\":[64]},[[16,\"countdownFinished\",\"handleCountdownFinished\"],[16,\"countdownDanger\",\"handleCountdownDanger\"],[16,\"gameOverEvent\",\"handleGameOver\"],[16,\"modalClosed\",\"handleCloseFeedback\"]]]]],[\"yduqs-ordered-dnd-trainning\",[[0,\"yduqs-ordered-dnd-trainning\",{\"_id\":[1,\"id\"],\"config\":[1],\"error\":[32],\"title\":[32],\"info\":[32],\"data\":[32],\"dropImage\":[32],\"selecteds\":[32],\"sequence\":[32],\"step\":[32],\"feedback\":[32],\"showTip\":[32],\"showInfo\":[32]},[[16,\"modalClosed\",\"handleCloseFeedback\"]]]]],[\"yduqs-code-compiler\",[[0,\"yduqs-code-compiler\",{\"dark\":[4],\"language_code\":[1],\"code\":[1],\"input_keyboard\":[1],\"exercise_title\":[1],\"isDark\":[32],\"current_code\":[32],\"text_console\":[32],\"text_response\":[32],\"value\":[32],\"response_active\":[32],\"copy\":[64]},[[0,\"textChange\",\"textChangeHandler\"]]]]],[\"yduqs-interactive-media\",[[4,\"yduqs-interactive-media\",{\"headertitle\":[1],\"headertext\":[1],\"headericon\":[1],\"config\":[1],\"medias\":[32],\"current\":[32],\"quizSelectedAnswer\":[32]},[[16,\"quizSelect\",\"handleQuizSelect\"]]]]],[\"yduqs-module-video\",[[0,\"yduqs-module-video\",{\"settings\":[16],\"module_number\":[1],\"module_icon\":[1],\"title_gallery\":[1],\"subtitle_gallery\":[1],\"title_video\":[1],\"paragraph_video\":[1],\"active_video\":[1],\"initialize\":[64]}]]],[\"yduqs-show-points\",[[0,\"yduqs-show-points\",{\"_id\":[1,\"id\"],\"config\":[1],\"error\":[32],\"step\":[32],\"title\":[32],\"info\":[32],\"items\":[32],\"selected\":[32],\"selectedIndex\":[32],\"showInfo\":[32],\"showPoints\":[32],\"bgDimensions\":[32],\"modal\":[32]},[[16,\"modalClosed\",\"handleCloseModal\"]]]]],[\"yduqs-zoom-challenge\",[[0,\"yduqs-zoom-challenge\",{\"_id\":[1,\"id\"],\"config\":[1],\"error\":[32],\"step\":[32],\"chances\":[32],\"info\":[32],\"positiveBtnText\":[32],\"negativeBtnText\":[32],\"sequence\":[32],\"items\":[32],\"selected\":[32],\"showInfo\":[32],\"feedback\":[32],\"usedChances\":[32],\"gameover\":[64]},[[16,\"gameOverEvent\",\"handleGameOver\"],[16,\"modalClosed\",\"handleCloseFeedback\"]]]]],[\"yduqs-caixa-formula\",[[4,\"yduqs-caixa-formula\",{\"title_formula\":[1],\"formula\":[1],\"dark\":[4],\"rotate_info\":[4],\"equal_height\":[4],\"outlined\":[32]}]]],[\"yduqs-cover-lab\",[[4,\"yduqs-cover-lab\",{\"background_img\":[1],\"loading\":[4],\"subtitle_cover\":[1],\"title_cover\":[1],\"to_page_init_lab\":[1],\"mobileBreakpoint\":[32],\"_isMobile\":[32]},[[9,\"resize\",\"handleWindowResize\"]]]]],[\"yduqs-lab-phase\",[[4,\"yduqs-lab-phase\",{\"phase\":[8],\"next\":[8],\"show\":[32],\"confirmation\":[32]},[[8,\"btnClick\",\"handleNav\"],[0,\"challengeEnd\",\"handleNext\"],[0,\"trainningEnd\",\"handleTrainning\"],[8,\"yduqs-lab-action\",\"handleLabActionsValidate\"],[8,\"virtualMapPointClick\",\"handleMapActions\"]]]]],[\"yduqs-podcast\",[[0,\"yduqs-podcast\",{\"subtitulo\":[1],\"dark\":[4],\"withtitle\":[4],\"audio\":[1],\"bgColor\":[32],\"titleappears\":[32],\"changeColor\":[64],\"showtitle\":[64]}]]],[\"yduqs-questions\",[[0,\"yduqs-questions\",{\"settings\":[16],\"english\":[4],\"spanish\":[4],\"math\":[4],\"math_advanced\":[4],\"colunalg\":[1],\"initialize\":[64]}]]],[\"yduqs-virtual-map\",[[0,\"yduqs-virtual-map\",{\"_id\":[1,\"id\"],\"config\":[1],\"selected\":[2],\"error\":[32],\"step\":[32],\"background\":[32],\"items\":[32],\"bgDimensions\":[32],\"showLines\":[32],\"centralize\":[64]}]]],[\"yduqs-zoom-full-screen\",[[0,\"yduqs-zoom-full-screen\",{\"src\":[1],\"alt\":[1],\"max\":[2],\"min\":[2],\"step\":[2],\"fullScreen\":[32],\"val\":[32],\"evCache\":[32],\"prevDiff\":[32]},[[2,\"click\",\"handleClick\"]]]]],[\"yduqs-audio-card\",[[4,\"yduqs-audio-card\",{\"audiocard_id\":[1],\"src\":[1],\"dark\":[4],\"outlined\":[4],\"equal_height\":[4],\"title_audio_card\":[1],\"subtitle_audio_card\":[1],\"group\":[4],\"isPlaying\":[32],\"isPlayingSlow\":[32],\"duration\":[32],\"currentTime\":[32],\"audioPlayer\":[32],\"audioPlayerEnd\":[32],\"playAudioStop\":[64],\"playAudioStopSlow\":[64]}]]],[\"yduqs-card-modulo\",[[4,\"yduqs-card-modulo\",{\"progress\":[2],\"completed\":[32]},[[0,\"changebar\",\"onChangeBar\"]]]]],[\"yduqs-code-snipet\",[[0,\"yduqs-code-snipet\",{\"dark\":[4],\"language_code\":[1],\"code\":[1],\"input_keyboard\":[1],\"size\":[1],\"isDark\":[32],\"copy\":[64]}]]],[\"yduqs-lab-intro\",[[4,\"yduqs-lab-intro\",{\"_title\":[1,\"title\"],\"btnText\":[1,\"btn-text\"],\"btnHref\":[1,\"btn-href\"],\"btnIcon\":[1,\"btn-icon\"]}]]],[\"yduqs-module-rating\",[[0,\"yduqs-module-rating\",{\"cta\":[1],\"icon\":[1],\"tamanho\":[1],\"module\":[1],\"english\":[4],\"spanish\":[4]}]]],[\"yduqs-atividade-discursiva\",[[4,\"yduqs-atividade-discursiva\"]]],[\"yduqs-before-after\",[[0,\"yduqs-before-after\",{\"before_img\":[1],\"before_img_alt\":[1],\"before_img_title\":[1],\"after_img\":[1],\"after_img_alt\":[1],\"after_img_title\":[1],\"caption\":[1],\"titleChange\":[32]},[[1,\"mouseover\",\"mouseHandler\"]]]]],[\"yduqs-card-body\",[[4,\"yduqs-card-body\"]]],[\"yduqs-card-comparativo\",[[4,\"yduqs-card-comparativo\",{\"dark\":[4],\"outline\":[4],\"icon\":[1],\"rotate_mobile\":[4]}]]],[\"yduqs-card-comparativo-body\",[[4,\"yduqs-card-comparativo-body\"]]],[\"yduqs-card-comparativo-header\",[[4,\"yduqs-card-comparativo-header\"]]],[\"yduqs-card-comparativo-item\",[[4,\"yduqs-card-comparativo-item\"]]],[\"yduqs-card-destaque\",[[4,\"yduqs-card-destaque\",{\"grade\":[2],\"outline\":[4],\"icon\":[1]}]]],[\"yduqs-card-destaque-body\",[[4,\"yduqs-card-destaque-body\"]]],[\"yduqs-card-destaque-header\",[[4,\"yduqs-card-destaque-header\"]]],[\"yduqs-card-footer\",[[4,\"yduqs-card-footer\"]]],[\"yduqs-card-header\",[[4,\"yduqs-card-header\"]]],[\"yduqs-card-horizontal\",[[4,\"yduqs-card-horizontal\",{\"card_image\":[1],\"card_icon\":[1],\"image_alt\":[1],\"image_title\":[1],\"isquestion\":[4],\"english\":[4],\"spanish\":[4],\"isMobile\":[32],\"mobile\":[32]},[[9,\"resize\",\"onResize\"]]]]],[\"yduqs-card-intro\",[[4,\"yduqs-card-intro\",{\"text\":[1]}]]],[\"yduqs-card-modulo-body\",[[4,\"yduqs-card-modulo-body\"]]],[\"yduqs-card-modulo-footer\",[[4,\"yduqs-card-modulo-footer\"]]],[\"yduqs-card-modulo-header\",[[4,\"yduqs-card-modulo-header\"]]],[\"yduqs-carousel\",[[4,\"yduqs-carousel\",{\"space\":[514],\"english\":[4],\"spanish\":[4],\"children\":[32],\"currentItem\":[32],\"currentPage\":[32],\"hasNext\":[32],\"hasPrev\":[32],\"isMobile\":[32],\"next\":[64],\"prev\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"yduqs-carousel-item\",[[4,\"yduqs-carousel-item\"]]],[\"yduqs-collapse\",[[4,\"yduqs-collapse\",{\"border\":[4],\"outline\":[4],\"_active\":[32]},[[0,\"togglepane\",\"onTogglePane\"]]]]],[\"yduqs-collapse-content\",[[4,\"yduqs-collapse-content\",{\"open\":[4],\"size\":[1],\"color_collapse\":[1],\"aling_collapse\":[1],\"header\":[1],\"_isOpen\":[32],\"show\":[64],\"close\":[64],\"isOpen\":[64]}]]],[\"yduqs-collapse-teoria\",[[4,\"yduqs-collapse-teoria\",{\"border\":[4],\"outline\":[4],\"_active\":[32]},[[0,\"togglepane\",\"onTogglePane\"]]]]],[\"yduqs-collapse-teoria-content\",[[4,\"yduqs-collapse-teoria-content\",{\"open\":[4],\"teoria\":[4],\"size\":[1],\"header\":[1],\"_isOpen\":[32],\"english\":[32],\"spanish\":[32],\"show\":[64],\"close\":[64],\"isOpen\":[64]}]]],[\"yduqs-cover\",[[4,\"yduqs-cover\",{\"background_img\":[1],\"background_img_title\":[1],\"title_cover\":[1],\"teacher\":[1],\"teacher_avatar\":[1],\"teacher_link\":[1],\"contributors\":[1],\"background_text\":[1],\"collaboration_text\":[1],\"cover_preparation\":[4],\"background_text_mobile\":[1],\"names_prof\":[16],\"names_clb\":[16],\"professores\":[16],\"avatar\":[16],\"link\":[16],\"colaboradores_nome\":[16],\"english\":[4],\"spanish\":[4],\"title_size\":[1],\"lg_title\":[4],\"xl_title\":[4],\"template_anitta\":[4],\"template_ibmec\":[4],\"curadores\":[64],\"colaboradores\":[64]}]]],[\"yduqs-cover-stage-lab\",[[0,\"yduqs-cover-stage-lab\",{\"background\":[1],\"phaseNumber\":[2,\"phase-number\"],\"overtitle\":[1],\"_title\":[1,\"title\"],\"description\":[1],\"actions\":[8],\"parsedActions\":[32]}]]],[\"yduqs-destaque-texto\",[[4,\"yduqs-destaque-texto\",{\"size\":[1]}]]],[\"yduqs-dropdown\",[[4,\"yduqs-dropdown\",{\"colunas\":[1],\"identificador\":[1],\"tipo\":[1],\"withcheck\":[4],\"icon\":[32],\"createOptionsSelect\":[64],\"createOptionsDrop\":[64]}]]],[\"yduqs-helper\",[[0,\"yduqs-helper\"]]],[\"yduqs-input\",[[0,\"yduqs-input\",{\"placeh\":[1],\"titulo\":[1],\"icon\":[8],\"input\":[32],\"visible\":[32],\"color\":[32],\"iconColor\":[32],\"messageTitle\":[32],\"bgColor\":[32],\"alteraInput\":[64],\"apagarValor\":[64]}]]],[\"yduqs-listas\",[[4,\"yduqs-listas\",{\"tamanho\":[1],\"tipo\":[1]}]]],[\"yduqs-loader\",[[0,\"yduqs-loader\"]]],[\"yduqs-module-cover\",[[0,\"yduqs-module-cover\",{\"number_module\":[1],\"title_module\":[1],\"objective\":[1],\"title_read_time\":[1],\"read_time\":[1],\"title_midia_time\":[1],\"midia_time\":[1],\"img_cover\":[1]}]]],[\"yduqs-notification\",[[4,\"yduqs-notification\",{\"type\":[1],\"dismissible\":[4],\"open\":[4],\"_isOpen\":[32],\"_isDynamic\":[32],\"close\":[64],\"show\":[64],\"isOpen\":[64]}]]],[\"yduqs-notifications\",[[4,\"yduqs-notifications\",{\"position\":[1]}]]],[\"yduqs-quote\",[[4,\"yduqs-quote\",{\"dark\":[4],\"size\":[1]}]]],[\"yduqs-quote-body\",[[4,\"yduqs-quote-body\"]]],[\"yduqs-quote-image\",[[4,\"yduqs-quote-image\",{\"path\":[1]}]]],[\"yduqs-tags\",[[4,\"yduqs-tags\"]]],[\"yduqs-teoria\",[[4,\"yduqs-teoria\"]]],[\"yduqs-textarea\",[[4,\"yduqs-textarea\",{\"ligthtxtarea\":[4],\"outlinetxtarea\":[4],\"idbtn\":[1],\"idtxt\":[1],\"placeholder\":[1],\"withbtn\":[4],\"colunasmd\":[2],\"colunaslg\":[2],\"bgfeedbackdark\":[4],\"hidden_feedback\":[4],\"btnDisabilitado\":[32],\"value\":[32],\"displayAnswer\":[32],\"btnElement\":[32]}]]],[\"yduqs-timeline\",[[4,\"yduqs-timeline\",{\"horizontal\":[4],\"dark\":[4]}]]],[\"yduqs-timeline-item\",[[4,\"yduqs-timeline-item\",{\"last\":[4],\"icon\":[1]}]]],[\"yduqs-toggle\",[[0,\"yduqs-toggle\",{\"open\":[4],\"disable\":[4],\"teste\":[16],\"isOpen\":[32],\"isDisable\":[32]}]]],[\"yduqs-range\",[[0,\"yduqs-range\",{\"value\":[2],\"max\":[2],\"min\":[2],\"step\":[2],\"name\":[1],\"output\":[16]}]]],[\"my-stace\",[[0,\"my-stace\",{\"autoUpdateContent\":[4,\"auto-update-content\"],\"durationBeforeCallback\":[2,\"duration-before-callback\"],\"timeoutSaving\":[8,\"timeout-saving\"],\"options\":[8],\"readOnly\":[4,\"read-only\"],\"theme\":[513],\"mode\":[513],\"text\":[1],\"getEditor\":[64]}]]],[\"stace-editor\",[[0,\"stace-editor\",{\"autoUpdateContent\":[4,\"auto-update-content\"],\"durationBeforeCallback\":[2,\"duration-before-callback\"],\"timeoutSaving\":[8,\"timeout-saving\"],\"options\":[8],\"readOnly\":[4,\"read-only\"],\"theme\":[513],\"mode\":[513],\"text\":[1],\"getEditor\":[64]}]]],[\"yduqs-audio-player\",[[0,\"yduqs-audio-player\",{\"src\":[1],\"audio_id\":[1],\"shortdisplay\":[4],\"dark\":[4],\"rate\":[2],\"settings\":[16],\"_rate\":[32],\"coloraudio\":[32],\"initialize\":[64]}]]],[\"yduqs-countdown\",[[0,\"yduqs-countdown\",{\"_id\":[1,\"id\"],\"time\":[2],\"warningMarker\":[2,\"warning-marker\"],\"dangerMarker\":[32],\"number\":[32],\"interval\":[32],\"paused\":[32],\"start\":[64],\"stop\":[64],\"pause\":[64],\"restart\":[64]}]]],[\"yduqs-header-lab\",[[0,\"yduqs-header-lab\",{\"_title\":[1,\"title\"],\"items\":[1],\"hiddenFullscreen\":[4,\"hidden-fullscreen\"],\"inFullscreen\":[32]},[[8,\"fullscreenchange\",\"listennerFullscreenChange\"],[8,\"mozfullscreenchange\",\"listennerFullscreenChange\"],[8,\"webkitfullscreenchange\",\"listennerFullscreenChange\"],[8,\"msfullscreenchange\",\"listennerFullscreenChange\"]]]]],[\"yduqs-page-generic-lab\",[[4,\"yduqs-page-generic-lab\",{\"fluid\":[4],\"bg\":[1]}]]],[\"yduqs-progress-bar\",[[0,\"yduqs-progress-bar\",{\"value\":[2],\"max\":[2],\"min\":[2],\"semirounded\":[4],\"displayValue\":[4,\"display-value\"],\"_isValueVisible\":[32],\"show\":[64],\"hide\":[64],\"isValueVisible\":[64]}]]],[\"yduqs-rating\",[[0,\"yduqs-rating\",{\"cta\":[1],\"icon\":[1],\"tamanho\":[1],\"module\":[1]}]]],[\"yduqs-score\",[[0,\"yduqs-score\",{\"dataid\":[8],\"datatitle\":[1],\"datasubtitle\":[1],\"items\":[1],\"total\":[32],\"score\":[32]}]]],[\"yduqs-tag\",[[4,\"yduqs-tag\",{\"color\":[1]}]]],[\"yduqs-motivational-messages_2\",[[0,\"yduqs-motivational-messages\",{\"open\":[32],\"message\":[32],\"active\":[32],\"breakInterval\":[32],\"forwardInterval\":[32],\"looper\":[32],\"countdown\":[32],\"configOpen\":[32]},[[16,\"alertClosed\",\"handleCloseAlert\"],[16,\"alertClick\",\"handleCloseAlert\"],[16,\"confirmClosed\",\"handleCloseConfirm\"],[16,\"confirmClick\",\"handleCloseConfirm\"],[16,\"infoClosed\",\"handleCloseInfo\"],[16,\"toastClosed\",\"handleCloseToast\"]]],[0,\"yduqs-pager\",{\"total\":[32],\"current\":[32]},[[9,\"resize\",\"handleWindowResize\"],[16,\"onClickMenuTitle\",\"clickMenuTitleHandler\"]]]]],[\"yduqs-lab-questions_2\",[[0,\"yduqs-lab-questions\",{\"_id\":[1,\"id\"],\"config\":[1],\"error\":[32],\"step\":[32],\"items\":[32]}],[0,\"yduqs-quiz\",{\"dataid\":[8],\"overline\":[1],\"question\":[1],\"description\":[1],\"answers\":[1],\"indexType\":[1,\"index-type\"],\"selected\":[32]}]]],[\"yduqs-card-selecionavel_2\",[[4,\"yduqs-card-selecionavel\",null,[[0,\"onselect\",\"onSelectItem\"]]],[4,\"yduqs-card-selecionavel-item\",{\"selected\":[4],\"optionid\":[1],\"disabled\":[516],\"_isSelected\":[32],\"selectItem\":[64],\"unselectItem\":[64],\"isSelected\":[64]}]]],[\"yduqs-feedback-thumb\",[[0,\"yduqs-feedback-thumb\",{\"image\":[1],\"_class\":[1,\"class\"],\"feedback\":[4]}]]],[\"yduqs-title\",[[0,\"yduqs-title\",{\"topic_icon\":[1],\"topic_title\":[1],\"dark\":[4]}]]],[\"yduqs-card-video_2\",[[0,\"yduqs-card-video\",{\"id_video\":[1],\"module_video\":[1],\"type_video\":[1],\"title_video\":[1],\"subtitle_video\":[1],\"thumb_video\":[1],\"link_video\":[1],\"paragraph\":[1],\"time\":[1],\"border_bottom\":[4],\"active\":[4]}],[0,\"yduqs-image\",{\"alt\":[1],\"img_title\":[1],\"src\":[1],\"width\":[1],\"height\":[1],\"covered\":[4],\"_iscovered\":[32]}]]],[\"yduqs-playlist-video_2\",[[0,\"yduqs-playlist-video\",{\"module_number\":[2],\"english\":[4],\"spanish\":[4],\"settings\":[32],\"videoItems\":[32],\"videoSelected\":[32],\"moduleId\":[32],\"initialize\":[64],\"changeVideoGallery\":[64]}],[0,\"yduqs-video-player\",{\"videoId\":[1,\"video-id\"],\"src\":[1],\"covered\":[4],\"width\":[1],\"height\":[1],\"bgcolor\":[1],\"transparent\":[4]}]]],[\"yduqs-accordion_4\",[[0,\"yduqs-gallery-video\",{\"module_number\":[2],\"module_number_video\":[2],\"title_gallery\":[1],\"subtitle_gallery\":[1],\"title_video\":[1],\"moduleId\":[1,\"module-id\"],\"type_video\":[1],\"paragraph_video\":[1],\"english\":[4],\"spanish\":[4],\"srcVideo\":[1,\"src-video\"],\"scrollModules\":[32],\"changeVideo\":[64],\"changeModule\":[64],\"changeVideoExternal\":[64]},[[9,\"resize\",\"handleWindowResize\"]]],[4,\"yduqs-accordion\",{\"outline\":[4],\"_active\":[32]}],[4,\"yduqs-accordion-pane\",{\"open\":[4],\"_isOpen\":[32],\"show\":[64],\"close\":[64],\"isOpen\":[64]}],[0,\"yduqs-search-bar\",{\"open\":[32],\"term\":[32],\"hasSearch\":[32],\"cachedDb\":[32],\"actualFoundItemPosition\":[32],\"result\":[32]}]]],[\"yduqs-tab_2\",[[4,\"yduqs-tab\",{\"header\":[1],\"disabled\":[4],\"open\":[4],\"type\":[1],\"outline\":[1]}],[4,\"yduqs-tabs\",{\"darkmode\":[4],\"outlined\":[4],\"fixed_titles\":[4],\"icons\":[16],\"gtm_category\":[16],\"gtm_action\":[16],\"gtm_label\":[16],\"tabs\":[32],\"currentTab\":[64],\"openTab\":[64]}]]],[\"yduqs-card\",[[4,\"yduqs-card\",{\"dark\":[4],\"outlined\":[4],\"equal_height\":[4],\"small\":[4]}]]],[\"yduqs-modal\",[[4,\"yduqs-modal\",{\"variant\":[1],\"size\":[1],\"_title\":[1,\"title\"],\"isopen\":[4],\"maxbodyheight\":[2],\"_isopen\":[32],\"showModal\":[64],\"show\":[64],\"hide\":[64]},[[9,\"resize\",\"onResize\"]]]]],[\"yduqs-alert_4\",[[0,\"yduqs-alert\",{\"open\":[4],\"_title\":[1,\"title\"],\"subtitle\":[1],\"message\":[1],\"icon\":[1],\"usematerial\":[4],\"btntext\":[1]}],[0,\"yduqs-confirm\",{\"open\":[4],\"_title\":[1,\"title\"],\"subtitle\":[1],\"message\":[1],\"icon\":[1],\"usematerial\":[4],\"btntext\":[1]}],[0,\"yduqs-info\",{\"open\":[4],\"_title\":[1,\"title\"],\"subtitle\":[1],\"message\":[1],\"icon\":[1],\"usematerial\":[4],\"delay\":[2]}],[0,\"yduqs-toast\",{\"open\":[4],\"message\":[1],\"tit\":[1],\"icon\":[1],\"usematerial\":[4],\"delay\":[2]}]]],[\"yduqs-lab-error_2\",[[0,\"yduqs-lab-error\",{\"errors\":[16],\"message\":[1]}],[0,\"yduqs-loading\",{\"message\":[1],\"open\":[4],\"_isOpen\":[32],\"hide\":[64],\"show\":[64],\"isOpen\":[64]}]]]]"), options);
  });
};

export { defineCustomElements };