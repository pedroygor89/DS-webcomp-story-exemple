window.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Características diagnósticas macro e microscópicas gerais das plantas",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },
        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Raiz ",
            "href": "#modulo1"
        },
        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Caule",
            "href": "#modulo2"
        },
        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Folha",
            "href": "#modulo3"
        },
        {
            "id": 4,
            "label": "Módulo 4",
            "detail": "4. Órgãos reprodutivos",
            "href": "#modulo4"
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