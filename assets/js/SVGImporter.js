function SVGImporter (module) {
    if (printVersion) {
        this.renderPrintVersion(module)
    } else {
        this.render(module)
    }
}

SVGImporter.prototype.renderPrintVersion = function (module) {
    let errList = []

    module.querySelectorAll('SVGInteraction').forEach(SVGTag => {
        let SVGPath = SVGTag.getAttribute('src')
        let SVGClass = SVGTag.getAttribute('class')
        let SVGId = SVGTag.getAttribute('id')

        if (!SVGPath || SVGPath === null) {
            errList.push(SVGTag)
            this.SVGNotFound(SVGTag, false)
            return
        }

        let SVGSpan = document.createElement('span')
        if (SVGClass) SVGSpan.setAttribute('class', SVGClass)
        if (SVGId) SVGSpan.setAttribute('id', SVGId)
        SVGSpan.classList.add('interactive-svg')
        SVGTag.parentElement.replaceChild(SVGSpan, SVGTag)
        
        this.SVGLoadPrintVersion(SVGPath, SVGSpan, SVGId)
    })

    if (errList.length > 0) {
        console.error('################################################################')
        console.error('############### Os seguintes SVGs não possuem SRC ##############')

        errList.forEach(el => {
            console.error(`#${el.getAttribute('id')}:`, el)
        })

        console.error('################################################################')
    }
}
SVGImporter.prototype.SVGLoadPrintVersion = function (path, placeholder, id) {
    let that = this

    let xhr = new XMLHttpRequest()
    xhr.open('GET', path, true)
    xhr.addEventListener('load', function () {
        if (this.status !== 200) {
            that.SVGNotFound(placeholder, true)
            return false
        }

        let response = this.response
        placeholder.innerHTML = response
        
        if (typeof SVGInteractions !== 'undefined' && typeof SVGInteractions[id] !== 'undefined') {
            let svg = placeholder.querySelector('svg')

            // Eventos
            if (typeof SVGInteractions[id].events !== 'undefined') {
                let interactions = SVGInteractions[id].events

                for (interactionId in interactions) {
                    let el = svg.querySelector(`#${interactionId}`)
                }
            }
        }
    })

    xhr.send()
}

SVGImporter.prototype.render = function (module) {
    let errList = []

    module.querySelectorAll('SVGInteraction').forEach(SVGTag => {
        let SVGPath = SVGTag.getAttribute('src')
        let SVGClass = SVGTag.getAttribute('class')
        let SVGId = SVGTag.getAttribute('id')

        if (!SVGPath || SVGPath === null) {
            errList.push(SVGTag)
            this.SVGNotFound(SVGTag, false)
            return
        }

        let SVGSpan = document.createElement('span')
        if (SVGClass) SVGSpan.setAttribute('class', SVGClass)
        if (SVGId) SVGSpan.setAttribute('id', SVGId)
        SVGSpan.classList.add('interactive-svg')
        SVGTag.parentElement.replaceChild(SVGSpan, SVGTag)
        
        this.SVGLoad(SVGPath, SVGSpan, SVGId)
    })

    if (errList.length > 0) {
        console.error('################################################################')
        console.error('############### Os seguintes SVGs não possuem SRC ##############')

        errList.forEach(el => {
            console.error(`#${el.getAttribute('id')}:`, el)
        })

        console.error('################################################################')
    }
}

SVGImporter.prototype.SVGLoad = function (path, placeholder, id) {
    let that = this

    let xhr = new XMLHttpRequest()
    xhr.open('GET', path, true)
    xhr.addEventListener('load', function () {
        if (this.status !== 200) {
            that.SVGNotFound(placeholder, true)
            return false
        }

        let response = this.response
        placeholder.innerHTML = response
        
        if (typeof SVGInteractions !== 'undefined' && typeof SVGInteractions[id] !== 'undefined') {
            let svg = placeholder.querySelector('svg')

            // Eventos
            if (typeof SVGInteractions[id].events !== 'undefined') {
                let interactions = SVGInteractions[id].events

                for (interactionId in interactions) {
                    let el = svg.querySelector(`#${interactionId}`)

                    if (el) {
                        el.addEventListener('click', interactions[interactionId])
                        el.style.setProperty('cursor', 'pointer')
                    }
                }
            }

            // Agrupamento de itens
            if (typeof SVGInteractions[id].groups !== 'undefined') {
                let groups = SVGInteractions[id].groups

                for (className in groups) {
                    for (elementId of groups[className]) {
                        svg.querySelector(`#${elementId}`).classList.add(className)
                    }
                }
            }

            // Itens ocultos
            if (typeof SVGInteractions[id].hiddenItems !== 'undefined') {
                let hiddenItems = SVGInteractions[id].hiddenItems

                for (hiddenId in hiddenItems) {
                    let el = svg.querySelector(`#${hiddenItems[hiddenId]}`)
                    
                    if (el) {
                        el.classList.add('hidden')
                    }
                }
            }
        }
    })

    xhr.send()
}

SVGImporter.prototype.SVGNotFound = function (container, hasSRC) {
    let h1 = document.createElement('h1')
    h1.style.setProperty('background-color', '#F00')
    h1.style.setProperty('color', '#FEE')
    h1.style.setProperty('text-align', 'center')

    container.appendChild(h1)

    if (hasSRC) {
        h1.appendChild(document.createTextNode('O SVG solicitado não foi encontrado!'))
    } else {
        h1.appendChild(document.createTextNode('O SRC do SVG não foi informado!'))
    }
}