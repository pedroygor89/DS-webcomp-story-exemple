function ActivityBuilder(module) {
    this.render(module)
}

ActivityBuilder.prototype.render = function (module) {

    let t = 0;
    document.querySelectorAll("activity").forEach((e, i) => {
        t = i;
    }),

        module.querySelectorAll('activity').forEach((el, index) => {

            if (el.getAttribute('id')) {
                activity = completActivity[`${el.getAttribute('id')}`]

                if (typeof activity !== 'undefined') {

                    var atividades = document.querySelectorAll("activity")

                    let x = 0;
                    for (x; x <= atividades.length; x++) {

                    }

                    this.buildCompletActivity(el, x, activity)
                }
            } else {
                console.warn('############')
                console.warn(`####### ATENÇÃO: Uma atividade não foi definida corretamente no arquivo index.html.`)
                console.warn('############')
            }
        })
}

ActivityBuilder.prototype.buildCompletActivity = function (element, index, activity) {

    let divContainerActivity = document.createElement('div')
    divContainerActivity.classList.add('container-complet-activity')

    let divActivity = document.createElement('div')
    divActivity.classList.add('row', 'justify-content-center', 'bg-light', 'rounded', 'p-5')

    let divOptionsContainer = document.createElement('div')
    divOptionsContainer.classList.add('col-12', 'col-md-3', 'complet-activity-options-container')

    let divOptions = document.createElement('div')
    divOptions.classList.add('text-center', 'text-light', 'border', 'rounded', 'p-3', 'complet-activity-options')

    let divContent = document.createElement('div')
    divContent.classList.add('col-12', 'col-md-9', 'rounded', 'p-3', 'text-dark', 'complet-activity-content')

    let formContent = document.createElement('form')
    formContent.innerHTML = activity.content

    let options = []

    formContent.querySelectorAll('option').forEach((op, index) => {
        let select = document.createElement('select')
        select.classList.add('form-control', 'custom-select', 'd-inline-flex', 'select-complet-activity')
        select.dataset.referentialIndex = index
        select.addEventListener('change', () => {
            formContent.querySelectorAll(`option[value='${select.value}']`).forEach(el => {
                el.classList.add('option-selected')
                if (typeof el.children[0] != 'undefined') {
                    select.classList.add('italico')
                } else {
                    select.classList.remove('italico')
                }
            })

            let oldOption = select.dataset.indexOption

            select.dataset.indexOption = select.value

            if (oldOption) {
                if (!formContent.querySelector(`select[data-index-option='${oldOption}']`)) {
                    formContent.querySelectorAll(`option[value='${oldOption}']`).forEach(el => {
                        el.classList.remove('option-selected')
                    })
                }
            }
        })

        let elOption = document.createElement('option')
        elOption.setAttribute('valeu', 'empty')
        elOption.setAttribute('disabled', 'disabled')
        elOption.setAttribute('selected', 'selected')
        elOption.innerHTML = '----------'
        select.appendChild(elOption)
        op.parentElement.replaceChild(select, op)

        options.push({
            text: op.text,
            index: index,
            innerHTML: op.innerHTML
        })
    })

    options.sort(function (a, b) {
        return a.text.localeCompare(b.text)
    })

    options.forEach(option => {
        let pOption = document.createElement('p')
        pOption.classList.add('p-2', 'm-2', 'bg-secondary', 'rounded')
        pOption.innerHTML = option.innerHTML
        divOptions.appendChild(pOption)

        formContent.querySelectorAll('select').forEach(select => {
            let elOption = document.createElement('option');
            elOption.setAttribute('value', option.index);
            elOption.innerHTML = option.innerHTML

            if (typeof elOption.children[0] != 'undefined') {
                elOption.classList.add('italico')
            }

            select.appendChild(elOption)
        })
    })

    let divButtonContainer = document.createElement('div')
    divButtonContainer.classList.add('col-12', 'container-btn-feedback-complet-activity')

    let hr = document.createElement('hr')

    let divButton = document.createElement('div')
    divButton.classList.add('text-center')

    let aAnswer = document.createElement('a')
    aAnswer.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-feedback-complet-activity', 'mx-2')
    aAnswer.setAttribute('href', 'javascript:void(0)')
    aAnswer.setAttribute('role', 'button')
    aAnswer.setAttribute('type', 'button')
    if (htmlLanguage == 'en-us') {
        aAnswer.innerHTML = 'Answer'
    } else {
        aAnswer.innerHTML = 'Responder'
    }
    aAnswer.addEventListener('click', () => {
        let execute = true

        formContent.querySelectorAll('select').forEach(select => {
            if (select.selectedIndex == 0) {
                execute = false
            }
        })

        if (execute) {
            formContent.querySelectorAll('select').forEach((select) => {
                if (select.options[select.selectedIndex].text === options.find(op => {
                    return op.index == select.dataset.referentialIndex
                }).text) {
                    select.classList.add('right-answer')
                } else {
                    select.classList.add('wrong-answer')
                }

                select.disabled = true
            })
            console.log(index)
            toggleCollapse(`feedback-complet-activity-${index}`)

        } else {
            abrirAlerta('<p>Preencha todos os espaços vazios para visualizar a correção.</p>', this)
        }
    })

    let aCleanAll = document.createElement('a')
    aCleanAll.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-clean-complet-activity', 'mx-2')
    aCleanAll.setAttribute('href', 'javascript:void(0)')
    aCleanAll.setAttribute('role', 'button')
    aCleanAll.setAttribute('type', 'button')
    if (htmlLanguage == 'en-us') {
        aCleanAll.innerHTML = 'Reset'
    } else {
        aCleanAll.innerHTML = 'Limpar'
    }
    aCleanAll.addEventListener('click', () => {
        formContent.querySelectorAll('select').forEach((select, index) => {
            select.selectedIndex = 0
            select.classList.remove('right-answer', 'wrong-answer')
            select.disabled = false

            select.querySelectorAll('option').forEach(option => {
                option.classList.remove('option-selected')
            })
        })

        document.querySelector(`#feedback-complet-activity-${index}.theme-simple-collapse`).classList.remove('opened')
    })

    let divRow = document.createElement('div')
    divRow.classList.add('row')

    let divContainerFeedback = document.createElement('div')
    divContainerFeedback.classList.add('col-12')

    let divCollapse = document.createElement('div')
    divCollapse.classList.add('theme-simple-collapse')
    divCollapse.setAttribute('id', `feedback-complet-activity-${index}`)
    activity.feedback = activity.feedback.replace(/(\{\{activityContent\}\})/igm, activity.content)
    activity.feedback = activity.feedback.replace(/(\<option\>)/igm, '<strong>')
    activity.feedback = activity.feedback.replace(/(\<\/option\>)/igm, '</strong>')
    divCollapse.innerHTML = activity.feedback

    divOptionsContainer.appendChild(divOptions)
    divActivity.appendChild(divOptionsContainer)

    divContent.appendChild(formContent)
    divActivity.appendChild(divContent)

    divButtonContainer.appendChild(hr)
    divButton.appendChild(aAnswer)
    divButton.appendChild(aCleanAll)
    divButtonContainer.appendChild(divButton)
    divActivity.appendChild(divButtonContainer)

    divContainerFeedback.appendChild(divCollapse)
    divRow.appendChild(divContainerFeedback)

    divContainerActivity.appendChild(divActivity)
    divContainerActivity.appendChild(divRow)

    element.parentElement.replaceChild(divContainerActivity, element)
}