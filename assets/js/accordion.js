let cssAccordion = document.createElement('link')
cssAccordion.setAttribute('rel', 'stylesheet')
cssAccordion.setAttribute('href', `${LIBS_PATH}/css/accordion.min.css`)

document.querySelector('head').appendChild(cssAccordion)

function Accordion(accordionTag) {
	this.render(accordionTag)
}

Accordion.prototype.render = function (acTag) {
	let tabTags = acTag.querySelectorAll('tab')

	let section = document.createElement('section')
	section.classList.add('theme-accordion')
	document.body.append(section)

	if (tabTags.length === 0) {
		console.log('######')
		console.log('### Nenhuma aba adicionada ao accordion', acTag)
		console.log('######')

		return
	}

	tabTags.forEach(tabTag => {		
		// Formação das abas
		let article = document.createElement('article')
		article.classList.add('theme-accordion-tab')

		let header = document.createElement('header')
		header.classList.add('theme-accordion-tab-title')
		header.addEventListener('click', function () {
			let lastOpened = null

			this.closest('section.theme-accordion').querySelectorAll('.theme-accordion-tab-title').forEach(el => {
				if (el.classList.contains('opened')) {
					el.classList.remove('opened')
					lastOpened = el
					
					if (el.getAttribute('tabClickClose')) {
						tabClick = new Function(el.getAttribute('tabClickClose'))
						tabClick()
					}
				}
			})

			let containerTitle = this.closest('article').querySelector('.theme-accordion-tab-title')

			if (containerTitle !== lastOpened) {
				containerTitle.classList.add('opened')

				if (containerTitle.getAttribute('tabClickOpen')) {
					tabClick = new Function(containerTitle.getAttribute('tabClickOpen'))
					tabClick()
				}
				
				let top = containerTitle.parentElement.offset().top - getMenuSize()
				window.scroll(0, top - 50)
			}
		})

		let h1 = document.createElement('h1')
		let acTitle = tabTag.querySelector('tab-title')
		if (acTitle) {
			h1.innerHTML = acTitle.innerHTML
		} else {
			h1.innerHTML = tabTag.querySelector('title').innerHTML
		}

		let content = document.createElement('div')
		content.classList.add('theme-accordion-tab-content')
		content.innerHTML = tabTag.querySelector('content').innerHTML

		if (tabTag.getAttribute('tabClickOpen')) {
			header.setAttribute('tabClickOpen', tabTag.getAttribute('tabClickOpen'))
		}

		if (tabTag.getAttribute('tabClickClose')) {
			header.setAttribute('tabClickClose', tabTag.getAttribute('tabClickClose'))
		}

		section.append(article)
		article.append(header, content)
		header.append(h1)
	})

	acTag.parentElement.replaceChild(section, acTag)
}

/*
	<section class="theme-accordion">
		<article class="theme-accordion-tab">
			<header class="theme-accordion-tab-title">
				<h1></h1>
			</header>

			<div class="theme-accordion-tab-content">
				<p></p>
			</div>
		</article>
	</section>
*/