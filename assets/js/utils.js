function openInNewTab(url) {
    var win = window.open(url, '_blank', 'resizable,scrollbars,status,width=' + screen.width + ',height=' + screen.height);
}

function saveInCache(value, key) {
    localStorage.setItem(`${key}`, value)
}

function recoverFromCache(element, key) {
    if (localStorage.getItem(`${key}`)) {
        element.innerHTML = localStorage.getItem(`${key}`)
    }
}

function afterLoad(element) {
    element.querySelectorAll('.recover-cache').forEach(el => {
        if (el.dataset.cacheKey) {
            recoverFromCache(el, el.dataset.cacheKey)
        }
    })

    element.querySelectorAll('.save-cache').forEach(el => {
        el.addEventListener('click', function () {
            if (el.dataset.idElementCache) {
                let elementCache = document.querySelector(`#${el.dataset.idElementCache}`)

                if (elementCache) {
                    if (el.dataset.cacheKey) {
                        saveInCache(elementCache.value, el.dataset.cacheKey)
                    } else {
                        console.warn('############')
                        console.warn(`####### ATENÇÃO: A chave para salvar o elemento ${elementCache} em Cache não foi encontrada no documento index.html.`)
                        console.warn('############')
                    }
                } else {
                    console.warn('############')
                    console.warn(`####### ATENÇÃO: O elemento de id ${elementCache} definido para ser salvo em Cache não foi encontrado no documento index.html.`)
                    console.warn('############')
                }
            }
        })
    })
}

function percent(actual, total) {
    return (actual * 100) / total
}

function configHiddenElements(idContainer, feedbackBuilder, module) {
    if (scripts) {
        if (scripts.aos) {
            AOS.init()
        }

        if (scripts.mathjaxToHTML || scripts.mathjaxToSVG) {
            if (idContainer) {
                MathJax.typeset([`#${idContainer}`])
            } else {
                MathJax.typeset()
            }
        }

        if (scripts.twentytwenty) {
            $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
                default_offset_pct: 0.8
            });
            $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
                default_offset_pct: 0.3,
                orientation: 'vertical'
            });
        }
    }

    if (feedbackBuilder) {
        feedbackBuilder.render(module)
    }
}

function getMenuSize() {
    let desktopMenu = 0
    let mobileMenu = 0

    if (document.querySelector('header #mobile-navigation')) {
        desktopMenu = document.querySelector('header #mobile-navigation').getBoundingClientRect().height
    }

    if (document.querySelector('header div.hamburguer')) {
        mobileMenu = document.querySelector('header div.hamburguer').getBoundingClientRect().height
    }

    return mobileMenu || desktopMenu
}

// https://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-pure-javascript
function fileExists(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', path, false);
    xhr.send();
    return xhr.status != 404;
}

function exibirConteudo(elemento, conteudo) {
    document.querySelector(`#${elemento}`).src = conteudo;
}

function showElement(fatherId, elementId) {
    document.querySelector(`#${fatherId}`).querySelector(`#${elementId}`).classList.remove('hidden')
}

function showElementAndHiddeOthers(fatherId, elementId, classGroup) {
    document.querySelector(`#${fatherId}`).querySelectorAll(`.${classGroup}`).forEach(el => {
        el.classList.add('hidden')
    })

    document.querySelector(`#${elementId}`).classList.remove('hidden')
}

function toggleVisibilityElement(fatherId, elementId) {
    document.querySelector(`#${fatherId}`).querySelector(`#${elementId}`).classList.toggle('hidden')
}

function flexChoice(parentClass) {
    let card = event.target.closest(`.${parentClass}`)
    card.classList.toggle('cardClosed');
    card.classList.toggle('cardOpened');
    card.classList.toggle('col-lg-4');
    card.classList.toggle('col-md-4');
    card.classList.toggle('col-lg-12');
    card.classList.toggle('col-md-12');
    card.querySelector("div.flexCards .flexCard .flexCover").classList.toggle('d-none');
    card.querySelector("div.flexCards .flexCard .flexContent").classList.toggle('d-table-cell');

    let top = card.offset().top - getMenuSize()
    window.scroll(0, top - 50)
}

function validateAnswer(idElText, idElHidden) {
    if (document.querySelector(`#${idElText}`).value !== "") {
        document.querySelector(`#${idElHidden}`).classList.toggle('hidden')
    }
}

function validateAnswerAndOpenCollapse(idElText, idCollapse) {
    if (document.querySelector(`#${idElText}`).value !== "") {
        toggleCollapse(idCollapse)
    } else {
        abrirAlerta('<p>Digite a sua resposta.</p>', this)
    }
}

// Métodos nos elementos nativos do HTML
if (!HTMLElement.offset) {
    HTMLElement.prototype.offset = function () {
        let rect = this.getBoundingClientRect()
        let left = window.pageXOffset || document.documentElement.scrollLeft
        let top = window.pageYOffset || document.documentElement.scrollTop

        return {
            top: rect.top + top,
            left: rect.left + left
        }
    }
}

if (!HTMLElement.empty) {
    HTMLElement.prototype.empty = function () {
        while (this.firstChild) {
            this.removeChild(this.lastChild)
        }
    }
}

function generateUUID(cont, container) {
    idsList = ''

    if (cont) {
        for (i = 0; i < cont; i++) {
            idsList += createUUID() + '\n '
        }
    } else {
        idsList += createUUID()
    }

    if (container) {
        document.querySelector(`#${container}`).innerHTML = idsList
    } else {
        return idsList
    }
}

function isUUID(uuid) {
    let s = "" + uuid;

    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) {
        return false;
    }
    return true;
}

function print(url) {
    openInNewTab(url)
    
    if (typeof storage !== 'undefined'){
        storage.sendPrint()
    }
}