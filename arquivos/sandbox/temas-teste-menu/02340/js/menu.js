window.addEventListener('DOMContentLoaded', function () {
    
    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Ciência, matéria, energia e sistemas",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },

        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Ciência, matéria, energia e sistemas",
            "href": "#modulo1"
        },

        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Mudanças na matéria e os fluxos de energia",
            "href": "#modulo2"
        },

        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Respostas dos sistemas às modificações",
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