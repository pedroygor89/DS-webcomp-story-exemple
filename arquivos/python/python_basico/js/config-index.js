//Coloque 'true' após o nome dos  scripts que deseja utilizar no tema
let scripts = {
    yduqs_menu: false, // Ativa o menu
    yduqs_modal: true, // Ativa o sistema de modais
    yduqs_progress: false, // Ativa as barras de progresso
    yduqs_rating: false, // Ativa as avaliações de módulo
    yduqs_before_after: false, // Ativa o recurso "Antes e Depois"
    yduqs_playlist_video: false, // Ativa o recurso de playlist de vídeo
    yduqs_module_video: false, // Ativa o recuso módulo de vídeo
    yduqs_mathjax: false, // Ativa a biblioteca MathJax 
    yduqs_checkout: false, //Ativa o modal de verificação de imagens
    customize: []
}

let styles = {
    customize: []
}

// Não altere o trecho abaixo - Sujeito a parar o funcionamento do tema
let configScript = document.createElement('script')
configScript.setAttribute('type', 'text/javascript')
configScript.setAttribute('src', 'https://stensineme.blob.core.windows.net/assets/js/config.js')
document.querySelector('head').appendChild(configScript)