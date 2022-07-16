// Classe Module
// moduleElement: tag <module>
// referentialIndex: posição da tag <module> dentro da hierarquia do documento
function Module(moduleElement, referentialIndex, feedbackBuilder, themeRef) {
    printVersion ? this.renderPrintVersion(moduleElement, referentialIndex) :
        this.render(moduleElement, referentialIndex, feedbackBuilder, themeRef)
}

// Método render: Realiza a construção do módulo
Module.prototype.render = function (moduleElement, i, feedbackBuilder, themeRef) {
    let moduleSection = document.createElement('section')
    moduleSection.setAttribute('id', moduleElement.getAttribute('id') || `module${i}`)
    moduleSection.innerHTML = moduleElement.innerHTML
    moduleSection.dataset.referentialIndex = i

    moduleElement.parentElement.replaceChild(moduleSection, moduleElement)

    this.collectMenuData(moduleElement, i, moduleSection)

    // Atribuição dos parâmetros do módulo
    this.element = moduleSection
    this.referentialIndex = i

    if (moduleElement.dataset.locked === 'true') {
        this.locked = true
        moduleSection.remove()
    } else {
        this.buildComponents(themeRef)
    }

    this.collectScriptsData(moduleElement)

    return this
}

Module.prototype.collectMenuData = function (moduleElement, i, moduleSection) {
    // Busca e resgate do nome e da principal âncora do módulo
    let moduleTitle = moduleSection.querySelector('.module-title')
    let moduleAnchor = moduleSection.querySelector('.module-anchor')

    if (moduleTitle !== null) {
        if (moduleTitle.dataset.menuTitle) {
            moduleTitle = moduleTitle.dataset.menuTitle
        } else {
            moduleTitle = moduleTitle.tagName === 'IMG' ? moduleTitle.getAttribute('title') : moduleTitle.innerHTML
        }
    } else if (moduleElement.dataset.menuTitle) {
        moduleTitle = moduleElement.dataset.menuTitle
    } else {
        moduleTitle = `Módulo ${i}`
    }

    if (moduleAnchor !== null) {
        if (!moduleAnchor.getAttribute('id')) {
            moduleAnchor.setAttribute('id', `module${i}-anchor`)
        }

        moduleAnchor = moduleAnchor.getAttribute('id')
    } else {
        moduleAnchor = moduleSection.getAttribute('id')
    }

    // Localiza todos os tópicos do módulo (sub-itens)
    let topics = []
    moduleSection.querySelectorAll('.module-topic-title').forEach((el, j) => {
        if (el.getAttribute('id') === null || el.getAttribute('id') === '') {
            el.setAttribute('id', `module${i}-topic${j}`)
        }

        let elTitle = el.tagName === 'IMG' ? el.getAttribute('title') : el.innerHTML

        if (el.dataset.menuTitle) {
            elTitle = moduleTitle.dataset.menuTitle
        }

        topic = {
            title: elTitle,
            id: el.getAttribute('id')
        }

        topics.push(topic)
    })

    let preItems = []
    moduleSection.querySelectorAll(`[data-pre-menu-item='true']`).forEach(el => {
        if (el.getAttribute('id') === null || el.getAttribute('id') === '') {
            el.setAttribute('id', `module${i}-pre-topic${j}`)
        }

        if (el.dataset.preMenuTitle) {
            preItem = {
                title: el.dataset.preMenuTitle,
                id: el.getAttribute('id')
            }

            preItems.push(preItem)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: O elemento ${el} não possui um título definido. Sem título não é possível criar uma referência no menu para o mesmo.`)
            console.warn('############')
        }
    })

    this.title = moduleTitle
    this.mainAnchor = moduleAnchor
    this.topics = topics
    this.preItems = preItems
}

Module.prototype.collectScriptsData = function (moduleElement) {
    if (typeof scripts !== 'undefined') {
        this.step = moduleElement.dataset.stepBar ? moduleElement.dataset.stepBar : true

        if ((scripts.themeProgressBar || scripts.themeDefaultBar)) {
            if (this.step !== 'false') {
                this.step = this.getThemeBarAttributes(moduleElement)
            }
        }

        if (scripts.achievements) {
            if (moduleElement.dataset.achievementAnimation === 'true' &&
                moduleElement.dataset.achievementByScroll != 'true') {
                this.achievement = this.getAchievementAttributes(moduleElement)
            }
        }
    }
}

Module.prototype.renderPrintVersion = function (moduleElement, i) {
    let moduleSection = document.createElement('section')
    moduleSection.setAttribute('id', moduleElement.getAttribute('id') || `module${i}`)
    moduleSection.innerHTML = moduleElement.innerHTML

    moduleElement.parentElement.replaceChild(moduleSection, moduleElement)

    moduleElement.querySelectorAll('.hidden').forEach(el => {
        el.classList.remove('hidden')
    })

    this.element = moduleSection

    this.buildComponentsToPrintVersion()
}

Module.prototype.buildComponentsToPrintVersion = function () {
    if (typeof scripts !== 'undefined') {
        if (scripts.typewriter) {
            new TypeWriter(this.element)
        }

        if (scripts.questions) {
            questionsBuilder(this.element)
        }

        if (scripts.SVGImporter) {
            new SVGImporter(this.element)
        }

        if (scripts.quiz) {
            new Quiz(this.element)
        }

        if (scripts.charts) {
            new ChartBuilder(this.element)
        }

        if (scripts.activities) {
            new ActivityBuilder(this.element)
        }

        if (scripts.glossaryMenu) {
            new GlossaryMenu(this.element)
        }

        if (scripts.sensible ) {
            new Sensible(this.element)
        }

        if (scripts.audioCard) {
            //versão de impresão do audio card
            //Chamar sempre antes da versão de impressão do podcast
            this.buildPrintVersionAudioCard()
        }

        if (scripts.player) {
            this.buildPrintVersionPodcast()
        }

        if (scripts.modal) {
            this.buildPrintVersionModal()
        }

        if (scripts.accordion) {
            this.buildPrintVersionAccordion()
        }

        if (scripts.collapse) {
            this.buildPrintVersionCollapse()
        }
    }

    if (typeof styles !== 'undefined') {
        if (styles.timeline) {
            this.buildPrintVersionTimeline()
        }
    }


    this.buildPrintVersionHeader()

    this.buildPrintVersionImg()

    this.buildPrintVersionVideos()

    this.buildPrintVersionTooltip()

    this.buildPrintVersionAlert()

    this.buildPrintVersionLink()

    this.buildPrintVersionComplePhrase()

}

Module.prototype.buildComponents = function (themeRef) {
    if (typeof scripts !== 'undefined') {
        if (scripts.questions) {
            this.recoveredQuestions = questionsBuilder(this.element, themeRef)
        }

        if (scripts.quiz) {
            new Quiz(this.element)
        }

        if (scripts.activities) {
            new ActivityBuilder(this.element)
        }

        if (scripts.player) {
            this.configPodcastPlayer()
        }

        afterLoad(this.element)

        if (scripts.achievements) {
            this.configureAnimationAchievementsScroll()
        }

        if (scripts.modal) {
            this.configModals()
        }

        if (scripts.collapse) {
            this.configCollapses()
        }

        if (scripts.accordion) {
            this.configAccordions()
        }

        if (scripts.viewportResize || typeof scripts.viewportResize === 'undefined') {
            this.viewportResize()
        }

        if (scripts.swiper) {
            new Swiper('.swiper-container-navigation', navigationData);
            new Swiper('.swiper-container-progress', progressData);
            new Swiper('.swiper-container-multiple', multipleData);

            if (typeof customSwiperData !== 'undefined') {
                for (i in customSwiperData) {
                    new Swiper(i, customSwiperData[i])
                }
            }
        }

        if (scripts.typewriter) {
            this.typeWriter = new TypeWriter(this.element)
        }

        if (scripts.codeExercise) {
            new CodeExercise(this.element)
        }

        if (scripts.rgbExercise) {
            new RgbExercise(this.element)
        }

        if (scripts.SVGImporter) {
            new SVGImporter(this.element)
        }

        if (scripts.audioCard) {
            new AudioCard(this.element)
        }

        if (scripts.horizontalTimeline) {
            new HorizontalTimeline(this.element)
        }

        if (scripts.horizontalTimeline2) {
            new HorizontalTimeline2(this.element)
        }

        if (scripts.charts) {
            new ChartBuilder(this.element)
        }

        if (scripts.glossaryMenu) {
            new GlossaryMenu()
        }

        if (scripts.sensible ) {
            new Sensible(this.element)
        }

        if (scripts.zoomFullscreen ) {
            new zoomFullscreen(this.element)
        }

        if (scripts.zoomImage) {
            new zoomImage(this.element)
        }

        if (scripts.compiler) {
            new Compiler(this.element)
        }

        configHiddenElements(this.element.getAttribute('id'), themeRef.feedback, this.element)
    }

    this.buildButtonPrintVersion()

    this.buildLazyLoadingImage()

    this.tecladoAcessibilidade()

    //Iniciando os tooltips do Bootstrap
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    if (typeof storage !== 'undefined') {
        storage.configObserverProgress(this)
    }
}

Module.prototype.buildButtonPrintVersion = function () {

    let btnPrint = document.getElementById('btnPrint')

    if (btnPrint !== null) {
        btnPrint.remove()
    }

    let div = document.createElement('div')
    div.classList.add('container-fluid')
    div.classList.add('mt-5')
    div.classList.add('col-8')
    div.classList.add('col-lg-6')
    div.id = 'btnPrint'

    let div1 = document.createElement('div')
    div1.classList.add('container')
    div1.classList.add('bg-dark')
    div1.classList.add('text-white')
    div1.classList.add('rounded')
    div1.classList.add('p-3')

    let div2 = document.createElement('div')
    div2.classList.add('row')
    div2.classList.add('align-items-center')

    let div3 = document.createElement('div')
    div3.classList.add('col-12')
    div3.classList.add('col-md-3')
    div3.classList.add('col-lg-3')

    let button = document.createElement('a')
    button.addEventListener('click', evt => {
        const url = document.URL
        let urlPrint = url.replace(/#+([^>]*[^/])*[^')]/, '')
        window.open(urlPrint + '#imprimir')

        if (typeof storage !== 'undefined') {
            storage.sendPrint()
        }
    })
    button.classList.add('btn')
    button.classList.add('btn-lg')
    button.classList.add('btn-primary')
    button.classList.add('btn-block')
    button.classList.add('py-4')

    let i1 = document.createElement('i')
    i1.classList.add('fa')
    i1.classList.add('fa-file-alt')
    i1.classList.add('fa-1x')



    let i2 = document.createElement('i')
    i2.classList.add('fas')
    i2.classList.add('fa-arrows-alt-h')
    i2.classList.add('fa-1x')
    i2.classList.add('px-2')


    let i3 = document.createElement('i')
    i3.classList.add('fa')
    i3.classList.add('fa-file-pdf')
    i3.classList.add('fa-1x')

    let div4 = document.createElement('div')
    div4.classList.add('col-12')
    div4.classList.add('col-md-9')
    div4.classList.add('col-lg-9')

    let p = document.createElement('p')
    p.classList.add('m-0')
    p.classList.add('btnPrintTxt')

    let txt = "Ao clicar nesse botão, uma nova aba se abrirá com o material preparado para impressão. Nela, acesse o menu do seu navegador e clique em imprimir ou se preferir, utilize o atalho Ctrl + P. Nessa nova janela, na opção destino, direcione o arquivo para sua impressora ou escolha a opção: <strong>Salvar como PDF</strong>."

    if (typeof printConfigs !== 'undefined'){
        if(printConfigs.textPrint){
            txt = printConfigs.textPrint
        }      
    }

    div.appendChild(div1)
    div1.appendChild(div2)

    button.appendChild(i1)
    button.appendChild(i2)
    button.appendChild(i3)
    div3.appendChild(button)

    p.innerHTML = txt
    div4.appendChild(p)

    div2.appendChild(div3)
    div2.appendChild(div4)

    let footer = document.querySelector('.bg_footer')

    if (footer) {
        footer.insertAdjacentElement('beforeEnd', div)
    }

}

Module.prototype.unlock = function (themeRef) {
    document.querySelector('main').append(this.element)

    this.buildComponents(themeRef)

    let lockedMenu = document.querySelector(`span.padlock.lock-${this.mainAnchor}`)

    lockedMenu.parentElement.classList.remove('module-locked')
    lockedMenu.remove()

    this.locked = false
}

Module.prototype.configModals = function () {
    this.element.querySelectorAll('em-modal').forEach(obj => {
        modalList[obj.getAttribute('name')] = new Modal(obj, this.element)
    })
}

Module.prototype.configCollapses = function () {
    this.element.querySelectorAll('theme-collapse').forEach(obj => {
        modalList[obj.getAttribute('name')] = new Collapse(obj)
    })
}

Module.prototype.configAccordions = function () {
    this.element.querySelectorAll('theme-accordion').forEach(obj => {
        modalList[obj.getAttribute('name')] = new Accordion(obj)
    })
}

Module.prototype.viewportResize = function () {
    let content = document.querySelector('meta').nextElementSibling
    let newContent = 'width=device-width, initial-scale=1'
    content.setAttribute('content', newContent)
}

Module.prototype.configPodcastPlayer = async function () {
    let playerClass = '.podcast-player'
    let playerWithoutDownloadClass = '.podcast-player-without-download'

    await this.element.querySelectorAll(`${playerClass}`).forEach(player => {
        options = {
            showDownloadButton: true
        }
        new GreenAudioPlayer(`${playerClass}`, options);
        player.classList.remove(`${playerClass.replace('.','')}`)                         
    })

    await this.element.querySelectorAll(`${playerWithoutDownloadClass}`).forEach(player => {
        options = {
            showDownloadButton: false
        }
        new GreenAudioPlayer(`${playerWithoutDownloadClass}`, options);
        player.classList.remove(`${playerWithoutDownloadClass.replace('.','')}`)                             
    })
    
    if (typeof storage != 'undefined') {
        this.element.querySelectorAll('.green-audio-player').forEach(container => {
            let divPlay = container.querySelector('.play-pause-btn')
            let src = divPlay.parentElement.querySelector('audio source').getAttribute('src')
            let podcast = undefined

            if (typeof storage.podcasts !== 'undefined') {
                podcast = storage.podcasts.find(p => {
                    return p.podcastId == src
                })
            }

            if (podcast != undefined) {
                container.dataset.podcastId = podcast.id
            }

            if (podcast == undefined || !podcast.play) {
                divPlay.addEventListener("click", () => {
                    if (container.dataset.playSended === undefined || container.dataset.playSended === false) {
                        container.dataset.playSended = true
                        storage.sendPlayPodcast(src, container)
                    }
                })
            }

            if (podcast == undefined || !podcast.download) {
                container.querySelector('.download').addEventListener("click", () => {
                    if (container.dataset.downloadSended === undefined || container.dataset.downloadSended === false) {
                        container.dataset.downloadSended = true
                        storage.sendDownloadPodcast(src, container)
                    }
                })
            }
        })
    }
}

Module.prototype.configureAnimationAchievementsScroll = function () {
    let module = this
    module.element.querySelectorAll('[data-achievement-by-scroll=true]').forEach(el => {
        if (el.dataset.achievementTitle) {
            let achievement = module.getAchievementAttributes(el)

            var handler = function (event) {
                if (el.getBoundingClientRect().top < 0) {
                    if (theme.themeDefaultBar && el.dataset.achievementActivateBar) {
                        theme.themeDefaultBar.activateAnimation(module.referentialIndex, theme.modules.filter(m => {
                            return m.step !== 'false'
                        }))
                    }

                    theme.achievements.startAnimation(achievement, '')
                    window.removeEventListener('scroll', handler)
                }
            }

            window.addEventListener('scroll', handler)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: O título para a conquista do elemento #${el.getAttribute('id')} não foi encontrado no arquivo index.html`)
            console.warn('############')
            el.removeAttribute('data-achievement-by-scroll')
        }
    })
}

