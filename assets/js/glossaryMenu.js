function GlossaryMenu (module) {
    if (printVersion) {
        this.renderPrintVersion(module)
    } else {
        this.render()
    }
}
GlossaryMenu.prototype.renderPrintVersion = function (module) {
    if (typeof glossary === 'undefined') {
        console.warn('###########')
        console.warn('### O arquivo glossary.js não foi adicionado no tema')
        console.warn('###########')

        return
    }

    module.querySelectorAll('.glossary-itens').forEach(element => {

        for(let i=0; i<glossary.length; i++) {

            let li = document.createElement('li')
            li.dataset.key = glossary[i].term

            let termSpan = document.createElement('span')
            termSpan.classList.add('glossaryMenu-outerContainer-wordsList-item-term')
            termSpan.innerHTML = glossary[i].term

            let termP = document.createElement('p')
            termP.classList.add('glossaryMenu-outerContainer-wordsList-item-meaning')
            termP.innerHTML = glossary[i].meaning

            li.appendChild(termSpan)
            li.appendChild(termP)
            
            element.appendChild(li)
        }
    })


    // Estrutura com a lista de termos
    let menu = document.createElement('div')
    menu.classList.add('glossaryMenu')

    let outerContainer = document.createElement('div')
    outerContainer.classList.add('glossaryMenu-outerContainer')

    let title = document.createElement('a')
    title.classList.add('glossaryMenu-outerContainer-title')
    title.setAttribute('href', 'javascript:void(0)')

    let titleIcon = document.createElement('i')
    titleIcon.classList.add('material-icons', 'glossaryMenu-outerContainer-title-icon')


    titleIcon.appendChild(document.createTextNode('bookmark'))
    title.appendChild(titleIcon)
    title.appendChild(document.createTextNode('Glossário'))
    outerContainer.appendChild(title)
    menu.appendChild(outerContainer)
    document.body.appendChild(menu)

    // Atribui o objeto HTML do glossário
    this.menu = menu
}


GlossaryMenu.prototype.render = function () {
    if (typeof glossary === 'undefined') {
        console.warn('###########')
        console.warn('### O arquivo glossary.js não foi adicionado no tema')
        console.warn('###########')

        return
    }

    // Estrutura externa
    let openGlossaryBtn = document.createElement('a')
    openGlossaryBtn.classList.add('glossaryMenu-OpenButton')
    openGlossaryBtn.setAttribute('href', 'javascript:void(0)')
    openGlossaryBtn.addEventListener('click', () => menu.classList.add('show'))

    let openGlossaryBtnIcon = document.createElement('i')
    openGlossaryBtnIcon.classList.add('material-icons')

    openGlossaryBtnIcon.appendChild(document.createTextNode('bookmark'))
    openGlossaryBtn.appendChild(openGlossaryBtnIcon)
    openGlossaryBtn.appendChild(document.createTextNode('Glossário'))
    document.body.appendChild(openGlossaryBtn)

    // Altera o tamanho do menu na variável quando o tamanho da tela for alterado
    window.addEventListener('resize', () => {
        openGlossaryBtn.style.setProperty('--menu-size', `${getMenuSize()}px`)
        menu.style.setProperty('--menu-size', `${getMenuSize()}px`)
    })

    // Estrutura com a lista de termos
    let menu = document.createElement('div')
    menu.classList.add('glossaryMenu')

    let outerContainer = document.createElement('div')
    outerContainer.classList.add('glossaryMenu-outerContainer')

    let title = document.createElement('a')
    title.classList.add('glossaryMenu-outerContainer-title')
    title.setAttribute('href', 'javascript:void(0)')
    title.addEventListener('click', () => menu.classList.remove('show'))

    let titleIcon = document.createElement('i')
    titleIcon.classList.add('material-icons', 'glossaryMenu-outerContainer-title-icon')

    let filterContainer = document.createElement('div')
    filterContainer.classList.add('glossaryMenu-outerContainer-filterContainer')

    let filterInput = document.createElement('input')
    filterInput.classList.add('glossaryMenu-outerContainer-filterInput')
    filterInput.setAttribute('placeholder', 'Filtre o termo')
    filterInput.addEventListener('keyup', (evt) => { this.filterTerm(evt.target) })

    let wordsList = document.createElement('ul')
    wordsList.classList.add('glossaryMenu-outerContainer-wordsList')

    titleIcon.appendChild(document.createTextNode('bookmark'))
    title.appendChild(titleIcon)
    title.appendChild(document.createTextNode('Glossário'))
    filterContainer.appendChild(filterInput)
    outerContainer.appendChild(title)
    outerContainer.appendChild(filterContainer)
    outerContainer.appendChild(wordsList)
    menu.appendChild(outerContainer)
    document.body.appendChild(menu)

    // Atribui o objeto HTML do glossário
    this.menu = menu

    // Atribui a lista de termos ao objeto Glossário (este, será usado para controlar a filtragem)
    this.filterTerm(filterInput)
}

GlossaryMenu.prototype.filterTerm = function (input) {
    // Reseta a busca anterior
    this.terms = glossary

    // Verifica se há algum termo no input responsável pela busca e realiza a filtragem caso haja. se não houver, retorna a lista completa de termos
    if (input.value) {
        this.terms = glossary.filter(term => new RegExp(`${input.value}`, 'ig').test(term.term))
    }

    let wordsList = this.menu.querySelector('.glossaryMenu-outerContainer-wordsList')
    wordsList.empty()

    for (term of this.terms) {
        let li = document.createElement('li')
        li.classList.add('glossaryMenu-outerContainer-wordsList-item')
        li.dataset.key = term.term

        let termSpan = document.createElement('span')
        termSpan.classList.add('glossaryMenu-outerContainer-wordsList-item-term')
        termSpan.innerHTML = term.term

        let termP = document.createElement('p')
        termP.classList.add('glossaryMenu-outerContainer-wordsList-item-meaning')
        termP.innerHTML = term.meaning

        li.appendChild(termSpan)
        li.appendChild(termP)
        wordsList.appendChild(li)
    }
}

// Essa alteração vai ficar pro futuro. Por agora, não vai rolar
// function findTerm (term) {
//     if (!scripts.glossaryMenu) {
//         return
//     }

//     let menu = document.querySelector('.glossaryMenu')
//     menu.classList.add('show')

//     let termPosition = menu.querySelector(`li[data-key='${term}']`).getBoundingClientRect()
//     menu.querySelector('ul').scroll(termPosition.left, termPosition.top)
// }

function findTerm (term) {
    if (!scripts.glossaryMenu) {
        return
    }

    let menu = document.querySelector('.glossaryMenu')
    if (!menu.classList.contains('show')) {
        menu.classList.add('show')
    }

    let input = menu.querySelector('input')
    input.value = term

    let evt = new Event('keyup')
    input.dispatchEvent(evt, { triggeredBy: 'findItem ()' })
}