function FeedbackBuilder() {
    this.importCss()
}

FeedbackBuilder.prototype.importCss = function () {
    let linkCss = document.createElement('link')
    linkCss.setAttribute('rel', 'stylesheet')
    linkCss.setAttribute('href', `${LIBS_PATH}/css/feedback.min.css`)

    document.querySelector('head').appendChild(linkCss)
}

FeedbackBuilder.prototype.render = function (module) {
    this.starRatingBuilder(module)
    this.addCommentBuilder(module)
    this.feedbackCommentBuilder(module)
}

FeedbackBuilder.prototype.starRatingBuilder = function (module) {
    //Estrutura: estrelas
    module.querySelectorAll('star-rating').forEach((el) => {
        if (el.getAttribute('for') !== null && el.getAttribute('for') !== '' && module.querySelector(`#${el.getAttribute('for')}`)) {
            let iframeId = el.getAttribute('for')
            let iframe = module.querySelector(`#${iframeId}`)

            let recoveredRate = -1

            if (typeof storage !== 'undefined' && typeof storage.videos !== 'undefined') {
                video = storage.videos.find(v => {
                    return v.url === iframe.getAttribute('src')
                })

                if (video !== undefined) {
                    iframe.dataset.videoId = video.id

                    if (video.rate > 0) {
                        recoveredRate = video.rate
                    }
                }
            }

            let div = document.createElement('div')
            div.classList.add('feedback')

            let stars = document.createElement('div')
            stars.classList.add('star-rating-stars')
            stars.setAttribute('data-for', iframeId)

            for (let i = 0; i < 5; i++) {
                // Gera as 5 estrelas
                let star = document.createElement('span')
                star.classList.add('far', 'fa-star', 'star-rating-star')
                star.setAttribute('data-rating-level', i)

                star.addEventListener('click', function () {
                    let level = this.getAttribute('data-rating-level')

                    this.parentElement.childNodes.forEach(function (el) {
                        if (el.getAttribute('data-rating-level') > level) {
                            el.classList.remove('fas')
                            el.classList.add('far')
                        } else {
                            el.classList.remove('far')
                            el.classList.add('fas')
                        }
                    })

                    let rate = parseInt(level) + 1

                    storage.sendRateVideo(iframe.getAttribute('src'), rate, iframe)
                })

                if ((recoveredRate - 1) >= i) {
                    star.classList.remove('far')
                    star.classList.add('fas')
                }

                // Adiciona as estrelas ao seu container
                stars.appendChild(star)
            }

            // Adiciona o container das estrelas à div principal
            div.appendChild(stars)

            // Substitui a tag "star-rating"
            el.parentElement.replaceChild(div, el)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: O elemento de classificação não possui definição de vídeo relacionado no index.html: ${el}.`)
            console.warn('############')
        }
    })
}

FeedbackBuilder.prototype.addCommentBuilder = function (module) {
    //Estrutura: adicionar comentário
    module.querySelectorAll('add-comment').forEach((el, i) => {
        // Cria a DIV que vai substituir a tag add-comment
        let div = document.createElement('div')
        div.classList.add('feedback')

        let feedbackOpen = document.createElement('span')
        feedbackOpen.classList.add('fas', 'fa-chevron-down', 'comment-open')
        feedbackOpen.addEventListener('click', function () {
            module.querySelector('#' + el.getAttribute('comment-area')).classList.toggle('comment-hidden')
            this.classList.toggle('fa-chevron-down')
            this.classList.toggle('fa-chevron-up')
        })

        let feedbackOpenText = document.createElement('span')
        feedbackOpenText.classList.add('comment-dropdown-text')
        feedbackOpenText.appendChild(document.createTextNode(el.getAttribute('dropdown-text') || 'Comente aqui'))
        feedbackOpen.appendChild(feedbackOpenText)
        div.appendChild(feedbackOpen)

        // Substitui a tag "add-comment"
        el.parentElement.replaceChild(div, el)
    })
}

FeedbackBuilder.prototype.feedbackCommentBuilder = function (module) {
    module.querySelectorAll('feedback-comment').forEach((el) => {
        if (el.getAttribute('for') !== null && el.getAttribute('for') !== '' && module.querySelector(`#${el.getAttribute('for')}`)) {
            let iframeId = el.getAttribute('for')
            let iframe = module.querySelector(`#${iframeId}`)

            let recoveredComment = ''

            if (typeof storage !== 'undefined' && typeof storage.videos !== 'undefined') {
                video = storage.videos.find(v => {
                    return v.url === iframe.getAttribute('src')
                })

                if (video !== undefined && video.comment !== 'undefined') {
                    recoveredComment = video.comment
                }
            }


            // Cria a DIV que vai substituir a tag feedback-comment
            let div = document.createElement('div')
            div.classList.add('feedback')

            // Adiciona a caixa de feedback
            let feedbackDiv = document.createElement('div')
            feedbackDiv.classList.add('comment')
            feedbackDiv.setAttribute('id', el.getAttribute('id'))

            let feedbackTxt = document.createElement('textarea')
            feedbackTxt.setAttribute('name', 'feedback')
            feedbackTxt.classList.add('comment-textarea')
            feedbackTxt.innerHTML = recoveredComment

            let sendFeedbackBtn = document.createElement('button')
            sendFeedbackBtn.classList.add('comment-send')
            sendFeedbackBtn.setAttribute('type', 'button')
            sendFeedbackBtn.addEventListener('click', function () {
                let iframe = module.querySelector("#" + el.getAttribute('for'))

                storage.sendCommentVideo(iframe.getAttribute('src'), feedbackTxt.value, iframe)
            })

            sendFeedbackBtn.appendChild(document.createTextNode(el.getAttribute('button-text') || 'Enviar feedback'))
            feedbackDiv.appendChild(document.createElement('br'))
            feedbackDiv.appendChild(feedbackTxt)
            feedbackDiv.appendChild(sendFeedbackBtn)
            div.appendChild(feedbackDiv)

            // Substitui a tag "feedback-comment"
            el.parentElement.replaceChild(div, el)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: A área de comentário não possui definição de vídeo relacionado no index.html: ${el}.`)
            console.warn('############')
        }
    })
}