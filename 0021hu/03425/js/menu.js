window.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Terminología y variantes",
        "itemList": [{
            "id": 0,
            "label": "Introducción",
            "href": "#apresentacao"
        },
        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "Español y castellano",
            "href": "#modulo1"
        },
        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "Variantes sociales y estilísticas del español actual",
            "href": "#modulo2"
        },
        {
            "id": 3,
            "label": "Conclusão",
            "detail": "5. Considerações finais",
            "href": "#conclusao"
        }
        ]
    };
});