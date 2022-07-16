var atividade = $(".titulo_verificando_aprendizado").closest('.container-fluid');
atividade.each(function (index) {
    var modulo = $(this).closest('module').attr('id');
    modulo = modulo.match(/\d+/)[0];
    if (htmlLanguage == 'en-us') {
        rateMessage = 'Rate this section:'
    } else {
        rateMessage = 'Avalie este módulo:'
    }
    $(this).after(`
    <div class="modFeedback feedback_modulo` + modulo + `">
        <div class="container">
        <div class='row align-items-center justify-content-center'>
            <div class='col-12'>
                <h3>${rateMessage}</h3>
                <div class="star-rating">
                    <label id="mod` + modulo + `_nota5" for="star-5" onclick="avaliarModulo('` + modulo + `-5');">
                        <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <label id="mod` + modulo + `_nota4" for="star-4" onclick="avaliarModulo('` + modulo + `-4');">
                        <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <label id="mod` + modulo + `_nota3" for="star-3" onclick="avaliarModulo('` + modulo + `-3');">
                        <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <label id="mod` + modulo + `_nota2" for="star-2" onclick="avaliarModulo('` + modulo + `-2');">
                        <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                    <label id="mod` + modulo + `_nota1" for="star-1" onclick="avaliarModulo('` + modulo + `-1');">
                        <i class="active fa fa-star" aria-hidden="true"></i>
                    </label>
                </div>
            </div>
        </div>     
    </div>
    `);
});


var numeroDeModulos = $('module[id*="modulo"]').length;
for (m = 1; m <= numeroDeModulos; m++) {
    window['mod' + m + 'nota'] = 0;
}

if (htmlLanguage == 'en-us') {
    ratedMessage = 'Unit rating:'
} else {
    ratedMessage = 'Avaliação do tema:'
}

$('.bg_footer').before(`<div id="avaliacaoTema" class="temaFeedback d-none"><h3 class="text-center py-5">${ratedMessage}</h3><div class="star-rating"></div></div>`);

window['mod1nota'] = '0';
window['mod2nota'] = '0';
window['mod3nota'] = '0';
window['mod4nota'] = '0';

function avaliarModulo(modNota) {

    modNota = modNota.split(/\s*\-\s*/g);
    modulo = modNota[0];
    nota = modNota[1];
    closeFeedback = $('#mod' + modulo + '_nota' + nota).closest('.modFeedback');
    closeFeedback.removeClass('avaliar');
    closeFeedback.addClass('avaliado disabled');
    msgFeedback = closeFeedback.find('h3');

    if (htmlLanguage == 'en-us') {
        msgFeedback.text('Thank you for the feedback!')
    } else {
        msgFeedback.text('Obrigado pelo feedback!')
    }

    $('#avaliacaoTema').attr('nota-mod' + modulo, nota)


    swapStars = closeFeedback.find('.star-rating');

    notaY = '<label><i class="active fas fa-star gold-star" aria-hidden="true"></i></label>';
    notaN = '<label><i class="active fas fa-star clear-star" aria-hidden="true"></i></label>';

    nota1 = notaN.repeat(4) + notaY;
    nota2 = notaN.repeat(3) + notaY.repeat(2);
    nota3 = notaN.repeat(2) + notaY.repeat(3);
    nota4 = notaN + notaY.repeat(4);
    nota5 = notaY.repeat(5);

    if (nota == 1) {
        swapStars.html(nota1);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 2) {
        swapStars.html(nota2);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 3) {
        swapStars.html(nota3);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 4) {
        swapStars.html(nota4);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 5) {
        swapStars.html(nota5);
        window['mod' + modulo + 'nota'] = nota;
    }

    notaFinal = parseInt(window['mod1nota']) + parseInt(window['mod2nota']) + parseInt(window['mod3nota']) + parseInt(window['mod4nota']);
    notaFinal = notaFinal / numeroDeModulos;
    notaFinal = Math.ceil(notaFinal);

    modsAvaliados = $('.avaliado').length;

    if (modsAvaliados == numeroDeModulos) {
        notaTema = $('#avaliacaoTema').find('.star-rating');
        $('#avaliacaoTema').removeClass('d-none');

        $('#avaliacaoTema').removeClass('d-none');
        $('#avaliacaoTema').attr('nota-tema', notaFinal);

        if (notaFinal == 1) {
            notaTema.html(nota1);
        } else if (notaFinal == 2) {
            notaTema.html(nota2);
        } else if (notaFinal == 3) {
            notaTema.html(nota3);
        } else if (notaFinal == 4) {
            notaTema.html(nota4);
        } else if (notaFinal == 5) {
            notaTema.html(nota5);
        }
    }
}


