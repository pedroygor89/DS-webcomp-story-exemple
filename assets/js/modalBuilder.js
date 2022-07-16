const modalList = []

function Modal(modalObj, parent, isAlert) {
	isAlert = isAlert || false
	this.elementRef = this.create(modalObj, parent, isAlert)
}

Modal.prototype.create = function (modalObj, parent, isAlert) {
	// Verifica se possui name (atributo obrigatório)
	if (!modalObj.getAttribute('name')) {
		alert('Modal sem atributo name definido!')
		return
	}

	let that = this

	// Criação dos elementos da estrutura da modal
	let modalBg = document.createElement('div')
	modalBg.classList.add('em-modal-background')
	modalBg.setAttribute('name', `modal-${modalObj.getAttribute('name')}`)

	if (modalObj.getAttribute('opened') === null) {
		modalBg.classList.add('closed')
	}

	if (isAlert) {
		modalBg.classList.add('alert')
	} else {
		if (!parent.getAttribute('id')) {
			parent.setAttribute('id', `parent-modal-${modalObj.getAttribute('name')}`)
		}

		this.parentId = parent.getAttribute('id')
	}

	modalBg.addEventListener('click', function (evt) {
		if (evt.target === this) {
			that.close()
		}
	})

	if (modalObj.getAttribute('class')) {
		modalObj.getAttribute('class').split(", ").forEach(classe => {
			modalBg.classList.add(classe)
		});
	}

	let modalBody = document.createElement('div')
	modalBody.classList.add('em-modal-body')

	let modalHead = document.createElement('div')
	modalHead.classList.add('em-modal-head')

	let modalCloseBtn = document.createElement('span')
	modalCloseBtn.classList.add('em-modal-close-btn', 'fas', 'fa-times')
	modalCloseBtn.addEventListener('click', () => this.close())

	let modalContent = document.createElement('div')
	modalContent.classList.add('em-modal-content')
	modalContent.innerHTML = modalObj.innerHTML

	// Montagem da estrutura da modal
	modalBg.append(modalBody)
	modalBody.append(modalCloseBtn)
	modalBody.append(modalContent)
	if (isAlert) {
		modalObj.parentElement.replaceChild(modalBg, modalObj)
	} else {
		modalObj.remove()
	}

	return modalBg
}

Modal.prototype.close = function () {
	if (this.elementRef.classList.contains('alert')) {
		this.elementRef.remove()
	} else {
		this.elementRef.classList.add('closed')
	}

	this.elementRef.remove()
}

Modal.prototype.open = function () {
	this.elementRef.classList.remove('closed')
	this.elementRef.addEventListener('animationend', function () {
		configHiddenElements()
	})

	document.querySelector(`#${this.parentId}`).appendChild(this.elementRef)
}

function abrirModal(nome) {
	modalList[nome].open()
}

function fecharModal(nome) {
	modalList[nome].close()
}

function abrirAlerta(mensagem, el) {
	let modal = document.createElement('em-modal')
	modal.setAttribute('name', `alert-${new Date().getTime()}`)
	modal.setAttribute('opened', true)
	modal.innerHTML = mensagem
	document.body.append(modal)

	new Modal(modal, el.parentElement, true)
}