Module.prototype.getAchievementAttributes = function (element) {
    let achievement = {}

    if (element.dataset.achievementTitle) {
        achievement.title = element.dataset.achievementTitle
    }

    if (element.dataset.achievementDescription) {
        achievement.description = element.dataset.achievementDescription
    }

    if (element.dataset.achievementIcon) {
        achievement.icon = element.dataset.achievementIcon
    }

    if (element.dataset.achievementCollection) {
        achievement.collection = element.dataset.achievementCollection
    }

    return achievement
}

Module.prototype.getThemeBarAttributes = function (moduleElement) {
    let step = {}

    if (moduleElement.dataset.stepIcon) {
        step.icon = moduleElement.dataset.stepIcon
    }

    if (moduleElement.dataset.stepCollection) {
        step.collection = moduleElement.dataset.stepCollection
    }

    if (moduleElement.dataset.stepText) {
        step.text = moduleElement.dataset.stepText
    }

    if (moduleElement.dataset.stepConclusionIcon) {
        step.conclusionIcon = moduleElement.dataset.stepConclusionIcon
    }

    if (moduleElement.dataset.stepConclusionCollection) {
        step.conclusionCollection = moduleElement.dataset.stepConclusionCollection
    }

    if (moduleElement.dataset.stepOnGoingIcon) {
        step.onGoingIcon = moduleElement.dataset.stepOnGoingIcon
    }

    if (moduleElement.dataset.stepOnGoingCollection) {
        step.onGoingCollection = moduleElement.dataset.stepOnGoingCollection
    }

    if (moduleElement.dataset.stepUseTooltipIcon) {
        step.useToolTipIcon = moduleElement.dataset.stepUseTooltipIcon
    }

    return step
}

