/* AUTO - Criação do progresso para cada módulo */
var numeroDeModulos = $('section[id*="modulo"]').length;
for (var i = 1; i <= numeroDeModulos; i++) {
    $('section[id*="modulo"]').each(function (index) {
        var iniciaProgresso = $(this).wrapInner('<div class="progressoModulo_' + i++ + '">');
        var encerraProgresso = $('</div>');
        $(this).prepend(iniciaProgresso);
        $(this).append(encerraProgresso);
        var selecionaProgresso = $(this).find('div[class*="progressoModulo_"]');
        var numeroSelecionado = selecionaProgresso.attr("class");
        var numeroSelecionado = numeroSelecionado.match(/\d+/);
        var findAchievement = $('div.achievements-step[data-referential-index="' + numeroSelecionado + '"] .achievements-step-icon, div.achievements-step-alternative[data-referential-index="' + numeroSelecionado + '"] .achievements-step-icon-alternative');
        findAchievement.append("<svg class='progress-ring' width='60' height='60' id='prgMod_" + numeroSelecionado + "'><circle class='progress-ring__circle' r='20' cx='30' cy='30' /></svg>");

        $('.achievements-step[data-referential-index="' + numeroSelecionado + '"],.achievements-step-alternative[data-referential-index="' + numeroSelecionado + '"]').each(function (index) {
            var iniciaAncora = $(this).wrapInner('<a href="#modulo' + numeroSelecionado + '">');
            var encerraAncora = $('</a>');
            $(this).prepend(iniciaAncora);
            $(this).append(encerraAncora);
        });
    });

}

/* Controle do SVG de progresso */
var $numeroModulo = 0;
$('section[id*="modulo"]').each(function () {
    $numeroModulo += 1;
    window["modulo" + $numeroModulo] = $('section#modulo' + $numeroModulo);

    $('div.progressoModulo_' + $numeroModulo).each(function () {
        window["moduloPos" + $numeroModulo] = $(this).prop('offsetTop');
    });

    $('div.progressoModulo_' + $numeroModulo).each(function () {
        window["moduloHeight" + $numeroModulo] = ($(this).prop('scrollHeight') - $(this).prop('offsetTop'));
    });

    $('div.progressoModulo_' + $numeroModulo).each(function () {
        window["moduloFim" + $numeroModulo] = ($(this).prop('scrollHeight') + $(this).prop('offsetTop'));
    });

    $('#prgMod_' + $numeroModulo + ' circle').each(function () {
        circuloSelecionado = $(this);
        circumference = circuloSelecionado.attr('r') * 2 * Math.PI;
        circuloSelecionado.css('stroke-dasharray', `${circumference} ${circumference}`);
        circuloSelecionado.css('stroke-dashoffset', `${circumference}`);
    });

});

var full1 = false;
var full2 = false;
var full3 = false;
var full4 = false;

var url = location.href; //pega endereço que esta no navegador
url = url.split("/"); //quebra o endeço de acordo com a / (barra)
var subDominio;

if (document.URL.includes("127.0.0.1:")) {
    subDominio = url[3];// retorna o subdominio
} else if (document.URL.includes("stecine.azureedge.net")) {
    subDominio = url[4];// retorna o subdominio
} else if (document.URL.includes("hmlg.repo.h") || document.URL.includes("dev.repo.d") || document.URL.includes("repositorio")) {
    subDominio = url[4];// retorna o subdominio
} else {
    subDominio = url[5];// retorna o subdominio
}

var valueStorage = JSON.parse(verificaStorage());

function verificaStorage() {
    var loadStorage = localStorage.getItem('progress')
    return loadStorage;
}

console.log(valueStorage)

if(typeof valueStorage !== 'undefined' && valueStorage !== null ) {
    posicaoScroll = document.documentElement.scrollTop;
    if(valueStorage[0].modulo1 === true){ var full1 = true; $('#prgMod_1 circle').css('stroke-dashoffset', `0`);}    
    if(valueStorage[0].modulo2 === true){ var full2 = true; $('#prgMod_2 circle').css('stroke-dashoffset', `0`);}
    if(valueStorage[0].modulo3 === true){ var full3 = true; $('#prgMod_3 circle').css('stroke-dashoffset', `0`);}
    if(valueStorage[0].modulo4 === true){ var full4 = true; $('#prgMod_4 circle').css('stroke-dashoffset', `0`);}
}

if (valueStorage != null && valueStorage[0].codigoTema == subDominio) {
    if (valueStorage[0].modulo1 != true) {
        window.scroll(0, valueStorage[0].modulo1);
    } else if (valueStorage[0].modulo2 != true) {
        window.scroll(0, valueStorage[0].modulo2);
    } else if (valueStorage[0].modulo3 != true) {
        window.scroll(0, valueStorage[0].modulo3);
    } else if (valueStorage[0].modulo4 != true) {
        window.scroll(0, valueStorage[0].modulo4);
    }
}


