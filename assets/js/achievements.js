// Classe Achievements
function Achievements() {
	this.importCss()
	this.render()
	this.importProgressCss()
	this.importProgress()
}

Achievements.prototype.render = function () {
	let divContainer = document.createElement('div')
	divContainer.classList.add('achievements')
	
	let divContainerAnimation = document.createElement('div')
	divContainerAnimation.classList.add('achievements-bubble', 'hidden')

	let divBackground = document.createElement('div')
	divBackground.classList.add('background')

	let divIconContainer = document.createElement('div')
	divIconContainer.classList.add('icon-container')

	let spanIcon = document.createElement('span')

	let divContent = document.createElement('div')
	divContent.classList.add('content')

	let divHighlight = document.createElement('div')
	divHighlight.classList.add('highlight')

	let divDescription = document.createElement('div')
	divDescription.classList.add('description')

	divContent.appendChild(divHighlight)
	divContent.appendChild(divDescription)

	divContainerAnimation.appendChild(divBackground)
	divIconContainer.appendChild(spanIcon)
	divContainerAnimation.appendChild(divIconContainer)
	divContainerAnimation.appendChild(divContent)

	divContainer.appendChild(divContainerAnimation)
	document.querySelector('body').appendChild(divContainer)

	return
}

Achievements.prototype.importCss = function () {
	let linkAchievementsBarCss = document.createElement('link')
	linkAchievementsBarCss.setAttribute('rel', 'stylesheet')
	linkAchievementsBarCss.setAttribute('href', `${LIBS_PATH}/css/achievements.min.css`)

	document.querySelector('head').appendChild(linkAchievementsBarCss)
}

Achievements.prototype.startAnimation = function (achievement, defaultTitle) {
	let achievementsAnimation = document.querySelector('.achievements-bubble')

	let icon = achievement.icon ? achievement.icon : 'fa-star'
	let collection = achievement.collection ? achievement.collection : 'fas'
	achievementsAnimation.querySelector('.icon-container span').classList.add(collection, icon)

	let title = achievement.title ? achievement.title : defaultTitle
	achievementsAnimation.querySelector('.highlight').innerHTML = title

	let description = achievement.description ? achievement.description : ''
	achievementsAnimation.querySelector('.description').innerHTML = description

	if (description !== '') {
		achievementsAnimation.querySelector('.content').classList.remove('nodescription')
	} else {
		achievementsAnimation.querySelector('.content').classList.add('nodescription')
	}

	achievementsAnimation.classList.remove('hidden')

	achievementsAnimation.querySelector('.content').addEventListener('animationend', function () {
		setTimeout(function () {
			achievementsAnimation.classList.add('hidden')
			achievementsAnimation.querySelector('.icon-container span').classList.remove(collection, icon)
		}, 1500)
	})
}

Achievements.prototype.importProgressCss = function () {
	let linkAchievementsProgressCss = document.createElement('link')
	linkAchievementsProgressCss.setAttribute('rel', 'stylesheet')
	linkAchievementsProgressCss.setAttribute('href', `${LIBS_PATH}/css/progressModule.min.css`)

	document.querySelector('head').appendChild(linkAchievementsProgressCss)
}

Achievements.prototype.importProgress = function () {
	let scriptAchievementsProgress = document.createElement('script')
	scriptAchievementsProgress.setAttribute('type', 'text/javascript')
	scriptAchievementsProgress.setAttribute('src', `${LIBS_PATH}/js/progressModule.min.js`)

	document.querySelector('head').appendChild(scriptAchievementsProgress)
}
