// Código copiado de https://codepen.io/ritz078/pen/LGRWjE
function HorizontalTimeline2(module) {
    this.render(module)
    this.buildHorizontalTimeline(module)
}

HorizontalTimeline2.prototype.render = function (module) {
    module.querySelectorAll(`.horizontal-timeline2`).forEach((el, index) => {
        el.querySelectorAll(`.input-flex-container input`).forEach((radio, index) => {
            if(radio.checked) {
                el.querySelectorAll(`#timeline-descriptions-wrapper .timeline-content`).forEach((chkd) => {
                    if(chkd.dataset.description == radio.dataset.description) {
                        chkd.classList.add("selected-horizontal-timeline");
                    }
                })
            }
            radio.addEventListener('click', evt => {

                el.querySelectorAll(`#timeline-descriptions-wrapper .selected-horizontal-timeline`).forEach((unchkd) => {
                    unchkd.classList.remove("selected-horizontal-timeline");
                })

                el.querySelectorAll(`#timeline-descriptions-wrapper .timeline-content`).forEach((chkd) => {
                    if(chkd.dataset.description == radio.dataset.description) {
                        chkd.classList.add("selected-horizontal-timeline");
                    }
                })
            })
        })
    })
}

HorizontalTimeline2.prototype.buildHorizontalTimeline = function (module) {

    var th = module.querySelector('.horizontal-timeline2');

    var numDots = th.dataset.numDots;
    module.style.setProperty('--numDots', numDots * 2);

    var dotWidth = th.dataset.dotWidth;
    module.style.setProperty('--dotWidth', dotWidth);

    var active = th.dataset.colorActive;
    module.style.setProperty('--active', active);

    var inactive = th.dataset.colorInactive;
    module.style.setProperty('--inactive', inactive);

    if(numDots == 1){
        module.style.setProperty('--parentWidthBase', 0.1);
        module.style.setProperty('--parentWidth', "calc(0.1*100vw)");
    } else if(numDots == 2){
        module.style.setProperty('--parentWidthBase', 0.2);
        module.style.setProperty('--parentWidth', "calc(0.2*100vw)");
    }else if(numDots == 3){
        module.style.setProperty('--parentWidthBase', 0.5);
        module.style.setProperty('--parentWidth', "calc(0.5*100vw)");
    } else if(numDots >= 4){
        module.style.setProperty('--parentWidthBase', 0.7);
        module.style.setProperty('--parentWidth', "calc(0.7*100vw)");
    }
}