window.onscroll = function () {
    posicaoScroll = document.documentElement.scrollTop;

    console.log(full1)

    if (typeof modulo1 !== 'undefined') {
        if (posicaoScroll > moduloPos1 && posicaoScroll < (moduloFim1 + moduloPos1) && full1 == false) {
            motorProgresso(1);
            adicionaStorage(subDominio, posicaoScroll, 0, 0, 0);
        }
    }
    if (typeof modulo2 !== 'undefined') {
        if (posicaoScroll > moduloPos2 && posicaoScroll < (moduloFim2 + moduloPos2) && full2 == false) {
            motorProgresso(2);
            adicionaStorage(subDominio, true, posicaoScroll, 0, 0);
        }
    }
    if (typeof modulo3 !== 'undefined') {
        if (posicaoScroll > moduloPos3 && posicaoScroll < (moduloFim3 + moduloPos3) && full3 == false) {
            motorProgresso(3);
            adicionaStorage(subDominio, true, true, posicaoScroll, 0);
        }
    }
    if (typeof modulo4 !== 'undefined') {
        if (posicaoScroll > moduloPos4 && posicaoScroll < (moduloFim4 + moduloPos4) && full4 == false) {
            motorProgresso(4);
            adicionaStorage(subDominio, true, true, true, posicaoScroll);
        }
    }
    if (typeof modulo4 !== 'undefined') {
        if (full4 == true) {
            adicionaStorage(subDominio, true, true, true, true);
        }
    }
};

function motorProgresso($numeroModulo) {

    modulo = window["modulo" + $numeroModulo]             //Modulo atual 
    moduloPos = window["moduloPos" + $numeroModulo]       //Posição inicio do modulo
    moduloHeight = window["moduloHeight" + $numeroModulo] //Altura do módulo
    moduloFim = window["moduloFim" + $numeroModulo]       // Posição fim do modulo

    circle = $('#prgMod_' + $numeroModulo + ' circle');
    circleRadius = circle.attr('r');
    circumference = circleRadius * 2 * Math.PI;

    circleArray = circle.css('stroke-dasharray', `${circumference} ${circumference}`);
    circleOffset = circle.css('stroke-dashoffset', `${circumference} ${circumference}`);

    clientHeight = document.documentElement.clientHeight;

    posicaoNoModulo = posicaoScroll - moduloPos

    iconeAtual = $('.achievements-step[data-referential-index="' + $numeroModulo + '"] span.fa-circle').length;

    if (circleOffset.css('stroke-dashoffset') >= '0') {
        percentage = 0;

        percentage = (posicaoNoModulo * 100) / (moduloHeight + moduloPos);

        /* console.info(percentage) */

        if (percentage <= 5) {
            percentage = 0
            setProgress(percentage)
        } else if (percentage >= 90 && percentage < 100) {
            if (iconeAtual = 1) {
                iconeAtividade($numeroModulo);
            }
            setProgress(percentage)
        } else if (percentage >= 100) {
            percentage = 100;
            window["full" + $numeroModulo] = true;
            if (iconeAtual = 1) {
                iconeAtividade($numeroModulo);
            }
            setProgress(percentage)

        }
        else {
            setProgress(percentage)
        }
    }

    function setProgress(percentage) {
        if (percentage <= 100 && percentage >= 0) {
            offset = circumference - percentage / 100 * circumference;
            circleOffset = circle.css('stroke-dashoffset', offset);
        }
    }
}

function adicionaStorage(t1, m1, m2, m3, m4) {
    var progress = localStorage['progress'] ? JSON.parse(localStorage['progress']) : [];
    progress.splice(0, 1, {
        codigoTema: t1,
        modulo1: m1,
        modulo2: m2,
        modulo3: m3,
        modulo4: m4,
    });
    localStorage.setItem('progress', JSON.stringify(progress));
}

function iconeAtividade($numeroModulo) {
    $(".achievements-step[data-referential-index='" + $numeroModulo + "'] span.fa-circle, .achievements-step-alternative[data-referential-index='" + $numeroModulo + "'] span.fa-circle").each(function (index) {
        $(this).addClass("fa-book-reader");
        $(this).removeClass("fa-circle");
    });
    $('section#modulo' + $numeroModulo + ' .titulo_verificando_aprendizado').each(function (index) {
        var $idAtividade = $(this).attr('id');

        $('.achievements-step[data-referential-index="' + $numeroModulo + '"] a,.achievements-step-alternative[data-referential-index="' + $numeroModulo + '"] a').each(function (index) {
            $(this).attr('href', '#' + $idAtividade);
            $(this).attr('title', 'Atividade');
        });
        $('.achievements-step.completed[data-referential-index="' + $numeroModulo + '"] a,.achievements-step-alternative.completed[data-referential-index="' + $numeroModulo + '"] a').each(function (index) {
            $(this).attr('href', '#modulo' + $numeroModulo);
            $(this).attr('title', 'Concluído');
        });
    });
    
}

$(".bg_verificando_aprendizado h1").each(function (index) {
    $(this).prepend('<i class="fas fa-book-reader mr-2"></i>');
});