Module.prototype.buildPrintVersionHeader = function () {
    let logo = document.querySelector('.img_abertura').querySelector('.Logo').getAttribute('src')
    let title = document.querySelector('head').querySelector('title').text

    let img = document.createElement('img')
    img.classList.add('imgPrincipal')
    img.src = logo

    let h1 = document.createElement('h1')
    h1.classList.add('titlePrincipal')
    h1.append(title)

    if (document.querySelector('.imgPrincipal') == null) {
        let ap = document.getElementById('Apresentacao')

        if (ap) {
            ap.insertAdjacentElement('afterbegin', h1)
            ap.insertAdjacentElement('afterbegin', img)
        }
    }
}

Module.prototype.buildPrintVersionAudioCard = function () {

    let audioCardPrintVersion = function () {
        let containerPrintVersion = document.createElement('div')

        let img = document.createElement('img')
        img.src = "../assets/img/audio_print_image.jpg";

        containerPrintVersion.appendChild(img)
        return containerPrintVersion
    }

    this.element.querySelectorAll('audio-card').forEach(el => {
        let audioCardPrint = audioCardPrintVersion()
        el.parentElement.replaceChild(audioCardPrint, el)
    })
}

Module.prototype.buildPrintVersionPodcast = function () {
    let podcastPrintVersion = function () {
        let containerPrintVersion = document.createElement('div')

        let img = document.createElement('img')
        img.src = "../assets/img/podcast_print_image.png";

        containerPrintVersion.appendChild(img)
        return containerPrintVersion
    }

    this.element.querySelectorAll('.podcast-player').forEach(el => {

        let parent = el.parentNode
        for (let i = 0; i < 4; i++) {
            parent = parent.parentNode
        }

        let podcastPrint = podcastPrintVersion()
        parent.parentElement.replaceChild(podcastPrint, parent)
    })

    this.element.querySelectorAll('.podcast-player-without-download').forEach(el => {
        let podcastPrint = podcastPrintVersion()
        el.parentElement.replaceChild(podcastPrint, el)
    })
}

