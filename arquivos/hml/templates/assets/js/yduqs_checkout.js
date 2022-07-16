if ((document.URL.includes("stensineme") && (document.URL.includes("hmlgrepoh")))) {
    const arrayHttp = [];
    const arrayHttpa = [];
    const arraySafe =[];
    const arrayImageSize = [];
    const arrayImageCover= [];
    const arrayOtherImage = [];
    arrayOtherImage2 = [];
    const imgCard = [];
    const imgModule= [];
    const imgQuote = [];
    const imgCarrosel = [];
    const imgcarouselHorizontal = [];
    var msg, msgCard, msgEl, msgQuote, msgCarrosel, msgcarouselHorizontal, msgSafe,msgSafe1,msgSafe2,msgSafe3,msgSafe4,msgSafe5,msgSafe6,msgSafe7,msgSafe8,msgSafe9,msgSafe10, msgTm = ``;
    var sizeGeneral = 0;
    

    // Desativar o Lazy
    function disableLazy(){
        var imgAll = document.getElementsByTagName("img")
        for(var l = 0; l < imgAll.length ; l++){
            imgAll[l].setAttribute('loading','disabled')
        }
    } 

    // Construção do modal
    function rendeModalAlert(){
        disableLazy()
        var elTarget = document.getElementById('apresentacao')
        var newDiv = document.createElement('yduqs-section');
        elTarget.appendChild(newDiv)
        newDiv.setAttribute('id', 'featured-title');

        var resultRender= document.getElementById('featured-title');
        resultRender.innerHTML = `
        <a id="open-modal-011" class="modal c-link" style="visibility: hidden;">Abrir Modal</a>
            
        <yduqs-modal id="modal-011" class="isopen">
            <div class="row">
                <div id="img_great_job"> </div>

                <div class="col">
                    <span class="c-modal__title" style="font-size: 18px;">
                        Imagens e link's
                    </span>
                </div>
            </div>

            <div class="row">

                <p class="mt-3">- Resumo geral</p>

                <div class='col' style="text-align: center; background-color: aliceblue; text-align: center; padding-bottom: 5px; padding-top: 5px;border-radius: 5px;">
                    <span class="sub" style=" font-size: 10px; font-weight: 800;">Qd de imagens:</span><br> <span id="amtImage"></span>
                </div>

                <div class='col mx-2' style="text-align: center; background-color: aliceblue; text-align: center; padding-bottom: 5px; padding-top: 5px; border-radius: 5px;">
                    <span class="sub" style=" font-size: 10px; font-weight: 800;">Qd de Http:</span><br> <span id="qtdLink"></span>
                </div>

                <div class='col' style="text-align: center; background-color: aliceblue; text-align: center; padding-bottom: 5px; padding-top: 5px;border-radius: 5px;">
                    <span class="sub" style=" font-size: 10px; font-weight: 800; ">Erros de dimensão </span><br><span id="erroDimension"></span>
                </div>

            </div>

            <div class="row mt-2">

                <div class='col' style="text-align: center; background-color: aliceblue; text-align: center; padding-bottom: 5px; padding-top: 5px; border-radius: 5px;">
                    <span class="sub" style=" font-size: 10px; font-weight: 800;">Peso de todas imagens</span><br> <span id="allSize"></span>
                </div>

                <div class='col mx-2' style="text-align: center; background-color: aliceblue; text-align: center; padding-bottom: 5px; padding-top: 5px; border-radius: 5px;">
                    <span class="sub" style="font-size: 10px;font-weight: 800;">Image c/ peso errado</span><br> <span id="countErroSize"></span>
                </div>

                <div class='col' style="text-align: center; background-color: aliceblue; text-align: center;padding-bottom: 5px;padding-top: 5px; border-radius: 5px;">
                    <span class="sub" style="font-size: 10px; font-weight: 800;">Safelink</span><br> <span id="amtSafe"></span>
                </div>

            </div>

            <div class="row mt-3">

                <div class="col">
                    <p>- Link's</p>
                    <div id="oti2" >
                        <div class="card mb-3 p-2" style="max-width: 100%; background-color: #16703c; border-radius: 5px;" >
                            <div class="row g-0">                                       
                                <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                                    <div class="card-body">
                                        <p class="card-text mt-0 mb-0" style="color:white" >
                                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 15px;">task_alt</span> PARABÉNS</strong>
                                            <br> Não existem link's com http
                                        </p>   
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div id="oti3"></div>

                    <div id="otisafe"></div>

                    <br>
                    <p class="mt-3">- Dimensão de imagens</p>
        
                    <ul><li>Capa do tema</li></ul>
                    <div id="otii">
                        <div class="card mb-3 p-2" style="max-width: 100%; background-color: #16703c; border-radius: 5px;" >
                            <div class="row g-0">                                       
                                <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                                    <div class="card-body">
                                        <p class="card-text mt-0 mb-0" style="color:white" >
                                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 15px;">task_alt</span> PARABÉNS</strong>
                                            <br> As capas estão com a largura e altura adquada!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <br>

                    <ul><li>Capa dos módulos</li></ul>
                    <div id="otim">
                        <div class="card mb-3 p-2" style="max-width: 100%; background-color: #16703c; border-radius: 5px;" >
                            <div class="row g-0">                                       
                                <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                                    <div class="card-body">
                                        <p class="card-text mt-0 mb-0" style="color:white" >
                                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 15px;">task_alt</span> PARABÉNS</strong>
                                            <br> As capas estão com a largura e altura adquada!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <br>

                    <ul><li>Demais Imagens</li></ul>

                    <div id="otiquode"></div>

                    <div id="oticarrosel"></div>

                    <div id="oticarroselHorionntal"></div>

                    <div id="oticard"> </div>

                    <div id="oti" >
                       
                    </div>

                    <p class="mt-3">- Peso Imagem</p>
                    <div id="oti4" >
                        <div class="card mb-3 p-2" style="max-width: 100%; background-color: #16703c; border-radius: 5px;" >
                            <div class="row g-0">                                       
                                <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                                    <div class="card-body">
                                        <p class="card-text mt-0 mb-0" style="color:white" >
                                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 15px;">task_alt</span> PARABÉNS</strong>
                                            <br> Todas as imagens estão com o peso adquado!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </yduqs-modal> `
    }

    // Função para calcaular o tamanho das imagens
    function getFileSize(url){
        
        var fileSize = '';
        var https = new XMLHttpRequest();
        https.open('HEAD', url, false); // false = Síncroso

        https.send(null); 

        // quando estamos aqui, já temos uma resposta
        if (https.status === 200) {
            fileSize = https.getResponseHeader('content-length');
            //console.log("aqui")
            //console.log('Tamanho: ' + (fileSize) + ' Kb');  
        }
        return fileSize;

    }

    // Função principal pela execução da aplicação
    function mainFun(){

        //Variavéis count
        var countErro = 0, countErroSize = 0, coverErro = 0, carouselErro = 0, carouselHorizontalErro = 0, countErroCard = 0, moduleErro = 0, quodeErro = 0; cardComparativoErro = 0;
        var amtImageCover = 0, amtImageCarouselHorizontal = 0, amtImageCarousel = 0, amtImageModule = 0, amtImageQuote = 0, amtImageTemplate = 0; amtCardComparativo =0;
        
        
        //Retorno da imagem da capa
        if(document.body.contains(document.querySelector('yduqs-cover'))){

            var urlCover = document.getElementsByTagName('yduqs-cover')[0].background_img;
            var selection = document.getElementById('apresentacao');
            var tagElCover = document.createElement('img');
            selection.appendChild(tagElCover);
            tagElCover.setAttribute('src', urlCover);
            tagElCover.setAttribute('class', 'coverClass');

            var sizeCover = 0;

            //- Largura e altura da capa
            var widthImageCover = tagElCover.naturalWidth;
            var heightImageCover = tagElCover.naturalHeight;
            var urlCover = tagElCover.src;

            //- Retorno do peso da imagem da capa
            sizeCover  = parseFloat(getFileSize(urlCover));
            
            //- Verifica o peso das imagens
            if(parseInt(sizeCover/1000) > 400){
                msgTm = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"><img src="${urlCover}"  style="width:140px" class="img-fluid rounded-start" ></a>
                        </div>
                        <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem de capa possui peso superior  <strong>400 kb</strong>. 
                            <br>- <strong>Peso da imagem</strong>: ${(sizeCover/1000).toFixed(2)} kb
                            <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"> link da imagem</a>
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div>`;
                arrayImageSize.push(msgTm);
                countErroSize += 1; 
                    
            } else {
                console.log()
            }

            if(!Number.isNaN(sizeCover)) {
                sizeGeneral += sizeCover;
            }

            //- validação das dimiensões de capa do tema
            if(widthImageCover > 2228 && heightImageCover > 1127 ){
                msgCover = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"><img src="${urlCover}"  style="width:140px" class="img-fluid rounded-start" ></a>
                        </div>
                        <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do tema possui largura superior a <strong>2228px</strong> e altura superior à <strong>1127px</strong> . 
                            <br>- <strong>Tamanho</strong>: ${widthImageCover} x ${heightImageCover} px 
                            <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"> link da imagem</a>
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div>  `

                arrayImageCover.push(msgCover) 
                coverErro += 1;
                
            } else if (widthImageCover > 2228 ){
                msgCover = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"><img src="${urlCover}"  style="width:140px" class="img-fluid rounded-start" ></a>
                        </div>
                        <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do tema possui largura superior à <strong>2228px</strong>. 
                            <br>- <strong >Tamanho</strong>: ${widthImageCover} x ${heightImageCover} px 
                            <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"> link da imagem</a>
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `

                arrayImageCover.push(msgCover);
                coverErro += 1; 

            } else if(heightImageCover > 1127 ){
                msgCover = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"><img src="${urlCover}"  style="width:140px" class="img-fluid rounded-start" ></a>
                        </div>
                        <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do tema possui altura superior à <strong>1127px</strong>. 
                            <br>- <strong>Tamanho</strong>: ${widthImageCover} x ${heightImageCover} px 
                            <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCover}" target="_blank"> link da imagem</a>
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div>  `

                arrayImageCover.push(msgCover);
                coverErro += 1 ;

            } else {
                console.log()
            }
        }

       

        //Retorno das imagem módulos
        if(document.body.contains(document.querySelector('yduqs-module-cover'))){

            var allModule = document.getElementsByTagName('yduqs-module-cover');

            var moduloNumber = 0, sizeModule = 0; 

            for(var i = 0; i < allModule.length ; i++) {

                var moduleEl = allModule[i].img_cover
                amtImageModule += 1;
                moduloNumber += 1;
                
                var selectionModule = document.getElementById('apresentacao')
                var tagElModule = document.createElement('img');
                selectionModule.appendChild(tagElModule);
                tagElModule.setAttribute('src', moduleEl);
                tagElModule.setAttribute('id', 'mod'+i);
                tagElModule.setAttribute('class', 'modulosClass');

                var widthImageModule = tagElModule.naturalWidth;
                var heightImageModule = tagElModule.naturalHeight;
                var urlModule = tagElModule.src;

                //- Retorno do peso das imagens de todos os módulos
                sizeModule  = parseFloat(getFileSize(urlModule));
                
                if(!Number.isNaN(sizeModule)) {
                    sizeGeneral += sizeModule;
                    console.log("modulo size");
                    console.log(sizeModule);
                }

                //- Verifica o peso das imagens
                if(sizeModule/1000 > 200){
                    msgTm = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"><img src="${urlModule}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem de capa do módulo ${moduloNumber} possui peso superior  <strong>200 kb</strong>. 
                                <br>- <strong>Peso da imagem</strong>: ${(sizeModule/1000).toFixed(2)} kb
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`;
                    arrayImageSize.push(msgTm);
                    countErroSize += 1; 
                        
                } else {
                    console.log()
                }

                //- validação das dimiensões de capa dos módulos
                if(widthImageModule > 974 && heightImageModule > 871 ){
                    msgModule =`
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"><img src="${urlModule}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do módulo ${moduloNumber} tem largura superior a <strong>974px</strong> e altura superior à <strong>871px</strong> . 
                                <br>- <strong>Tamanho</strong>: ${widthImageModule} x ${heightImageModule} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`
                    imgModule.push(msgModule) 
                    moduleErro += 1;
                    
    
                } else if (widthImageModule > 974 ){
                    msgModule =`
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"><img src="${urlModule}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do módulo ${moduloNumber} tem largura superior à <strong>974px</strong>. 
                                <br>- <strong >Tamanho</strong>: ${widthImageModule} x ${heightImageModule} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`
    
                    imgModule.push(msgModule); 
                    moduleErro += 1;
                    
    
                } else if(heightImageModule > 871 ){
                    msgModule = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"><img src="${urlModule}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a capa do módulo ${moduloNumber} tem altura superior à <strong>871px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthImageModule} x ${heightImageModule} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlModule}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgModule.push(msgModule);
                    moduleErro += 1;
    
                } else {
                    console.log()
                }

            }
        }

        //Retorno das imagem do Card Comparativo 
        if(document.body.contains(document.querySelector('.c-card-comparativo__image'))){
            var allCardComparative = document.querySelectorAll('.c-card-comparativo__image')

            var sizeCardComparativo = 0 ; 

            for(var i = 0; i < allCardComparative.length ; i++){
                var cardComparativeEl = allCardComparative[i];
                var widthCardComparative = cardComparativeEl.naturalWidth;
                var heightCardComparative = cardComparativeEl.naturalHeight;
                urlCardComparative = allCardComparative[i].src;
                cardComparativeEl.setAttribute('class', 'cardComparativo');

                //- Retorno do peso das imagens de todos os Card Comparativo
                sizeCardComparativo = parseFloat(getFileSize(urlCardComparative));
                
                if(!Number.isNaN(sizeCardComparativo)) {
                    sizeGeneral += sizeCardComparativo;
                }

                //- Verifica o peso das imagens
                if(sizeCardComparativo/1000 > 200){

                    msgTm = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"><img src="${urlCardComparative}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do card comparativo possui peso superior  <strong>200 kb</strong>. 
                                <br>- <strong>Peso da imagem</strong>: ${(sizeCardComparativo/1000).toFixed(2)} kb
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`;
                    arrayImageSize.push(msgTm);
                    countErroSize += 1; 
                        
                } else {
                    console.log()
                }

                //- validação das diminesões de capa dos módulos
                if(widthCardComparative > 326 ){

                    msgCard = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"><img src="${urlCardComparative}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do card comparativo possui largura superior à <strong>326px</strong>. 
                                <br>- <strong >Tamanho</strong>: ${widthCardComparative} x ${heightCardComparative} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    imgCard.push(msgCard);
                    countErroCard += 1;

                } else if (heightCardComparative > 326){
                
                    msgCard = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"><img src="${urlCardComparative}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do card comparativo possui altura superior à <strong>326px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthCardComparative} x ${heightCardComparative} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    imgCard.push(msgCard); 
                    countErroCard += 1;
                } else if (heightCardComparative > 326 && widthCardComparative > 326 ) {
                
                    msgCard = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"><img src="${urlCardComparative}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do card comparativo possui largura e altura superior à <strong>326px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthCardComparative} x ${heightCardComparative} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCardComparative}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    imgCard.push(msgCard); 
                    countErroCard += 1;

                } else {
                    console.log()
                }
            }
        }

        //Retorno das imagem do Carrosel vertical 
        if(document.body.contains(document.querySelector('.c-carousel-item__img-container--vertical img'))){

            var allCarouselHorizontal = document.querySelectorAll('.c-carousel-item__img-container--vertical img');

            var sizeCarouselHorizontalImage = 0;    

            for(var i = 0; i < allCarouselHorizontal.length ; i++) {
                var carouselHorizontalEl = allCarouselHorizontal[i];
                var widthCarouselHorizontal = carouselHorizontalEl.naturalWidth;
                var heightcarouselHorizontal = carouselHorizontalEl.naturalHeight;
                var urlCarouselHorizontal = allCarouselHorizontal[i].src;
                carouselHorizontalEl.setAttribute('class', 'carouselHorizontal');

                amtImageCarouselHorizontal += 1; 

                //- Retorno do peso das imagens de todos dos Carrosel Vertical
                sizeCarouselHorizontalImage = parseFloat(getFileSize(urlCarouselHorizontal));
            
                if(!Number.isNaN(sizeCarouselHorizontalImage) ){
                    sizeGeneral += sizeCarouselHorizontalImage;
                }  

                //- Verifica o peso das imagens
                if(sizeCarouselHorizontalImage/1000 > 200){

                    msgTm = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarouselHorizontal}" target="_blank"><img src="${urlCarouselHorizontal}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do card horizontal possui peso superior  <strong>200 kb</strong>. 
                                <br>- <strong>Peso da imagem</strong>: ${(sizeCarouselHorizontalImage/1000).toFixed(2)} kb
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarouselHorizontal}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`;
                    arrayImageSize.push(msgTm);
                    countErroSize += 1; 
                        
                } else {
                    console.log();
                }

                //- validação das diminesões do Carrosel vertical
                if(widthCarouselHorizontal > 736 ){

                    msgcarouselHorizontal = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarouselHorizontal}" target="_blank"><img src="${urlCarouselHorizontal}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do carousel vertical tem largura superior a <strong>736px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthCarouselHorizontal} x ${heightcarouselHorizontal} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarouselHorizontal}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgcarouselHorizontal.push(msgcarouselHorizontal);
                    carouselHorizontalErro += 1;
                    
                } else {
                    console.log();
                }

            

            }
        }
        
        //Retorno das imagem do Carousel  Horizontal
        if(document.body.contains(document.querySelector('.c-carousel-item__img-container img'))){
            var allCarrosel = document.querySelectorAll('.c-carousel-item__img-container img')

            var sizeCarouselImage = 0;

            for(var i = 0; i < allCarrosel.length ; i++) {

                var carroselEl = allCarrosel[i];
                var widthCarrosel = carroselEl.naturalWidth;
                var heightCarrosel = carroselEl.naturalHeight;
                var urlCarousel = allCarrosel[i].src;
                carroselEl.setAttribute('class', 'carroselNormal');
                amtImageCarousel += 1; 
                
                //- Retorno do peso das imagem do Carousel
                sizeCarouselImage = parseFloat(getFileSize(urlCarousel));

                if(!Number.isNaN(sizeCarouselImage)) {
                    sizeGeneral += sizeCarouselImage;
                }

                //- Verifica o peso das imagens
                if(sizeCarouselImage/1000 > 200){

                    msgTm = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"><img src="${urlCarousel}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do carousel horizontal possui peso superior  <strong>200 kb</strong>. 
                                <br>- <strong>Peso da imagem</strong>: ${(sizeCarouselImage/1000).toFixed(2)} kb
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`;
                    arrayImageSize.push(msgTm);
                    countErroSize += 1; 
                        
                } else {
                    console.log();
                }

                //- validação das diminesões das imagens do carousel
                if(widthCarrosel > 356 && heightCarrosel > 585){

                    msgCarrosel = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"><img src="${urlCarousel}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do carousel horizontal tem largura superior a <strong>356px</strong> e largura da imagem e superior à <strong>585px</strong> . 
                                <br>- <strong>Tamanho</strong>: ${widthCarrosel} x ${heightCarrosel} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgCarrosel.push(msgCarrosel); 
                    carouselErro += 1;
    
                } else if(widthCarrosel > 356 ){

                    msgCarrosel = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"><img src="${urlCarousel}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do carousel horizontal tem largura <strong>356px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthCarrosel} x ${heightCarrosel} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgCarrosel.push(msgCarrosel); 
                    carouselErro += 1;
                } else if(heightCarrosel > 585 ){

                    msgCarrosel = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"><img src="${urlCarousel}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do carousel horizontal tem altura superior a <strong>585px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthCarrosel} x ${heightCarrosel} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlCarousel}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgCarrosel.push(msgCarrosel);
                    carouselErro += 1;

                } else {
                    console.log();
                }
                
            }

        }

        //Retorno das imagem do Quote
        if(document.body.contains(document.querySelector('.c-quote__image'))){
            var allQuote = document.querySelectorAll('.c-quote__image');

            var sizeQuoteImage = 0; 

            for(var i = 0; i < allQuote.length ; i++) {

                urlImageQuote = allQuote[i].getAttribute('path');
                amtImageQuote += 1;

                var selectionQuote = document.getElementById('apresentacao')
                var tagElQuote = document.createElement('img');
                selectionQuote.appendChild(tagElQuote);
                tagElQuote.setAttribute('src', urlImageQuote);
                tagElQuote.setAttribute('id', 'quode'+i);
                tagElQuote.setAttribute('class', 'tagElQuote');

                var widthImageQuote = tagElQuote.naturalWidth;
                var heightImageQuote = tagElQuote.naturalHeight;
                var urlQuote = tagElQuote.src;

                //- Verifica o peso das imagens
                sizeQuoteImage = parseFloat(getFileSize(urlQuote));

                if(!Number.isNaN(sizeQuoteImage)) {
                    sizeGeneral += sizeQuoteImage;
                }

                //- Verifica o peso das imagens
                if(sizeQuoteImage/1000 > 200){

                    msgTm = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"><img src="${urlQuote}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do quote possui peso superior  <strong>200 kb</strong>. 
                                <br>- <strong>Peso da imagem</strong>: ${(sizeQuoteImage/1000).toFixed(2)} kb
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>`;
                    arrayImageSize.push(msgTm);
                    countErroSize += 1; 
                        
                } else {
                    console.log();
                }

                //- validação das diminesões das imagens do Quote
                if(widthImageQuote > 357 && heightImageQuote > 603 ){

                    msgQuote = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"><img src="${urlQuote}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do Quote tem largura superior a <strong>357px</strong> e altura superior à <strong>603px</strong> . 
                                <br>- <strong>Tamanho</strong>: ${widthImageQuote} x ${heightImageQuote} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    imgQuote.push(msgQuote); 
                    quodeErro += 1;
    
                } else if (widthImageQuote > 357 ){

                    msgQuote = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"><img src="${urlQuote}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do Quote tem largura superior à <strong>357px</strong>. 
                                <br>- <strong >Tamanho</strong>: ${widthImageQuote} x ${heightImageQuote} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
    
                    imgQuote.push(msgQuote);
                    quodeErro += 1;
                    
    
                } else if(heightImageQuote > 603 ){

                    msgQuote = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"><img src="${urlQuote}"  style="width:140px" class="img-fluid rounded-start" ></a>
                            </div>
                            <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem do Quote tem altura superior à <strong>603px</strong>. 
                                <br>- <strong>Tamanho</strong>: ${widthImageQuote} x ${heightImageQuote} px 
                                <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlQuote}" target="_blank"> link da imagem</a>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>  `
                    imgQuote.push(msgQuote);
                    quodeErro += 1; 
    
                } else {
                    console.log();
                }
            }
        }

        //Retorno das demais imagens
        if(document.body.contains(document.querySelector('img'))){
        
            var sizeOtherImage = 0; 

            document.querySelectorAll('img').forEach((imageEl, i) => {  
            if(imageEl.className !== 'modulosClass' && imageEl.className !== 'coverClass' 
            && imageEl.className !== 'cardComparativo' && imageEl.className !== 'carouselHorizontal'
            && imageEl.className !== 'carroselNormal' && imageEl.className !== 'tagElQuote') 
            {
                var widthImage = imageEl.naturalWidth;
                var heightImage = imageEl.naturalHeight;
                urlImage = imageEl.src;

                amtImageTemplate +=  1;
                        
                //- Verifica o peso das imagens
                sizeOtherImage  = parseFloat(getFileSize(imageEl.src));
                        
                if(!Number.isNaN(sizeOtherImage) ){
                    sizeGeneral += sizeOtherImage;
                }
                        
                //- validação das diminesões das imagens do Quote
                if(sizeOtherImage/1000 > 200){

                    msgTm = `
                        <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"><img src="${urlImage}"  style="width:140px" class="img-fluid rounded-start" ></a>
                                    </div>
                                    <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                                    <div class="card-body">
                                        <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                        <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem possui peso superior  <strong>200 kb</strong>. 
                                        <br>- <strong>Peso da imagem</strong>: ${(sizeOtherImage/1000).toFixed(2)} kb
                                        <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"> link da imagem</a>
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>`;
                        arrayImageSize.push(msgTm);
                        countErroSize += 1; 
                                
                } else {
                    console.log();
                }

                //Dimensão das demais imagens
                // if(widthImage > 1916){
                            
                //     msg = `
                //         <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                //             <div class="row g-0">
                //                 <div class="col-md-4">
                //                     <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"><img src="${urlImage}"  style="width:140px" class="img-fluid rounded-start" ></a>
                //                 </div>
                //                 <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                //                     <div class="card-body">
                //                         <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                //                         <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem possui largura superior à <strong>700px</strong>. 
                //                         <br>- <strong >Tamanho</strong>: ${widthImage} x ${heightImage} px <br>
                //                         <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"> link da imagem</a>
                //                         </p>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div> `
                //         arrayOtherImage.push(msg); 
                //         countErro += 1;
                            
                // } 
                // else if (heightImage > 1200){
                        
                //     msg = `
                //     <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                //         <div class="row g-0">
                //             <div class="col-md-4">
                //                 <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"><img src="${urlImage}"  style="width:140px" class="img-fluid rounded-start" ></a>
                //             </div>
                //             <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                //                 <div class="card-body">
                //                     <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                //                     <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem possui altura superior à <strong>1200px</strong>. 
                //                     <br>- <strong>Tamanho</strong>: ${widthImage} x ${heightImage} px 
                //                     <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"> link da imagem</a>
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //     </div> `
                //     arrayOtherImage.push(msg); 
                //     countErro += 1; 
                            
                // } 
                // else if (heightImage > 1200 && widthImage > 1200 ) {
                        
                //     msg =  `
                //     <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                //         <div class="row g-0">
                //             <div class="col-md-4">
                //                 <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"><img src="${urlImage}"  style="width:140px" class="img-fluid rounded-start" ></a>
                //             </div>
                //             <div class="col-md-8" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                //                 <div class="card-body">
                //                     <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                //                     <strong style="font-size: 15px;" ><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>: a imagem possui largura e altura superior à  <strong>1200px</strong>. 
                //                     <br>- <strong>Tamanho</strong>: ${widthImage} x ${heightImage} px 
                //                     <br>- <strong>URL da imagem</strong>: <a style="color: var(--colors-tema-accent-30);" href="${urlImage}" target="_blank"> link da imagem</a>
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //     </div> `
                            
                //     arrayOtherImage.push(msg); 
                //     countErro += 1; 
                            
                // } 
                // else {
                //     console.log();
                // }
                
               
                }
            });
        }


         //Calculo final do tamanho de todas imagens do tema
         var fullSize = (sizeGeneral / 1000) * 0.001;
         var result = fullSize.toFixed(2) + " Mb"
         document.querySelector("#allSize").innerHTML = result;


        //Erros de tamanho e dimensão sendo inicializado com 0
        document.querySelector("#erroDimension").innerHTML = 0;
        document.querySelector("#countErroSize").innerHTML = 0;


        //Retorna o safelink href
        var safeLink = safelink('a');
        var countSafeLink = safeLink.count;
        document.querySelector("#amtSafe").innerHTML = countSafeLink;

        //InnerHtml no corpo do modal do SafeLink errados
        if(countSafeLink > 0 ){
            document.querySelector("#otisafe").innerHTML = arraySafe.join(" ");
            console.log(arraySafe);
        }

        //---Retorna o http nos scripts
        var httpScript = getHttpHtml('script');
        var countHttpScript = httpScript.count;

        //---Retorna o http nos elementos source
        var httpSource = getHttpHtml('source');
        var countHttpSource = httpSource.count;

        //---Retorna o http nos elementos iframe
        var httpFrame = getHttpHtml('iframe');
        var countHttpFrame = httpFrame.count;

        //---Retorna o http nos elementos link
        var httpLink = getHttpa('link')
        var countHttpLink = httpLink.count;

        //---Retorna o http nos elementos a
        var httpa = getHttpa('a')
        var countHttpa = httpa.count;

        //---Contagem dos Http
        var countHttpAll = countHttpFrame + countHttpSource + countHttpScript + countHttpa + countHttpLink;
        document.querySelector("#qtdLink").innerHTML = countHttpAll;

        //InnerHtml no corpo do modal e em resumo dos Http
        if(countHttpAll > 0){
            document.querySelector("#oti2").innerHTML = arrayHttp.join(" ");
            document.querySelector("#oti3").innerHTML = arrayHttpa.join(" ");
        }

        //Calcula total de imagens
        imageTotal = parseInt(amtImageTemplate) + parseInt(amtImageCover) + parseInt(amtImageModule) + parseInt(amtImageCarousel) + parseInt(amtImageCarouselHorizontal) + parseInt(amtImageQuote)
        var amtImage = document.querySelector("#amtImage");
        amtImage.innerHTML = imageTotal;

        //InnerHtml no corpo do modal da imagemde capa do tema com dimensões erradas
        if(coverErro > 0){
            document.querySelector("#otii").innerHTML = arrayImageCover.join(" ");
        }
        
        //InnerHtml no corpo do modal das imagens dos módulos com dimensões erradas
        if(moduleErro > 0) {
            document.querySelector("#otim").innerHTML = imgModule.join(" ");
        }

        //InnerHtml no corpo do modal das imagens dos card's compartivos com dimensões erradas
        if(countErroCard > 0){
            document.querySelector("#oticard").innerHTML = imgCard.join(" ");
        }

        //InnerHtml no corpo do modal das imagens dos quode's com dimensões erradas
        if(quodeErro > 0){
            document.querySelector("#otiquode").innerHTML = imgQuote.join(" ");
        }

        //InnerHtml no corpo do modal das imagens do carrosel com dimensões erradas
        if(carouselErro > 0){
            document.querySelector("#oticarrosel").innerHTML = imgCarrosel.join(" ");
        }

        //InnerHtml no corpo do modal das imagens do carrosel horizontal com dimensões erradas
        if( carouselHorizontalErro > 0){
            document.querySelector("#oticarroselHorionntal").innerHTML = imgcarouselHorizontal.join(" ");
        }


        //InnerHtml no corpo do modal as demais imagens com dimensões erradas
        if(countErro > 0){
            document.querySelector("#oti").innerHTML = arrayOtherImage.join(" ");
        }

        else {
            arrayOtherImage2 = `<div class="card mb-3 p-2" style="max-width: 100%; background-color: #16703c; border-radius: 5px;" >
            <div class="row g-0">                                       
                <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                    <div class="card-body">
                        <p class="card-text text-result-card-modal mt-0 mb-0" style="color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 15px;">task_alt</span> PARABÉNS</strong>
                            <br> As demais imagens estão com a largura e altura adequada!
                        </p>
                    </div>
                </div>
            </div>
        </div> `

            document.querySelector("#oti").innerHTML = arrayOtherImage2;
        }

        //erros total de dimensão 
        var erroTotal = countErro + carouselHorizontalErro + carouselErro + quodeErro + countErroCard + moduleErro + coverErro;
        document.querySelector("#erroDimension").innerHTML = erroTotal;

        //-InnerHtml no corpo do modal das imagens com peso errado e sua contagem
        if(countErroSize > 0){
            document.querySelector("#oti4").innerHTML = arrayImageSize.join(" ");
            document.querySelector("#countErroSize").innerHTML = countErroSize;
        }

        console.log("final");
        console.log(erroTotal);
        console.log(countErroSize);
        console.log(countSafeLink);
        console.log(countHttpAll);

        var allimage = erroTotal + countErroSize + countSafeLink + countHttpAll;
        console.log(allimage);

        if(allimage < 1){
            var urlGretJob = "https://stensineme.blob.core.windows.net/designsystem/recursos/recursos/checkout/imgs/greatJob.png";
            var elImage = document.getElementById('img_great_job');

            var imageGreatJob = document.createElement('img');
            elImage.appendChild(imageGreatJob);
            imageGreatJob.setAttribute('src', urlGretJob);
            imageGreatJob.setAttribute('class', 'great_job');
            imageGreatJob.style.width = "100%";
            elImage.style.backgroundColor = "#f3cc55";
            elImage.style.paddingLeft = "0px";
            elImage.style.paddingRight = "0px";
            elImage.style.borderRadius = "5px";

            var elParagraph = document.createElement('p');
            elImage.appendChild(elParagraph);
            elParagraph.innerHTML = "Parabéns não identificados ajustes!";
            elParagraph.style.textAlign = "center";
            elParagraph.style.color = "#16703c";
            elParagraph.style.font = "18px";
            elParagraph.style.fontWeight = "bold";

           

        }

        
        
    } 

    //Função que dispara o render do modal
    function render() {
        
            var loadModal, loadClose, loadFun, loadOpen, loadClean;

            loadModal = setTimeout(rendeModalAlert, 2000);
            loadFun = setTimeout(mainFun, 4000);
            loadOpen = setTimeout(isOpen, 6000); 
            loadClose = setTimeout(close, 6000);
            loadClean = setTimeout(clear, 6000);
    }
    render()

    //Função que verifica http em iframe
    function getHttpHtml(el)
    {
        
        var iframeDoc = document.getElementsByTagName(`${el}`);
        var countHttp = 0;

        for(var i = 0; i < iframeDoc.length; i++) {
                if(iframeDoc[i].src.substring(0,5) == "http:"){
                    msgEl = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">                                       
                            <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                                <br>O atributo <strong>SRC</strong> com o valor de ${iframeDoc[i].src} não está com <strong>Https</strong>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    arrayHttp.push(msgEl)
                    countHttp += 1;
                    
                }else if(iframeDoc[i].src.substring(0,6) == "https:")
                {
                    msgEl = ``
                }
                
                else {
                    console.log()
                }
        }

        return {count: countHttp}

    }

    //Função que verifica http em http
    function getHttpa(el)
    {
        
        var iframeDoc = document.getElementsByTagName(`${el}`);
        var countHttp = 0;

        for(var i = 0; i < iframeDoc.length; i++) {
                if(iframeDoc[i].href.substring(0,5) == "http:"){

                    msgEl = `
                    <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                        <div class="row g-0">                                       
                            <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                            <div class="card-body">
                                <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                                <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                                <br>O atributo <strong>Href</strong> com o valor de ${iframeDoc[i].href} não está com <strong>Https</strong>
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div> `
                    arrayHttpa.push(msgEl)
                    countHttp += 1;
                    
                }
                
                else if(iframeDoc[i].href.substring(0,6) == "https:")
                {
                    msgEl = ``
                }

                else if(iframeDoc[i].href.substring(0,6) == undefined)
                {
                    msgEl = ``
                }
                
                else {
                    console.log()
                }
        }

        return {count: countHttp}
    }

    //Função de busca para safelink
    function safelink(el){

        var safeLinkEl = document.querySelectorAll(`${el}`);
        var countSafeLink = 0;

        safeLinkEl.forEach((e, i) => {
            if(e.href.substring(0,35) == "https://emea01.safelinks.protection") {
                
                var safelink = e.href;
                var link = new URLSearchParams(safelink).get('https://emea01.safelinks.protection.outlook.com/?url');

                msgSafe = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text text-result-card-modal mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam01.safelinks.protection")  {
                
                var safelink1 = e.href;
                var link1 = new URLSearchParams(safelink1).get('https://nam01.safelinks.protection.outlook.com/?url');

                msgSafe1 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink1} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link1}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe1)
                countSafeLink += 1; 
            } 
            else if (e.href.substring(0,34) == "https://nam02.safelinks.protection")  {
                
                var safelink2 = e.href;
                var link2 = new URLSearchParams(safelink2).get('https://nam02.safelinks.protection.outlook.com/?url');

                msgSafe2 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink2} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link2}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe2)
                countSafeLink += 1; 
            }

            else if (e.href.substring(0,34) == "https://nam03.safelinks.protection")  {
                
                var safelink3 = e.href;
                var link3 = new URLSearchParams(safelink3).get('https://nam03.safelinks.protection.outlook.com/?url');

                msgSafe3 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink3} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link3}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe3)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam04.safelinks.protection")  {
                
                var safelink4 = e.href;
                var link4 = new URLSearchParams(safelink4).get('https://nam04.safelinks.protection.outlook.com/?url');

                msgSafe4 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink4} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link4}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe4)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam05.safelinks.protection")  {
                
                var safelink5 = e.href;
                var link5 = new URLSearchParams(safelink5).get('https://nam05.safelinks.protection.outlook.com/?url');

                msgSafe5 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink5} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link5}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe5)
                countSafeLink += 1; 
            }

            else if (e.href.substring(0,34) == "https://nam06.safelinks.protection")  {
                
                var safelink6 = e.href;
                var link6 = new URLSearchParams(safelink6).get('https://nam06.safelinks.protection.outlook.com/?url');

                msgSafe6 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink6} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link6}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe6)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam07.safelinks.protection")  {
                
                var safelink7 = e.href;
                var link7 = new URLSearchParams(safelink7).get('https://nam07.safelinks.protection.outlook.com/?url');

                msgSafe7 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink7} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link7}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe7)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam08.safelinks.protection")  {
                
                var safelink8 = e.href;
                var link8 = new URLSearchParams(safelink8).get('https://nam08.safelinks.protection.outlook.com/?url');

                msgSafe8 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink8} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link8}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe8)
                countSafeLink += 1; 
            }
            else if (e.href.substring(0,34) == "https://nam09.safelinks.protection")  {
                
                var safelink9 = e.href;
                var link9 = new URLSearchParams(safelink).get('https://nam09.safelinks.protection.outlook.com/?url');

                msgSafe9 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink9} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link9}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe9)
                countSafeLink += 1; 
            }
            else if(e.href.substring(0,34) == "https://nam10.safelinks.protection")  {
                
                var safelink10 = e.href;
                var link10 = new URLSearchParams(safelink10).get('https://nam10.safelinks.protection.outlook.com/?url');

                msgSafe10 = `
                <div class="card mb-3 p-2" style="max-width: 100%; background-color: #f35252; border-radius: 5px;" >
                    <div class="row g-0">                                       
                        <div class="col-md-12" style="margin: 0px; padding: 0px 5px; font-size: 12px;">
                        <div class="card-body">
                            <p class="card-text mt-0 mb-0" style="padding-left: 10px; color:white" >
                            <strong style="font-size: 15px;"><span class="material-icons" style="font-size: 20px; vertical-align: sub;">error_outline</span> ATENÇÃO</strong>
                            <br>O atributo <strong>Href</strong> com o valor de ${safelink10} contém  <strong>SafeLink</strong>.<br><br> O valor correto é ${link10}.
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div> `
                arraySafe.push(msgSafe10)
                countSafeLink += 1; 
            }
        });
        
        return {count: countSafeLink}
    }

    //Função de abertura do modal
    function isOpen() {
        var selection = document.querySelector('#modal-011 .c-modal__wrapper');
        selection.classList.add("isopen");
        document.querySelector("body").style.overflowY = "hidden";
    } 

    //Função de fechamento do modal
    function close(){
        document.querySelector('#modal-011 .c-modal__close').addEventListener("click", function(){
            
            document.querySelector('#modal-011 .c-modal__wrapper').classList.remove("isopen");
            document.querySelector("body").style.overflowY = "visible";
            
        });
    }

    //Função de limpeza
    function clear(){
        document.querySelectorAll('.coverClass').forEach( c => c.remove())
        document.querySelectorAll('.modulosClass').forEach( e => e.remove());
        document.querySelectorAll('.tagElQuote').forEach( q => q.remove());
    }

}



