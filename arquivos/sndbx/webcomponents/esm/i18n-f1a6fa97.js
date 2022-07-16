const getLanguage = () => {
  var _a;
  const lang = (_a = document.getElementsByTagName('html')[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('lang');
  return lang || 'pt-br';
};
const dictionary = {
  'en-us': {
    pager: {
      atividade: 'Activity',
      conceito: 'Concept',
      conclusao: 'Conclusion',
      introducao: 'Introduction',
      modulo: 'Section',
      teexplico: 'Here, let me explain it to you!',
    },
  },
  'es': {
    pager: {
      atividade: 'Actividad',
      conceito: 'Concepto ',
      conclusao: 'Conclusión',
      introducao: 'Introducción',
      modulo: 'Módulo',
      teexplico: '¡Ven y te explico!',
    },
  },
  'pt-br': {
    pager: {
      atividade: 'Atividade',
      conceito: 'Conceito',
      conclusao: 'Conclusão',
      introducao: 'Introdução',
      modulo: 'Módulo',
      teexplico: 'Vem que eu te explico!',
    },
  },
};
/**
 * Retorna um texto mapeado atraves da chave de idioma atual
 * @param keyMap String com o endereço do texto procurado
 * @returns string
 *
 * @example i18n('pager.introducao')
 */
const i18n = (keyMap) => {
  const lang = getLanguage();
  const keys = keyMap.split('.');
  let result = dictionary[lang] || dictionary['pt-br'];
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]] || '';
  }
  return `${result || ''}`;
};

export { i18n as i };
