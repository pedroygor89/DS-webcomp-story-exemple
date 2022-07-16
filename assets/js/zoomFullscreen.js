function zoomFullscreen(module) {
    this.render(module)
}

zoomFullscreen.prototype.render = function (module) {
    document.querySelectorAll('.z-fullscreen').forEach((element,index) => {
        console.info('hahaha')
        this.zoomBuilder(module, element, index)
    })
}

zoomFullscreen.prototype.zoomBuilder = function(module, element, index){
    element.addEventListener('click', evt => {
        var zoomFullscreen = document.getElementById('zoom-modal-'+index);
        console.log('teste');
        if(!zoomFullscreen) {
            element.setAttribute('id', '#data-enlargeable-'+index)

            var src = element.src;
            var modal = document.createElement('div');
            modal.style.background='RGBA(0,0,0,.5) url('+src+') no-repeat center';
            modal.style.backgroundSize= 'contain';
            modal.style.width='100%';
            modal.style.height='100%';
            modal.style.position='fixed';
            modal.style.zIndex='10000';
            modal.style.top='0';
            modal.style.left='0';
            modal.style.cursor='zoom-out';
            modal.setAttribute('id','zoom-modal-'+index);
            modal.addEventListener('click', evt => {
                console.log(modal)
                modal.remove()
            })

            var body = document.querySelector('body');
            body.appendChild(modal);
        }
    })
}
