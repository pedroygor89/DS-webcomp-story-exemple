// Classe ThemeProgressBar 
function ThemeProgressBar(modules) {
	this.steps = []
	this.render(modules)

	this.getWinHeight()

	window.addEventListener("resize", function () {
		theme.themeProgressBar.getWinHeight()
	}, false)
}

ThemeProgressBar.prototype.render = function (modules) {
	let divSteps = []

	modules.forEach((module, i) => {
		let step = {}

		let divFill = document.createElement('div')
		divFill.classList.add('theme-progress-fill')

		let divStep = document.createElement('div')
		divStep.setAttribute('data-referential-index', i)
		divStep.classList.add('theme-progress-step')
		divStep.append(divFill)

		divSteps.push(divStep)

		step.element = divStep
		step.initialPercentage = 0.0
		step.actualPercentage = 0.0
		step.observer = this.createObserver()
		step.observer.observe(module.element)

		this.steps.push(step)
	})

	if (divSteps.length > 0) {
		this.importCss()
		this.buildStructure(divSteps)
	} else {
		console.warn('############')
		console.warn(`####### ATENÇÃO: Não foram definidas estapas de progresso no arquivo index.html`)
		console.warn('############')
	}

	this.actualStep = parseInt(modules[0].element.dataset.referentialIndex)
	this.setBubbleSpanContent(modules[0].step, this.actualStep)

	window.addEventListener("scroll", function () {
		theme.themeProgressBar.scrollActions()
	}, false)

	return
}

ThemeProgressBar.prototype.importCss = function () {
	let linkAchievementsBarCss = document.createElement('link')
	linkAchievementsBarCss.setAttribute('rel', 'stylesheet')
	linkAchievementsBarCss.setAttribute('href', `${LIBS_PATH}/css/themeProgressBar.min.css`)

	document.querySelector('head').appendChild(linkAchievementsBarCss)
}

ThemeProgressBar.prototype.buildStructure = function (steps) {
	let divContainer = document.createElement('div')
	divContainer.classList.add('theme-progress')

	let divBar = document.createElement('div')
	divBar.classList.add('theme-progress-bar')

	// Montagem do bubble	
	let spanStepIcon = document.createElement('span')
	spanStepIcon.classList.add('fas', 'fa-search')

	let divStepBubble = document.createElement('div')
	divStepBubble.classList.add('theme-progress-step-bubble')
	divStepBubble.append(spanStepIcon)

	divBar.appendChild(divStepBubble)

	steps.forEach(step => {
		divBar.appendChild(step)
	})

	divContainer.appendChild(divBar)
	document.querySelector('body').appendChild(divContainer)
}

ThemeProgressBar.prototype.createObserver = function () {
	let options = {
		rootMargin: "0px",
		threshold: this.buildThresholdList(20.0)
	};

	return new IntersectionObserver(this.handleIntersect, options);
}

ThemeProgressBar.prototype.buildThresholdList = function () {
	let thresholds = [];

	for (let i = 0; i <= 1.0; i += 0.01) {
		thresholds.push(i)
	}

	thresholds.push(1.0)
	return thresholds
}

ThemeProgressBar.prototype.handleIntersect = function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			let referentialIndex = parseInt(entry.target.dataset.referentialIndex)

			if (theme.themeProgressBar.actualStep < referentialIndex) {
				theme.themeProgressBar.actualStep = referentialIndex
				theme.themeProgressBar.steps[referentialIndex].initialPercentage = theme.themeProgressBar.amountScrolled()
				theme.themeProgressBar.setPercentageProperty(theme.themeProgressBar.steps[referentialIndex - 1], 100)
				theme.themeProgressBar.bubbleStepActions(referentialIndex)
			}
		}
	});
}

ThemeProgressBar.prototype.scrollActions = function () {
	let percentageScrolled = this.amountScrolled()
	let actualStep = parseInt(theme.themeProgressBar.actualStep)
	let step = this.steps[actualStep]

	if (step.initialPercentage < percentageScrolled) {
		if (step.actualPercentage < percentageScrolled) {
			step.actualPercentage = percentageScrolled
			this.setPercentageProperty(step, this.calculatePercentage(step).toFixed(2))
		}
	}

	if (theme.themeProgressBar.steps.length === (actualStep + 1) && percentageScrolled > 99) {
		theme.themeProgressBar.bubbleStepActions(actualStep + 1)
	}
}

ThemeProgressBar.prototype.calculatePercentage = function (step) {
	let hundred = 100.0
	let total = hundred - step.initialPercentage
	let actual = hundred - step.actualPercentage

	let unscrolledPercentage = percent(actual, total)
	return hundred - unscrolledPercentage
}

ThemeProgressBar.prototype.setPercentageProperty = function (step, percent) {
	step.element.style.setProperty('--theme-progress-completion-percentage', (percent + '%'))
}

ThemeProgressBar.prototype.bubbleStepActions = function (referentialIndex) {
	// Ativa a animação da bolha dos steps (quando houver)
	let el = document.querySelector(`.theme-progress-bar .theme-progress-step-bubble`)

	// Recupera o tamanho da barra de step (seção da barra de progresso) e aplica o movimento da bubble e altera o ícone ou texto
	if (el) {
		if (window.innerWidth > 1024) {
			let stepHeight = el.parentElement.querySelector('.theme-progress-step').getBoundingClientRect().height * referentialIndex
			el.style.setProperty('transform', `translateY(${stepHeight}px)`)
		} else {
			let stepWidth = el.parentElement.querySelector('.theme-progress-step').getBoundingClientRect().width * referentialIndex
			el.style.setProperty('transform', `translateX(${stepWidth}px)`)
		}

		if (referentialIndex < theme.modules.length) {
			theme.themeProgressBar.setBubbleSpanContent(theme.modules[referentialIndex].step, referentialIndex, el)
		} else {
			el.classList.add('concluded')
		}
	}
}

ThemeProgressBar.prototype.getDocHeight = function () {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	)
}

ThemeProgressBar.prototype.amountScrolled = function () {
	let docHeight = this.getDocHeight()
	let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
	let trackLength = docHeight - this.winHeight
	let pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	return pctScrolled
}

ThemeProgressBar.prototype.getWinHeight = function () {
	this.winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
}

ThemeProgressBar.prototype.setBubbleSpanContent = function (step, referentialIndex, el) {
	let spanStepIcon = document.createElement('span')

	if (step.icon) {
		if (step.collection) {
			spanStepIcon.classList.add(step.collection)
		} else {
			spanStepIcon.classList.add('fas')
		}

		spanStepIcon.classList.add(step.icon)
	} else {
		spanStepIcon.innerHTML = referentialIndex + 1
	}

	if (!el) {
		el = document.querySelector(`.theme-progress-bar .theme-progress-step-bubble`)
	}

	el.replaceChild(spanStepIcon, el.querySelector('span'))
}