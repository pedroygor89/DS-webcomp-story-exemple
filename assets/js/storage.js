var storage, y

startingStorage()

function startingStorage() {
    y = document.querySelector('main').innerHTML
    document.querySelector('main').innerHTML = ""

    let messageAction = function (evt) {
        if (evt.data.origin !== 'player') return false
        if (typeof evt.data.clientId !== 'undefined' && evt.data.clientId !== '' &&
            typeof evt.data.studentNumber !== 'undefined' && evt.data.studentNumber !== '' &&
            typeof evt.data.studentName !== 'undefined' && evt.data.studentName !== '' &&
            typeof evt.data.themeId !== 'undefined' && evt.data.themeId !== '') {
            storage = new Storage(evt.data)

            window.removeEventListener('message', messageAction)
        } else {
            document.querySelector('body').innerHTML = ""
            y = ""
            alert('Você não possui autorização para acessar essa página!')

            window.removeEventListener('message', messageAction)
        }
    }

    window.addEventListener('message', messageAction)

    window.parent.postMessage({
        waiting: 'true'
    }, '*')
}

function Storage(data) {
    this.url = "https://temaapp.azurewebsites.net/api/temas"
    this.getData(data)

    window.addEventListener('unload', evt => {
        axios.post(`${this.url}/${this.accessId}/saida`)
    })
}

Storage.prototype.getData = function (data) {
    this.studentName = data.studentName
    this.studentNumber = data.studentNumber
    this.clientId = data.clientId
    this.themeId = data.themeId

    this.getDeviceBrowserData()
    this.sendStudentData()
}

Storage.prototype.sendStudentData = function () {
    let structure = {
        clientId: this.clientId,
        themeId: this.themeId,
        studentName: this.studentName,
        studentNumber: this.studentNumber,
        studentCpf: "",
        studentPeriod: "",
        screenResolution: `${screen.width}x${screen.height}`,
        browser: this.browser,
        mobile: this.mobile,
        os: this.os
    }

    let storage = this
    axios.post(`${this.url}/aluno`, structure)
        .then(result => {
            storage.studentNumber = result.data.id
            storage.accessId = result.data.accessId
            storage.themeId = result.data.themeId
            storage.videos = result.data.videos
            storage.answers = result.data.answers
            storage.podcasts = result.data.podcasts
            storage.progress = result.data.progress
            storage.printSended = result.data.printSended
            storage.sendingProgress = false

            document.querySelector('main').innerHTML = y

            reducePrincipalCont()
        })
        .catch(el => {
            // document.querySelector('body').innerHTML = ""
            // y = ""
            // alert('Você não possui autorização para acessar essa página!')
            document.querySelector('main').innerHTML = y

            reducePrincipalCont()
            storage = undefined
        })
}

Storage.prototype.sendCommentVideo = function (url, comment, iframe) {
    let structure = {
        themeId: this.themeId,
        studentNumber: this.studentNumber,
        url: url,
        comment: comment,
        videoId: iframe.dataset.videoId ? iframe.dataset.videoId : undefined,
        accessId: this.accessId
    }

    axios.post(`${this.url}/video`, structure)
        .then(result => {
            abrirAlerta('<p>Comentário enviado com sucesso.</p>', document.querySelector('main'))
            iframe.dataset.videoId = result.data.id
        })
        .catch(el => {
            abrirAlerta('<p>Erro ao enviar comentário do vídeo!</p>', document.querySelector('main'))
        })
}

Storage.prototype.sendRateVideo = function (url, rate, iframe) {
    let structure = {
        themeId: this.themeId,
        studentNumber: this.studentNumber,
        url: url,
        rate: rate,
        videoId: iframe.dataset.videoId ? iframe.dataset.videoId : undefined,
        accessId: this.accessId
    }

    axios.post(`${this.url}/video`, structure)
        .then(result => {
            iframe.dataset.videoId = result.data.id
        })
        .catch(el => {
            abrirAlerta('<p>Erro ao enviar clasificação do vídeo!</p>', document.querySelector('main'))
        })
}

Storage.prototype.sendPlayPodcast = function (src, containerDiv) {
    let structure = {
        themeId: this.themeId,
        studentNumber: this.studentNumber,
        podcastSrc: src,
        podcastId: containerDiv.dataset.podcastId ? containerDiv.dataset.podcastId : undefined,
        play: 1,
        accessId: this.accessId
    }

    axios.post(`${this.url}/podcast`, structure)
        .then(result => {
            containerDiv.dataset.podcastId = result.data.id
        })
        .catch(el => {
            containerDiv.dataset.playSended = false
            console.log(`Erro ao enviar ação de play no podcast - ${src}`);
        })
}

