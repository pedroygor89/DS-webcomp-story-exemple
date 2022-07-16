function ThemeDefaultBar(modules) {
    this.importCss()
    this.render(modules)
}

ThemeDefaultBar.prototype.render = function (modules) {
    let divBarContainer = document.createElement('div')
    divBarContainer.classList.add('achievements-main')

    let stepsBarDiv = document.createElement('div')
    stepsBarDiv.classList.add('achievements-steps')

    modules.forEach((module, i) => {
        let stepBar = document.createElement('div')
        stepBar.classList.add(modules.length <= 4 ? 'achievements-step' : 'achievements-step-alternative')

        stepBar.setAttribute('data-referential-index', module.referentialIndex)

        let stepBarIconDiv = document.createElement('div')
        stepBarIconDiv.classList.add(modules.length <= 4 ? 'achievements-step-icon' : 'achievements-step-icon-alternative')

        let stepBarIcon = document.createElement('span')
        stepBarIcon.classList.add('achievement-icon')

        let stepBarTooltip = document.createElement('div')
        stepBarTooltip.classList.add(modules.length <= 4 ? 'achievements-step-tooltip' : 'achievements-step-tooltip-alternative')

        let highlightText = document.createElement('span')
        let defaultText = document.createTextNode(`${i + 1}º`)

        if (module.step.icon !== undefined) {
            if (module.step.useToolTipIcon) {
                let tooltipIcon = document.createElement('span')
                tooltipIcon.classList.add('achievement-tooltip-icon', module.step.collection || 'fas', module.step.icon)
                defaultText = tooltipIcon
            }

            stepBarIcon.classList.add(module.step.collection || 'fas', module.step.icon)
        } else {
            stepBarIcon.classList.add('fas', 'fa-circle')
        }

        highlightText.appendChild(defaultText)
        stepBarTooltip.appendChild(highlightText)
        stepBarTooltip.appendChild(document.createTextNode(module.step.text || 'Objetivo'))
        stepBarIconDiv.appendChild(stepBarIcon)
        stepBar.appendChild(stepBarIconDiv)
        stepBar.appendChild(stepBarTooltip)
        stepsBarDiv.appendChild(stepBar)

        // Controla a alteração dos ícones
        stepBar.observer = new MutationObserver(function (mutations) {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    let stepBar = mutation.target
                    stepBar.observer.disconnect()

                    let icon = stepBar.querySelector('.achievement-icon')
                    let newIcon = document.createElement('span')

                    if (stepBar.classList.contains('ongoing')) {
                        newIcon.classList.add('achievement-icon', module.step.onGoingCollection || 'fas', module.step.onGoingIcon || 'fa-check')
                        stepBar.classList.add('ongoing')
                    } else if (stepBar.classList.contains('completed')) {
                        newIcon.classList.add('achievement-icon', module.step.conclusionCollection || 'fas', module.step.conclusionIcon || 'fa-award')
                        stepBar.classList.add('completed')
                    } else {
                        newIcon.classList.add('achievement-icon', module.step.collection || 'fas', module.step.icon || 'fa-circle')
                    }

                    icon.parentElement.replaceChild(newIcon, icon)
                    stepBar.observer.observe(stepBar, {
                        attributes: true
                    })
                }
            })
        })

        stepBar.observer.observe(stepBar, {
            attributes: true
        })
    })

    divBarContainer.appendChild(stepsBarDiv)

    document.querySelector('body').append(divBarContainer)
}

ThemeDefaultBar.prototype.activateAnimation = function (i, steps) {    
    let classStep = steps.length <= 4 ? 'achievements-step' : 'achievements-step-alternative'

    let element = document.querySelector(`.${classStep}[data-referential-index='${i}']`)
    element.classList.add('completed')
    element.classList.add('animate')
    element.addEventListener('animationend', function () {
        this.classList.remove('animate')
    })
    let modFeed = document.querySelector(`.feedback_modulo${i}`)
    modFeed.classList.add('avaliar')
}

ThemeDefaultBar.prototype.importCss = function () {
    let linkAchievementsBarCss = document.createElement('link')
    linkAchievementsBarCss.setAttribute('rel', 'stylesheet')
    linkAchievementsBarCss.setAttribute('href', `${LIBS_PATH}/css/themeDefaultBar.min.css`)

    document.querySelector('head').appendChild(linkAchievementsBarCss)
}