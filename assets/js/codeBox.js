document.querySelectorAll('.line-number-scroll').forEach(el => {
    this.numberLineBuilder(el)
})

document.querySelectorAll('.line-number-not-scroll').forEach(el => {
    this.numberLineBuilder(el)    
})

function numberLineBuilder(el) {
    let cont = 0
    el.querySelectorAll('code').forEach(e => {
        cont++
        this.createNumberLine(e,cont)
    })
}

function createNumberLine (e, cont) {
    let span = document.createElement('span')
    span.innerHTML = cont
    span.classList.add('numberLine')
    e.insertAdjacentElement('beforebegin', span)
}   