Module.prototype.buildPrintVersionImg = function () {

    this.element.querySelectorAll('img').forEach(el => {

        let newContent = document.createElement('span')

        let img = document.createElement('img')
        img.src = el.getAttribute('src')
        img.title = el.getAttribute('title')
        img.class = el.getAttribute('class')
        img.alt = el.getAttribute('alt')

        let br = document.createElement('br')
        let span = document.createElement('span')
        span.append(el.getAttribute('title'))

        newContent.appendChild(img)
        newContent.appendChild(br)
        newContent.appendChild(span)

        if (el.getAttribute('title') !== null) {
            el.parentElement.replaceChild(newContent, el)
        }
    })

}

Module.prototype.buildPrintVersionVideos = function () {
    let videoPrintVersion = function () {
        let containerPrintVersion = document.createElement('div')

        let img = document.createElement('img')
        img.src = "../assets/img/video_print_image.png";

        containerPrintVersion.appendChild(img)
        return containerPrintVersion
    }

    this.element.querySelectorAll('iframe').forEach(el => {

        let parent = el.parentNode
        // for (let i = 0; i < 5; i++) {
        //     parent = parent.parentNode
        // }

        let videoPrint = videoPrintVersion()
        parent.parentElement.replaceChild(videoPrint, parent)
    })
}

