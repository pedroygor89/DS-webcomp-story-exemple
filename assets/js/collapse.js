let cssCollapse = document.createElement('link')
cssCollapse.setAttribute('rel', 'stylesheet')
cssCollapse.setAttribute('href', `${LIBS_PATH}/css/collapse.min.css`)

document.querySelector('head').appendChild(cssCollapse)

function Collapse(collapseTag) {
	this.render(collapseTag)
}

Collapse.prototype.render = function (colTag) {
	let conTag = colTag.querySelector('content')

	let article = document.createElement('article')
	article.classList.add('theme-collapse')
	if (colTag.getAttribute('tabClickOpen')) {
		article.setAttribute('tabClickOpen', colTag.getAttribute('tabClickOpen'))
	}

	if (colTag.getAttribute('tabClickClose')) {
		article.setAttribute('tabClickClose', colTag.getAttribute('tabClickClose'))
	}

	let header = document.createElement('header')
	header.classList.add('theme-collapse-title')
	header.addEventListener('click', function () {
		let container = this.closest('.theme-collapse')

		container.classList.toggle('opened')

		if (container.classList.contains('opened')) {
			if (container.getAttribute('tabClickOpen')) {
				tabClick = new Function(container.getAttribute('tabClickOpen'))
				tabClick()
			}
		} else if (container.getAttribute('tabClickClose')) {
			tabClick = new Function(container.getAttribute('tabClickClose'))
			tabClick()
		}
	})

	let h1 = document.createElement('h1')
	let acTitle = colTag.querySelector('tab-title')
	if (acTitle) {
		h1.innerHTML = acTitle.innerHTML
	} else {
		h1.innerHTML = tabTag.querySelector('title').innerHTML
	}

	let content = document.createElement('div')
	content.classList.add('theme-collapse-content')
	content.innerHTML = conTag.innerHTML

	article.append(header, content)
	header.append(h1)

	colTag.parentElement.replaceChild(article, colTag)
}