let cssSimpleCollapse = $('<link>')
cssSimpleCollapse.attr('rel', 'stylesheet')
cssSimpleCollapse.attr('href', `${LIBS_PATH}/css/simpleCollapse.min.css`)

$('head').append(cssSimpleCollapse)

function toggleCollapse (id) {
	document.querySelector(`#${id}.theme-simple-collapse`).classList.toggle('opened')
}