Module.prototype.buildPrintVersionModal = function () {
    this.element.querySelectorAll('em-modal').forEach(el => {
        el.querySelectorAll('.container').forEach(e => {
            e.classList.add('modal_background')
        })
    })
}

Module.prototype.buildPrintVersionTooltip = function () {
    this.element.querySelectorAll('[data-toggle=tooltip]').forEach(el => {
        let txt = el.getAttribute('data-original-title') || el.getAttribute('title')
        let position = el.getAttribute('data-placement')
        let isHtml = el.getAttribute('data-html')
        let span = document.createElement('span')

        if (position === null && isHtml === null) {
            span.classList.add('tooltip_background')
            let tooltip = '(' + txt + ')'
            span.append(tooltip)
        }

        el.appendChild(span)
    })
}
Module.prototype.buildPrintVersionAccordion = function () {
    this.element.querySelectorAll('theme-accordion').forEach(el => {
        el.querySelectorAll('tab').forEach(e => {
            let img1 = e.getAttribute('tabClickOpen')
            let img2 = e.getAttribute('tabClickClose')

            if (img1 && img2) {
                let contador = 0
                let image1 = img1.match(/([^\/img\\]+.jpg)/igm)
                let image2 = img2.match(/([^\/img\\]+.jpg)/igm)

                if (image1 && image2) {
                    el.querySelectorAll('tab').forEach(t => {
                        let title = t.querySelector('tab-title')
                        title.classList.add('title_accordion')

                        let content = t.querySelector('content')
                        content.classList.add('content_accordion')

                        let i = document.createElement('img')
                        let nameImage = contador == 0 ? image1 : image2
                        i.src = "img/" + nameImage

                        t.classList.add('accordion_tab')
                        t.insertBefore(i, content);

                        contador++
                    })
                }
            }
        })
    })
}

