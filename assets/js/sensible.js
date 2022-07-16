function Sensible(module) {
    this.render(module)
}

Sensible.prototype.render = function (module) {
    module.querySelectorAll(`.sensible`).forEach((el, index) => {

        el.addEventListener('click', function() { 
            el.querySelectorAll('img').forEach((e, index) => {
                if(e.classList.contains("hidden-sensible")){
                    e.classList.remove("hidden-sensible")
                } else {
                    e.classList.add("hidden-sensible")
                }
            })
        });
    })
}