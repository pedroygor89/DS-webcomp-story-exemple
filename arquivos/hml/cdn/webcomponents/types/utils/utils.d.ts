export declare function format(first: string, middle: string, last: string): string;
/**
 * Dispara um evento personalizado na janela
 * @param {string} label Nome do evento
 * @param {any} params Parametros enviados ao Evento
 */
export declare const dispatchEvent: (label: string, params?: any) => void;
/** UTILS */
/**
 * Remove os duplos espaços em branco e quebra de linha
 * @param str
 * @returns
 */
export declare const removeDoubleSpacesAndBreaks: (str: string) => string;
/**
 * Remove acentos e caracteres especiais de uma string
 * @param str
 * @returns
 */
export declare const cleanString: (str: string) => string;
/**
 * Retorna o título do Módulo seguindo as regras da paginação
 */
export declare const moduleTitleDictionary: {
  apresentacao: string;
  atividade: string;
  conclusao: string;
  introducao: string;
};
/**
 * Retorna um numero randomico entre e inclusive os números fornecidos como parâmetro
 * @param min numero inicial minímo
 * @param max numeor máximo de resultado
 * @returns
 */
export declare const generateRandomNumber: (min: number, max: number) => number;
/**
 * Cria um elemento SVG a partir de uma string Image Data Svg Válida
 * @param data Base 64 Data Image String
 * @returns
 */
export declare const generateSvgFromBase64Data: (data: string) => string;
/**
 * Substituir o valor de variáveis dentro de um texto informado
 * @param string Texto com a marcação de variáveis
 * @param obj objeto chave: valor com as variáveis
 * @returns string
 * @example replaceLiteral("Esta {varA} é muito {varB}", { varA: 'frase', varB: 'curta' })
 */
export declare const replaceLiteral: (string: string, obj: {
  [key: string]: string;
}) => string;
