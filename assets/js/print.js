// Carregamento da PDFMake
const pdfMake = document.createElement('script')
pdfMake.setAttribute('src', '../repositorio_joana_2019_3/js/pdfmake.min.js')
const vfsFont = document.createElement('script')
vfsFont.setAttribute('src', '../repositorio_joana_2019_3/js/vfs_fonts.js')

document.querySelector('head').append(pdfMake)
document.querySelector('head').append(vfsFont)

function saveReflexao(elId) {
	let browserbrowserStorage = window.sessionbrowserStorage.getItem('reflexao') || []

	if (browserStorage.length) {
		browserStorage = JSON.parse(browserStorage)
	}

	let titulo = document.querySelector(`#${elId} p.print`)
	let reflexao = document.querySelector(`#${elId} textarea.print`)

	if (reflexao.value.trim()) {
		if ((i = browserStorage.findIndex(el => el.id === elId)) > -1) {
			browserStorage[i] = {
				id: elId,
				titulo: titulo.innerHTML,
				reflexao: reflexao.value.trim()
			}
		} else {
			browserStorage.push({
				id: elId,
				titulo: titulo.innerHTML,
				reflexao: reflexao.value.trim()
			})
		}
	} else {
		alert('Não foi feita nenhuma anotação')
		return
	}

	browserStorage = JSON.stringify(browserStorage)
	window.sessionbrowserStorage.setItem('reflexao', browserStorage)

	alert('Anotações salvas com sucesso!')
}

function print(hexText, hexBg, img, title) {
	// toDataURL(img, b64img => generatePDF(hexText, hexBg, b64img, title), 'image/png')
	generatePDF(hexText, hexBg, '', title)
}

function generatePDF(hexText, hexBg, b64img, title) {
	let elements = window.sessionbrowserStorage.getItem('reflexao')

	if (!elements) {
		alert('Não há conteúdo a ser impresso')
	} else {
		elements = JSON.parse(elements)
	}

	let print = []
	let image = b64img ? {
		image: b64img
	} : {
		text: ''
	}
	let linha = '_______________________________________________________________________________________'

	for (el of elements) {
		print.push({
			text: el.titulo,
			color: hexText || '#000000',
			fontSize: 10
		})
		print.push({
			text: [{
				text: 'REFLEXÃO: ',
				color: hexText || '#000000'
			}, el.reflexao],
			color: '#000000',
			margin: [0, 20, 0, 0],
			fontSize: 10
		})
		print.push({
			text: linha,
			margin: [0, 0, 0, 10]
		})
	}

	let topo = {
		fillColor: hexBg || '#FFFFFF',
		margin: [-60, -20, -60, 20],
		layout: 'noBorders',
		table: {
			headerRows: 1,
			widths: ['*'],
			body: [
				[
					// { alignment: 'center', margin: 10, width: 100, ...image }
					{
						alignment: 'center',
						margin: 10,
						width: 100,
						text: title
					}
				]
			]
		}
	}

	let content = [{
		...topo
	}, {
		text: 'Suas reflexões',
		linha,
		fontSize: 18,
		margin: [0, 0, 0, 10],
		bold: true
	}, {
		text: linha,
		margin: [0, 0, 0, 20]
	}, print]

	const dd = {
		content,
		pageMargins: [60, 20]
	}
	pdfMake.createPdf(dd).print()
}

// https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
function toDataURL(src, callback, outputFormat) {
	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function () {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		var dataURL;
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		ctx.drawImage(this, 0, 0);
		dataURL = canvas.toDataURL(outputFormat);
		callback(dataURL);
	};

	img.src = src;
	if (img.complete || img.complete === undefined) {
		img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		img.src = src;
	}
}