Storage.prototype.sendDownloadPodcast = function (src, containerDiv) {
    let structure = {
        themeId: this.themeId,
        studentNumber: this.studentNumber,
        podcastSrc: src,
        podcastId: containerDiv.dataset.podcastId ? containerDiv.dataset.podcastId : undefined,
        download: 1,
        accessId: this.accessId
    }

    axios.post(`${this.url}/podcast`, structure)
        .then(result => {
            containerDiv.dataset.podcastId = result.data.id
        })
        .catch(el => {
            containerDiv.dataset.downloadSended = false
            console.log(`Erro ao enviar ação de download no podcast - ${src}`);
        })
}

Storage.prototype.sendAnswers = function (questionId, selectedAnswers) {
    let structure = {
        themeId: this.themeId,
        studentNumber: this.studentNumber,
        questionId: questionId,
        awnsersId: selectedAnswers,
        accessId: this.accessId
    }

    axios.post(`${this.url}/resposta`, structure)
        .then(result => {
            console.log(`Resposta da questão ${questionId} enviada com sucesso`);
        })
        .catch(el => {
            console.log(`Erro ao enviar resposta selecionada da questão ${questionId}`);
        })
}

Storage.prototype.sendPrint = function () {
    if (this.printSended == undefined || !this.printSended) {
        let structure = {
            accessId: this.accessId
        }

        axios.post(`${this.url}/${this.themeId}/downloadImpressao`, structure)
            .then(result => {
                this.printSended = true
            })
            .catch(el => {
                this.printSended = false
                console.log(`Erro ao enviar ação de download da versão de impressão - ${src}`);
            })
    }
}

Storage.prototype.sendProgress = function (idEl) {
    let structure = {
        accessId: this.accessId,
        themeId: this.themeId,
        progress: idEl,
        studentNumber: this.studentNumber
    }

    axios.post(`${this.url}/progresso`, structure)
        .then(result => {
            this.progress = idEl
            storage.sendingProgress = false
        })
        .catch(el => {
            storage.sendingProgress = false
            console.log(`Erro ao enviar progresso!`);
        })
}

Storage.prototype.getDeviceBrowserData = function () {
    let module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [{
                name: 'Windows Phone',
                value: 'Windows Phone',
                version: 'OS'
            },
            {
                name: 'Windows',
                value: 'Win',
                version: 'NT'
            },
            {
                name: 'iPhone',
                value: 'iPhone',
                version: 'OS'
            },
            {
                name: 'iPad',
                value: 'iPad',
                version: 'OS'
            },
            {
                name: 'Kindle',
                value: 'Silk',
                version: 'Silk'
            },
            {
                name: 'Android',
                value: 'Android',
                version: 'Android'
            },
            {
                name: 'PlayBook',
                value: 'PlayBook',
                version: 'OS'
            },
            {
                name: 'BlackBerry',
                value: 'BlackBerry',
                version: '/'
            },
            {
                name: 'Macintosh',
                value: 'Mac',
                version: 'OS X'
            },
            {
                name: 'Linux',
                value: 'Linux',
                version: 'rv'
            },
            {
                name: 'Palm',
                value: 'Palm',
                version: 'PalmOS'
            }
        ],
        databrowser: [{
                name: 'Chrome',
                value: 'Chrome',
                version: 'Chrome'
            },
            {
                name: 'Firefox',
                value: 'Firefox',
                version: 'Firefox'
            },
            {
                name: 'Safari',
                value: 'Safari',
                version: 'Version'
            },
            {
                name: 'Internet Explorer',
                value: 'MSIE',
                version: 'MSIE'
            },
            {
                name: 'Opera',
                value: 'Opera',
                version: 'Opera'
            },
            {
                name: 'BlackBerry',
                value: 'CLDC',
                version: 'CLDC'
            },
            {
                name: 'Mozilla',
                value: 'Mozilla',
                version: 'Mozilla'
            }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return {
                os: os,
                browser: browser
            };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) {
                        if (matches[1]) {
                            matches = matches[1];
                        }
                    }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return {
                name: 'unknown',
                version: 0
            };
        }
    };

    let e = module.init()

    this.browser = `${e.browser.name}/${e.browser.version}`
    this.os = `${e.os.name}/${e.os.version}`

    this.mobile = false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        this.mobile = true
    }
}

Storage.prototype.configObserverProgress = function (module) {
    if (module.topics.length > 0) {
        module.topics.forEach(topic => {
            this.createObserver(document.querySelector(`#${topic.id}`))
        })
    } else {
        this.createObserver(document.querySelector(`#${module.mainAnchor}`))
    }
}

Storage.prototype.handleIntersect = function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && (storage.progress === null || storage.progress !== entry.target.getAttribute('id')) && !storage.sendingProgress) {
            storage.sendingProgress = true
            storage.sendProgress(entry.target.getAttribute('id'))
        }
    });
}

Storage.prototype.buildThresholdList = function (numSteps) {
    let thresholds = [];

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

Storage.prototype.createObserver = function (el) {
    let options = {
        rootMargin: "0px",
        threshold: this.buildThresholdList(10.0)
    };

    let observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(el)
}