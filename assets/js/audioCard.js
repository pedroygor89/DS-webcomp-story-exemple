function AudioCard(module) {
    this.render(module)
}

AudioCard.prototype.render = function (module) {
    module.querySelectorAll('audio-card').forEach(card => {
        if (card.querySelector('card-description') !== null && card.querySelector('card-title') !== null && card.getAttribute('src')) {
            let audio = document.createElement('audio')
            audio.setAttribute('src', card.getAttribute('src'))

            let divMain = document.createElement('div')
            divMain.classList.add('my-3', 'audio-card-container')

            let divSecond = document.createElement('div')
            divSecond.classList.add('h-100')

            let divContent = document.createElement('div')
            divContent.classList.add('h-100', 'rounded', 'bg_primary', 'text-light', 'p-4')

            let divTitle = document.createElement('div')
            divTitle.classList.add('audio-card-title')
            divTitle.innerHTML = card.querySelector('card-title').innerHTML

            let divDescription = document.createElement('div')
            divDescription.classList.add('audio-card-description')
            divDescription.innerHTML = card.querySelector('card-description').innerHTML

            let divBtn = document.createElement('div')

            let btn = document.createElement('button')
            btn.classList.add('btn', 'text-light', 'audio-card-button')
            btn.addEventListener('click', () => {
                playAudio(audio, i)
            })

            let i = document.createElement('i')
            i.classList.add('fas', 'fa-play-circle', 'fa-4x')

            divContent.appendChild(divTitle)
            btn.appendChild(i)
            divBtn.appendChild(btn)
            divContent.appendChild(divBtn)
            divContent.appendChild(divDescription)
            divSecond.appendChild(divContent)
            divMain.appendChild(divSecond)

            card.parentElement.replaceChild(divMain, card)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: O recurso Áudio Card - ${card} não foi definido corretamente no arquivo index.html.`)
            console.warn('############')
        }
    });
}

function audioIconChange(iconEl, action) {
    if (action === 'stop') {
        iconEl.classList.add('fa-play-circle')
        iconEl.classList.remove('fa-stop-circle')
    } else if (action === 'play') {
        iconEl.classList.add('fa-stop-circle')
        iconEl.classList.remove('fa-play-circle')
    }
}

function playAudio(audio, icon) {
    if (audio.paused) {
        audio.currentTime = 0
        audio.play()
    } else {
        audio.pause()
    }

    audioIconChange(icon, 'play')

    audio.addEventListener('ended', () => audioIconChange(icon, 'stop'))
    audio.addEventListener('pause', () => audioIconChange(icon, 'stop'))
}