Module.prototype.buildPrintVersionCollapse = function () {
    this.element.querySelectorAll('theme-collapse').forEach(el => {
        let img1 = el.getAttribute('tabClickOpen')

        if (img1) {
            let image1 = img1.match(/img\/+([^>]*[^/])*[^')]/)
            image1 = image1[0].toString()
            if (image1) {
                el.querySelectorAll('img').forEach(imageContent => {
                    imageContent.src = image1
                })
            }
        }
    })

    this.element.querySelectorAll('.theme-simple-collapse').forEach(el => {
        let elParent = el.parentElement
        elParent.classList.add('collapse-simple')
    })
}

Module.prototype.buildPrintVersionAlert = function () {
    this.element.querySelectorAll('.alerta').forEach(el => {
        el.querySelectorAll('[onclick]').forEach(e => {
            let a = e.getAttribute('onclick')
            let alerta = (a.match(/\"([^\\].*)\"/igm) || a.match(/\'([^\\].*)\'/igm)).toString()

            let p = document.createElement('p')
            p.innerHTML = alerta.replaceAll("'", "")
            p.classList.add('itemAlert')

            el.appendChild(p)
        })
    })
}

Module.prototype.buildPrintVersionLink = function () {
    this.element.querySelectorAll('.itemLinks').forEach(el => {

        let l = el.getAttribute('onclick')
        let link = '(' + (l.match(/\"([^\\].*)\"/igm) || l.match(/\'([^\\].*)\'/igm).toString()) + ')'

        let span = document.createElement('span')
        span.innerHTML = link.replaceAll("'", "")
        span.classList.add('itemLink')

        let p = el.parentNode
        p.appendChild(span)
    })
}

Module.prototype.buildPrintVersionTimeline = function () {
    this.element.querySelectorAll('.timelines').forEach(el => {

        el.querySelectorAll('.fa-calendar-alt').forEach(icon => {
            icon.remove()
        })

        el.querySelectorAll('.timeline2').forEach(t2 => {
            t2.remove()
        })

        let cont = 0
        el.querySelectorAll('.timeline1').forEach(t1 => {
            cont++
            if (cont % 2 == 0) {
                let itemTimeline = t1.querySelector('.itemTimeline')
                let items = itemTimeline.children
                itemTimeline.insertBefore(items[(items.length - 1)], items[0])
            }
        })
    })
}

Module.prototype.buildPrintVersionComplePhrase = function () {

    this.element.querySelectorAll('select').forEach(el => {

        let span = document.createElement('span')
        span.classList.add('selectBlank')

        el.parentElement.replaceChild(span, el)

    })

}

Module.prototype.buildLazyLoadingImage = function () {

    var isMobileIOS = /iPhone|iPad/i.test(navigator.userAgent);
    
    if (!isMobileIOS) {
        this.element.querySelectorAll('img').forEach(el =>{
            el.setAttribute("loading", "lazy");
        })
    } else {
        this.element.querySelectorAll('img').forEach(el =>{
            el.removeAttribute("loading");
        })
    }

}




Module.prototype.tecladoAcessibilidade = function () {
    document.addEventListener("keydown", function (e) {
        let t,
            i = 0;
        do {
            (i += 1),
                e.altKey && e.key == i && ((t = document.getElementById("modulo" + i)), window.scrollTo(t.offsetLeft, t.offsetTop)),
                e.altKey && "c" == e.key && ((t = document.getElementById("conclusao")), window.scrollTo(t.offsetLeft, t.offsetTop)),
                e.altKey && "a" == e.key && ((t = document.getElementById("Apresentacao")), window.scrollTo(t.offsetLeft, t.offsetTop));
        } while (i <= 10);
    });
};

function importMfCss() {
    let linkMfCss = document.createElement('link')
    linkMfCss.setAttribute('rel', 'stylesheet')
    linkMfCss.setAttribute('href', `${LIBS_PATH}/css/modFeedback.min.css`)
    document.querySelector('head').appendChild(linkMfCss)
}

function importMfJs() {
    let scriptMf = document.createElement('script')
    scriptMf.setAttribute('type', 'text/javascript')
    scriptMf.setAttribute('src', `${LIBS_PATH}/js/modFeedback.min.js`)
    document.querySelector('head').appendChild(scriptMf)
}

importMfCss();
importMfJs();