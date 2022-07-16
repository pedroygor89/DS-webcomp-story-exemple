//Coloque 'true' após o nome dos  scripts que deseja utilizar no tema
let scripts = {
    yduqs_menu: true,
    yduqs_modal: true,
    yduqs_progress: true,
    yduqs_rating: true,
    yduqs_before_after: true,
    yduqs_mathjax_html: true,
    yduqs_mathjax_svg: false,
    customize: []
}

let styles = {
    customize: []
}

// Não altere o trecho abaixo - Sujeito a parar o funcionamento do tema
let configScript = document.createElement('script')
configScript.setAttribute('type', 'text/javascript')
configScript.setAttribute('src', '../assets/js/config.js')
document.querySelector('head').appendChild(configScript)