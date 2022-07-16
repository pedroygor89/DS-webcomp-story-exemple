window.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Anotação gênica",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },
        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Título do Primeiro Módulo ",
            "href": "#modulo1"
        },
        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Título do Segundo Módulo",
            "href": "#modulo2"
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