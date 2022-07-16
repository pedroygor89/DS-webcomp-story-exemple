function Compiler (module) {
    if (printVersion) {
        // this.renderPrintVersion(module)
    } else {
        this.render(module)
    }
}

Compiler.prototype.render = function (module) {
    module.querySelectorAll('.compiler').forEach((element,index) => {
        var indice = index+"-"+ module.dataset.referentialIndex;

        element.setAttribute('id', '#compiler-'+indice)
        this.compilerBuilder(element, indice)
    });
}

Compiler.prototype.compilerBuilder = function(element, index){
    var span1 = document.createElement('span');
    span1.classList.add('circle-compiler', 'circle-compiler-red');

    var span2 = document.createElement('span');
    span2.classList.add('circle-compiler', 'circle-compiler-yellow');

    var span3 = document.createElement('span');
    span3.classList.add('circle-compiler', 'circle-compiler-green');

    var divMt2 = document.createElement('div');
    divMt2.classList.add('mt-2');

    var bt2 = document.createElement('a');
    bt2.classList.add('btn-input-values');
    bt2.classList.add('active-compiler');
    bt2.innerText='Input';
    bt2.addEventListener('click', evt => {
        var inp = document.querySelector('#input-txt-keyboard-'+index);
        if(inp.classList.contains("compiler-hidden"));{
            inp.classList.remove('compiler-hidden');
            bt2.classList.add('active-compiler');
            var btAux2 = element.querySelector('.btn-compiled');
            btAux2.classList.remove('active-compiler');
            var aux2 = document.querySelector('#console-compiler-'+index);
            aux2.classList.add('compiler-hidden');
        }       
    })

    divMt2.appendChild(span1);
    divMt2.appendChild(span2);
    divMt2.appendChild(span3);
    
    var divNav = document.createElement('div');
    divNav.classList.add('col-12', 'nav-code-top', 'align-self-start');
    divNav.appendChild(divMt2);

    var textDiv = document.createElement('div');
    textDiv.classList.add('input-txt-compiler');
    textDiv.setAttribute('id','input-txt-compiler-'+index);
    textDiv.setAttribute('autocomplete','off');
    textDiv.setAttribute('autocorrect','off');
    textDiv.setAttribute('autocapitalize','off');
    textDiv.setAttribute('spellcheck','false');
    textDiv.innerHTML=element.dataset.code;

    var divAlign = document.createElement('div');
    divAlign.classList.add('container-input-compiler');

    divAlign.appendChild(textDiv);

    var textDivInput = document.createElement('div');
    textDivInput.classList.add('input-txt-keyboard');
    textDivInput.classList.add('compiler-hidden');
    textDivInput.setAttribute('id','input-txt-keyboard-'+index);
    textDivInput.setAttribute('autocomplete','off');
    textDivInput.setAttribute('autocorrect','off');
    textDivInput.setAttribute('autocapitalize','off');
    textDivInput.setAttribute('spellcheck','false');
    textDivInput.setAttribute('contenteditable','true');
    textDivInput.innerText=element.dataset.inputKeyboard;

    var divTopInput = document.createElement('div')
    divTopInput.innerText='Input'
    divTopInput.classList.add('div-top-input')

    var divConsole = document.createElement('div');
    divConsole.setAttribute('id','console-compiler-'+index);
    divConsole.classList.add('console-compiler');

    var divTopConsole = document.createElement('div')
    divTopConsole.innerText='Console'
    divTopConsole.classList.add('div-top-console')
    
    var divRun = document.createElement('div');
    divRun.classList.add('div-run');

    var buttonRun = document.createElement('button');
    buttonRun.setAttribute('type', 'submit');
    buttonRun.classList.add('btn', 'btn-info');
    buttonRun.innerHTML='EXECUTAR';
    buttonRun.addEventListener('click', evt => {
        var code0 = document.querySelector('#input-txt-compiler-'+index);
        var code1 = code0.querySelector(".ace_scroller .ace_content .ace_text-layer");
        var code = encodeURIComponent(code1.innerText);

        var codeInput0 = document.querySelector('#input-txt-keyboard-'+index);
        var inputKeyboard = encodeURIComponent(codeInput0.innerText);

        var lang = element.dataset.lang;
        if(lang === "python" || lang === "python2" || lang === "python3"){
            lang = "python3";
        }
        this.runCompiler(code, lang, index, inputKeyboard);
	})

    element.appendChild(divNav);

    var boxComponents = document.createElement('div');
    boxComponents.classList.add('box-compiler');
    boxComponents.appendChild(divAlign);
    boxComponents.appendChild(divTopInput);
    boxComponents.appendChild(textDivInput);
    boxComponents.appendChild(divTopConsole);
    boxComponents.appendChild(divConsole);

    element.appendChild(boxComponents);

    divRun.appendChild(buttonRun);
    element.appendChild(divRun);

    this.setupEditor(index, element.dataset.lang);
}

Compiler.prototype.runCompiler = function (code, lang, index, inputKeyboard) {
    var consolePrint = document.getElementById("console-compiler-"+index);
    consolePrint.innerHTML="";
    var divLoad = document.createElement('div');
    divLoad.classList.add('lds-dual-ring');
    var textCode = code;
    var textKeyboard = inputKeyboard
    var language = lang;
    var protocol = "POST";
    var url = "https://paiza-io.p.rapidapi.com/runners/create?source_code="+textCode+"&input="+textKeyboard+"&language="+language+"&longpoll=true&api_key=guest"

    function GET(protocol, url){
        var Httpreq = new XMLHttpRequest();
        Httpreq.withCredentials = false;

        Httpreq.open(protocol, url, false);

        Httpreq.setRequestHeader("x-rapidapi-key", "5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce");
        Httpreq.setRequestHeader("x-rapidapi-host", "paiza-io.p.rapidapi.com");

        Httpreq.send(null);
        return Httpreq.responseText;
    }

    var component = JSON.parse(GET(protocol, url));
    var idComponent = component.id;
    // var statusComponent = component.status;

    var protocolStatus = "GET";
    var urlStatus = "https://paiza-io.p.rapidapi.com/runners/get_status?id="+idComponent+"&api_key=guest";
    var componentGetStatus = JSON.parse(GET(protocolStatus, urlStatus));

    if(componentGetStatus.status == "completed"){
        var protocolCompile = "GET";
        var urlCompile = "https://paiza-io.p.rapidapi.com/runners/get_details?id="+componentGetStatus.id+"&api_key=guest";
        var componentGetCompile = JSON.parse(GET(protocolCompile, urlCompile));
        consolePrint.innerHTML = componentGetCompile.stdout;

        if(componentGetCompile.result == "success"){
            consolePrint.classList.remove('error-compiler');
            consolePrint.innerText = componentGetCompile.stdout;
        } else {
            consolePrint.classList.add('error-compiler');
            consolePrint.innerText = componentGetCompile.stderr;
        }
    }
}


Compiler.prototype.setupEditor = function(index, lang){
    window.editor = ace.edit('input-txt-compiler-'+index);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/"+lang)
}
