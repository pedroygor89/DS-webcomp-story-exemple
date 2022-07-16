function CodeExercise(module) {
    this.render(module)
}

CodeExercise.prototype.render = function (module) {
    document.querySelectorAll(`code-exercise`).forEach((el, index) => {
        let id = el.getAttribute('id') ? el.getAttribute('id') : `code-exercise-${index}`

        let divContainer = document.createElement('div')
        divContainer.classList.add('code-exercise')

        let divInput = document.createElement('div')
        divInput.classList.add('ce-input')

        let spanInputTitle = document.createElement('span')
        spanInputTitle.classList.add('ce-input')
        spanInputTitle.innerHTML = 'Código-Fonte'

        let textArea = document.createElement('textarea')
        textArea.setAttribute('id', id)
        textArea.setAttribute('spellcheck', 'false')
        textArea.setAttribute('onKeyPress', 'return handleCR(this ,event)')
        if (el.dataset.content) {
            el.dataset.content = el.dataset.content.replace(/(\|\|)/igm, '\n')
            textArea.innerHTML = el.dataset.content
        }

        let input = document.createElement('button')
        input.setAttribute('type', 'button')
        input.innerText='Rodar/Executar';
        input.setAttribute('onClick', `evaluateClear("${id}")`)

        let divOutput = document.createElement('div')
        divOutput.classList.add('ce-output')

        let spanOutputTitle = document.createElement('span')
        spanOutputTitle.classList.add('ce-output')
        spanOutputTitle.innerHTML = 'Saída'

        let divOutputContent = document.createElement('div')
        divOutputContent.setAttribute('id', `${id}-output`)
        divOutputContent.setAttribute('style', 'color:red;font-weight:bold;font-family:courier;font-size:18;width=50%')

        divInput.appendChild(spanInputTitle)
        divInput.appendChild(textArea)
        divInput.appendChild(input)
        divOutput.appendChild(spanOutputTitle)
        divOutput.appendChild(divOutputContent)
        divContainer.appendChild(divInput)
        divContainer.appendChild(divOutput)

        el.parentElement.replaceChild(divContainer, el)
    })
}