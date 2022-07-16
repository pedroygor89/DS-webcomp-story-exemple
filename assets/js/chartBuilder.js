function ChartBuilder(module) {
    this.render(module)
}

ChartBuilder.prototype.render = function (module) {
    let thisClass = this

    module.querySelectorAll('chart').forEach(elChart => {
        if (elChart.getAttribute('id')) {
            let divContainer = document.createElement('div')
            divContainer.classList.add('chart-container')

            thisClass.buildChart(elChart, divContainer)

            elChart.parentElement.replaceChild(divContainer, elChart)
        } else {
            console.warn('############')
            console.warn(`####### ATENÇÃO: Um gráfico não foi definido corretamente no arquivo index.html.`)
            console.warn('############')
        }
    })
}

ChartBuilder.prototype.buildChart = function (elChart, divContainer) {
    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', elChart.getAttribute('id'))
    divContainer.appendChild(canvas)

    let chart = charts[`${elChart.getAttribute('id')}`]

    let config = {
        type: chart.type,
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        let dataset = data.datasets[tooltipItem.datasetIndex];

                        let buildLegend

                        if (chart.tooltipLabel) {
                            buildLegend = chart.tooltipLabel
                        } else {
                            buildLegend = chart.values[tooltipItem.index].legend
                        }

                        if (chart.percentageTooltip) {
                            buildLegend = `${buildLegend}:${dataset.data[tooltipItem.index]}%`
                        } else {
                            buildLegend = `${buildLegend}:${dataset.data[tooltipItem.index]}`
                        }

                        return buildLegend
                    },
                    title: function (dataset) {                        
                        if (typeof chart.tooltipTitle !== 'undefined') {
                            if (chart.tooltipTitle === false) {
                                return false
                            } else {
                                return chart.tooltipTitle
                            }
                        } else {
                            return dataset[0].label
                        }
                    }
                }
            }
        }
    }

    chart.values.forEach(value => {
        config.data.labels.push(value.legend)
        config.data.datasets[0].data.push(value.data)
        config.data.datasets[0].backgroundColor.push(value.color)
    })

    if (chart.title) {
        config.options.title = {
            display: true,
            text: chart.title
        }
    }

    if (chart.showLegend === false) {
        config.options.legend = {
            display: false
        }
    } else {
        if (chart.customLegend === true) {
            config.options.legend = {
                display: false
            }

            this.legendsBuilder(chart.values, divContainer)
        }
    }

    new Chart(canvas, config);
}

ChartBuilder.prototype.legendsBuilder = function (values, divContainer) {
    let ul = document.createElement('ul')
    ul.classList.add('legends-chart')

    values.forEach((value) => {
        let li = document.createElement('li')
        li.classList.add('container-legend-chart')

        let divColor = document.createElement('div')
        divColor.classList.add('color-legend-chart')
        divColor.style.backgroundColor = value.color

        let spanText = document.createElement('span')
        spanText.classList.add('text-legend-chart')
        spanText.appendChild(document.createTextNode(value.legend))

        if (value.action) {
            li.classList.add('with-action')
            li.addEventListener('click', value.action)
        }

        li.appendChild(divColor)
        li.appendChild(spanText)
        ul.appendChild(li)
    })

    divContainer.appendChild(ul)
}