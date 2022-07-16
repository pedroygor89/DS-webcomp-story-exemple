window.addEventListener('DOMContentLoaded', function () {
    
    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Biossegurança e Sustentabilidade na Produção do Pescado",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },

        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Programas de promoção da saúde em aquicultura",
            "href": "#modulo1"
        },

        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Biosseguridade e manejo sanitário",
            "href": "#modulo2"
        },

        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Sustentabilidade e manejo ambiental",
            "href": "#modulo3"
        },

        {
            "id": 4,
            "label": "Módulo 4",
            "detail": "4. A importância do manejo sustentável",
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