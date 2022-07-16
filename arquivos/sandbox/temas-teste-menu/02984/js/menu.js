window.addEventListener('DOMContentLoaded', function () {
    
    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Germinação de sementes",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },

        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Semente: órgão de proteção ao gametófito jovem",
            "href": "#modulo1"
        },

        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Germinação de sementes",
            "href": "#modulo2"
        },

        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Embriogênese das Espermatófitas",
            "href": "#modulo3"
        },
        {
            "id": 4,
            "label": "Conclusão",
            "detail": "4. Considerações finais",
            "href": "#conclusao"
        }
        ]
    };
});