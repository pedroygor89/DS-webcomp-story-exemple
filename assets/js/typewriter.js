function TypeWriter(container) {
    if (printVersion) {
        this.renderPrintVersion(container)
    } else {
        this.containers = []
        this.render(container)

        return this
    }
}

TypeWriter.prototype.render = function (container) {
    this.importCss()

    container.querySelectorAll('.container-typewriter').forEach((element, index) => {
        element.dataset.moduleIndex = container.dataset.referentialIndex
        element.dataset.referentialIndex = index

        let typeWriterContainer = {}
        typeWriterContainer.observer = this.createObserver(element.dataset.percentageShowed)
        typeWriterContainer.observer.observe(element)

        this.containers.push(typeWriterContainer)
    });
}

TypeWriter.prototype.renderPrintVersion = function(container){
    container.querySelectorAll('.container-typewriter').forEach((element) => {
        let elContent = element.querySelector('.content-typewriter')

        let text = elContent.getAttribute('data-content').replace(/(\|\|)/igm, '<br>')
        text = elContent.getAttribute('data-content').replace(/(\|)/igm, '<br>')

        text = text.replace(/(\*)/igm, '')

        text = text.replace(/(\_)/igm, '')

        // text = text.replace(/\*(.*)\*/igm, '<b>'+ text.match(/\*(.*)\*/igm) +'</b>')
        // text = text.replace(/\_(.*)\_/igm, '<i>'+ text.match(/\_(.*)\_/igm) + '</i>')

        // console.log(text.match(/\*(.*)\*/igm))

        let pContent = document.createElement('p')
        pContent.innerHTML = text

        element.replaceChild(pContent, elContent)
    })
}

TypeWriter.prototype.importCss = function () {
    let linkTypeWCss = document.createElement('link')
    linkTypeWCss.setAttribute('rel', 'stylesheet')
    linkTypeWCss.setAttribute('href', `${LIBS_PATH}/css/typewriter.min.css`)

    document.querySelector('head').appendChild(linkTypeWCss)
}

TypeWriter.prototype.createObserver = function (threshold) {
    let options = {
        rootMargin: "0px",
        threshold: threshold ? threshold : 0.25
    };

    return new IntersectionObserver(this.handleIntersect, options);
}

TypeWriter.prototype.handleIntersect = function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.started) {
            entry.target.dataset.started = true
            theme.modules[entry.target.dataset.moduleIndex].typeWriter.typeWriterBuilder(entry.target)
        }
    });
}

TypeWriter.prototype.typeWriterBuilder = function (fatherContainer) {
    let root = document.documentElement

    let container = fatherContainer.querySelector('.content-typewriter')

    let boldActive = false

    let italicActive = false

    if (container.getAttribute('data-font-color')) {
        root.style.setProperty('--letter-color', container.getAttribute('data-font-color'))
    }

    if (container.getAttribute('data-text-allign')) {
        root.style.setProperty('--text-allign', container.getAttribute('data-text-allign'))
    }

    let p = document.createElement('p')
    p.classList.add("typewriter-text", "cursor-typewriter")

    container.appendChild(p);

    // Speed (in milliseconds) of typing.
    let speedForward = 70 //Typing Speed
    let speedBetweenLines = 10 //Wait between first and second lines

    if (container.getAttribute('data-typing-speed')) {
        speedForward = container.getAttribute('data-typing-speed')
    }

    if (container.getAttribute('data-speed-between-lines')) {
        speedBetweenLines = container.getAttribute('data-speed-between-lines')
    }

    // values to keep track of the number of letters typed
    let i = 0;

    //Run the loop
    this.typeWriter(container, p, i, speedBetweenLines, speedForward, boldActive, italicActive);
}

TypeWriter.prototype.typeWriter = function (element, p, i, speedBetweenLines, speedForward, boldActive, italicActive) {
    let aString = element.getAttribute('data-content')
    let classObject = this

    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
        // If character about to be typed is a pipe, switch to second line and continue.
        if (aString.charAt(i) === "|") {
            p.classList.remove("cursor-typewriter");
            if (aString.charAt(i - 1) === "|") {
                p.classList.add("typewriter-blank-line")
            }

            p = document.createElement('p');
            p.classList.add("cursor-typewriter");

            element.appendChild(p);

            i++;

            setTimeout(function () {
                classObject.typeWriter(element, p, i, speedBetweenLines, speedForward, boldActive, italicActive);
            }, speedBetweenLines);

            // If character isn't a pipe, continue typing.
        } else if (aString.charAt(i) === "*") {
            boldActive = !boldActive;
            i++;
            setTimeout(function () {
                classObject.typeWriter(element, p, i, speedBetweenLines, speedForward, boldActive, italicActive);
            }, speedBetweenLines);

            // If character isn't a pipe, continue typing.
        } 
        else if (aString.charAt(i) === "_") {
            italicActive = !italicActive;
            i++;
            setTimeout(function () {
                classObject.typeWriter(element, p, i, speedBetweenLines, speedForward, boldActive, italicActive);
            }, speedBetweenLines);

            // If character isn't a pipe, continue typing.
        } else {
            if (aString.charAt(i) === "|") {
                p.classList.add("typewriter-text")
            }
            else if (boldActive) {
                bold = '<span class="bold">' + aString.charAt(i) + '</span>'
                p.innerHTML = p.innerHTML + bold;               
            }
            else if (italicActive) {
                italic = '<span class="italic">' + aString.charAt(i) + '</span>'
                p.innerHTML = p.innerHTML + italic;
               
            } else {
                p.innerHTML = p.innerHTML + aString.charAt(i);
            }
            
            i++;

            setTimeout(function () {
                classObject.typeWriter(element, p, i, speedBetweenLines, speedForward, boldActive, italicActive);
            }, speedForward);
        }
    } else {
        p.classList.remove("cursor-typewriter");
        element.removeAttribute('data-content')
    }

}

// Based in https://codepen.io/daviddcarr/pen/XVyQMM