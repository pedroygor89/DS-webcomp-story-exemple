// Classe Menu
function Menu(modules) {
	return this.render(modules)
}

// Método render: Realiza a construção do menu
Menu.prototype.render = function (modules) {
	this.importCss()

	// Estrutura de abertura do menu (Mobile)
	let hamburguer = document.createElement('div')
	hamburguer.classList.add('hamburguer')

	let hamburguerIcon = document.createElement('span')
	hamburguerIcon.classList.add('fas', 'fa-bars')
	hamburguerIcon.addEventListener('click', () => {
		changeHamburguerIcon(menuDiv, hamburguerIcon)
	})

	hamburguer.appendChild(hamburguerIcon)

	// Estrutura de navegação do menu
	let menuDiv = document.createElement('div')
	menuDiv.classList.add('container-fluid', 'img_abertura', 'mt-5', 'hide')
	menuDiv.setAttribute('id', 'mobile-navigation')

	let menuNav = document.createElement('nav')
	menuNav.classList.add('navbar', 'navbar-expand')

	let containerDiv = document.createElement('div')
	containerDiv.classList.add('collapse', 'navbar-collapse')
	containerDiv.setAttribute('id', 'conteudoNavbarSuportado')

	let menuList = document.createElement('ul')
	menuList.classList.add('navbar-nav', 'mr-auto')

	document.querySelectorAll('[data-menu-item]').forEach(el => {
		if (el.dataset.menuItem) {
			if (!el.dataset.menuTitle) {
				console.warn('############')
				console.warn(`####### ATENÇÃO: O elemento ${el} não possui título definido para o menu.`)
				console.warn('############')
			} else if (!el.getAttribute('id')) {
				console.warn('############')
				console.warn(`####### ATENÇÃO: O elemento ${el} não possui id definido para o menu.`)
				console.warn('############')
			} else {
				let elements = this.buildMenuItem(el.dataset.menuTitle, el.getAttribute('id'), menuList)
				this.setLinkAction(elements[0], menuDiv)
			}
		}
	})

	modules.forEach(module => {
		module.preItems.forEach(preItem => {
			let elements = this.buildMenuItem(preItem.title, preItem.id, menuList)
			this.setLinkAction(elements[0], menuDiv)
		})

		let elements = this.buildMenuItem(module.title, module.mainAnchor, menuList)

		if (module.locked) {
			elements[1].classList.add('modulo', 'module-locked')

			let spanPadLock = document.createElement('span')
			spanPadLock.classList.add('padlock', `lock-${module.mainAnchor}`)

			let iLock = document.createElement('i')
			iLock.classList.add('fas', 'fa-lock')

			spanPadLock.appendChild(iLock)
			elements[1].insertBefore(spanPadLock, elements[0])
		}

		if (module.topics.length) {
			elements[1].classList.add('dropdown')

			elements[0].classList.add('dropdown-toggle')
			elements[0].setAttribute('id', 'navbarDropdown')
			elements[0].setAttribute('href', 'javascript:void(0)')
			elements[0].addEventListener('click', function () {
				elements[1].classList.toggle('show')
				divSubMenu.classList.toggle('show')
			})

			document.addEventListener('click', function (evt) {
				if (evt.target !== elements[0]) {
					divSubMenu.classList.remove('show')
					elements[1].classList.remove('show')
				}
			})

			let divSubMenu = document.createElement('div')
			divSubMenu.classList.add('dropdown-menu')
			divSubMenu.setAttribute('aria-labelledby', 'navbarDropdown')

			elements[1].appendChild(divSubMenu)

			module.topics.forEach(topic => {
				let aSubItem = document.createElement('a')
				aSubItem.classList.add('dropdown-item')
				aSubItem.setAttribute('href', `#${topic.id}`)
				aSubItem.innerHTML = topic.title

				divSubMenu.append(aSubItem)

				aSubItem.addEventListener('click', function (evt) {
					evt.preventDefault()
					let target = document.querySelector(this.getAttribute('href'))
					let menu = document.querySelector('div.hamburguer')

					if (menu.getBoundingClientRect().height === 0) {
						menu = document.querySelector('#mobile-navigation')
					}

					let targetPosition = target.getBoundingClientRect().top + window.pageYOffset
					targetPosition -= menu.getBoundingClientRect().height

					location.hash = this.getAttribute('href').replace('#', '')
					window.scroll(0, targetPosition)

					changeHamburguerIcon(menuDiv, menu.querySelector('span'))
				})
			})
		} else {
			this.setLinkAction(elements[0], menuDiv)
		}
	})

	menuDiv.appendChild(menuNav)
	menuNav.appendChild(containerDiv)
	containerDiv.appendChild(menuList)

	document.querySelector('header').appendChild(hamburguer)
	document.querySelector('header').appendChild(menuDiv)

	this.element = menuDiv
	this.showMenu()

	return this
}

Menu.prototype.showMenu = function () {
	document.addEventListener('scroll', () => {
		let vh = window.innerHeight
		// Exibição do menu flutuante
		if (window.scrollY >= vh) {
			this.element.classList.remove('hide')
		} else {
			this.element.classList.add('hide')
		}
	})
}

Menu.prototype.importCss = function () {
	let linkCss = document.createElement('link')
	linkCss.setAttribute('rel', 'stylesheet')
	linkCss.setAttribute('href', `${LIBS_PATH}/css/menu.min.css`)

	document.querySelector('head').appendChild(linkCss)
}

Menu.prototype.buildMenuItem = function (title, id, menuList) {
	let listItem = document.createElement('li')
	listItem.classList.add('nav-item')

	let itemLink = document.createElement('a')
	itemLink.classList.add('nav-link')
	itemLink.setAttribute('href', `#${id}`)
	itemLink.innerHTML = title

	listItem.appendChild(itemLink)
	menuList.appendChild(listItem)

	return [itemLink, listItem]
}

Menu.prototype.setLinkAction = function (itemLink, menuDiv) {
	itemLink.addEventListener('click', function () {
		let target = document.querySelector(this.getAttribute('href'))
		let menu = document.querySelector('div.hamburguer')

		if (menu.getBoundingClientRect().height === 0) {
			menu = document.querySelector('#mobile-navigation')
		}

		let targetPosition = target.getBoundingClientRect().top + window.pageYOffset
		targetPosition -= menu.getBoundingClientRect().height

		location.hash = this.getAttribute('href').replace('#', '')
		window.scroll(0, targetPosition)

		changeHamburguerIcon(menuDiv, menu.querySelector('span'))
	})
}

function changeHamburguerIcon(menuDiv, hamburguerIcon) {
	menuDiv.classList.toggle('show')
	if (hamburguerIcon) {
		hamburguerIcon.classList.toggle('fa-times')
		hamburguerIcon.classList.toggle('fa-bars')
	}
}