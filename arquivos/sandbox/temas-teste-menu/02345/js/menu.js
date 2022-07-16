window.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Código de ética da profissão biomédica",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },
        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Direitos e deveres do profissional biomédico ",
            "href": "#modulo1"
        },
        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Da exposição e publicidade às relações profissionais",
            "href": "#modulo2"
        },
        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Infrações e sanções disciplinares",
            "href": "#modulo3"
        },
        
        {
            "id": 5,
            "label": "Conclusão",
            "detail": "5. Considerações finais",
            "href": "#conclusao"
        }
        ]
    };
});