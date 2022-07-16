export function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
/**
 * Dispara um evento personalizado na janela
 * @param {string} label Nome do evento
 * @param {any} params Parametros enviados ao Evento
 */
export const dispatchEvent = (label, params) => {
  window.dispatchEvent(new CustomEvent(label, params ? { detail: params } : null));
};
/** UTILS */
/**
 * Remove os duplos espaços em branco e quebra de linha
 * @param str
 * @returns
 */
export const removeDoubleSpacesAndBreaks = (str) => {
  if (!str)
    return str;
  let result = str;
  result = result.replace(/[\n]/giu, ' ');
  result = result.replace(/[\r]/giu, ' ');
  result = result.replace(/  +/g, ' ');
  return result;
};
/**
 * Remove acentos e caracteres especiais de uma string
 * @param str
 * @returns
 */
export const cleanString = (str) => {
  if (!str)
    return str;
  let result = str.toLowerCase();
  result = result.replace(/[áàãâä]/giu, 'a');
  result = result.replace(/[éèêë]/giu, 'e');
  result = result.replace(/[íìîï]/giu, 'i');
  result = result.replace(/[óòõôö]/giu, 'o');
  result = result.replace(/[úùûü]/giu, 'u');
  result = result.replace(/[ç]/giu, 'c');
  result = result.replace(/[ñ]/giu, 'n');
  return removeDoubleSpacesAndBreaks(result);
};
/**
 * Retorna o título do Módulo seguindo as regras da paginação
 */
export const moduleTitleDictionary = {
  apresentacao: 'Apresentação',
  atividade: 'Atividade',
  conclusao: 'Conclusão',
  introducao: 'Introdução',
};
/**
 * Retorna um numero randomico entre e inclusive os números fornecidos como parâmetro
 * @param min numero inicial minímo
 * @param max numeor máximo de resultado
 * @returns
 */
export const generateRandomNumber = (min, max) => Math.floor((Math.random() * (max - min)) + min);
/**
 * Cria um elemento SVG a partir de uma string Image Data Svg Válida
 * @param data Base 64 Data Image String
 * @returns
 */
export const generateSvgFromBase64Data = (data) => {
  try {
    return window.atob(data.replace('data:image/svg+xml;base64,', ''));
  }
  catch (error) {
    console.error('SVG Convert Error', error);
    return '';
  }
};
/**
 * Substituir o valor de variáveis dentro de um texto informado
 * @param string Texto com a marcação de variáveis
 * @param obj objeto chave: valor com as variáveis
 * @returns string
 * @example replaceLiteral("Esta {varA} é muito {varB}", { varA: 'frase', varB: 'curta' })
 */
export const replaceLiteral = (string, obj) => {
  var s = string;
  for (var prop in obj) {
    s = s.replace(new RegExp('{' + prop + '}', 'g'), obj[prop]);
  }
  return s;
};
