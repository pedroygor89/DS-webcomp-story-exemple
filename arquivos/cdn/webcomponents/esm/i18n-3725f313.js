const getLanguage = () => {
  var _a;
  const lang = (_a = document.getElementsByTagName('html')[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('lang');
  return lang || 'pt-br';
};
const dictionary = {
  'en-us': {
    globals: {
      continuar: 'Continue',
    },
    score: {
      pontuacao: 'EN - Pontuação: {score}/{total}',
    },
    interactiveMedia: {
      title: "EN - Um Nome Super Descolado!!!",
      description: "EN - Donec iaculis lectus nulla, et efficitur purus sollicitudin at. In eu leo placerat, fermentum lorem vel, pretium massa. Nam a nisl erat. Fusce semper ligula ac diam viverra tincidunt. Aliquam viverra ipsum in mattis porta. Cras vitae consequat ipsum. Aliquam rhoncus mi eget ornare faucibus. Curabitur hendrerit dolor ac metus egestas auctor non sed lectus. Nulla placerat risus nec erat pharetra placerat. Curabitur consequat neque at diam maximus malesuada. Etiam sed placerat urna, vel tristique dolor.",
      quiz: {
        btn: 'EN - Responder',
        overline: `EN - Questão {index} de {total}`,
      },
      score: {
        anchorLabel: 'EN - Ir para o conceito',
        title: 'EN - Pontuação final: {score}/{total}',
        subtitle: {
          none: 'EN - Que pena! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          some: 'EN - Você pode melhorar! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          all: 'EN - Não vamos dar um "PARABÉNS" se o aluno acertar tudo?',
        }
      },
      video: {
        btn: "EN - Avançar",
      }
    },
    pager: {
      atividade: 'Activity',
      conceito: 'Concept',
      conclusao: 'Conclusion',
      introducao: 'Warm Up',
      apresentacao: 'Warm Up',
      modulo: 'Section',
      teexplico: 'Follow the thread',
      todos: 'All'
    },
    motivationalMsg: {
      forward: {
        0: {
          message: 'Congratulations on your commitment!',
        },
        1: {
          message: 'You are on the right track!',
        },
        2: {
          message: 'Very good, keep it up.',
        },
        3: {
          message: 'This way you will go far!',
        },
        4: {
          message: 'Keep going forward!',
        },
        5: {
          title: 'That’s great!',
          message: 'Keep studying.',
        },
        6: {
          title: 'What dedication!',
          message: 'Congratulations!',
        },
        7: {
          title: 'Yay!',
          message: 'You are advancing!',
        },
        8: {
          title: 'Bravo!',
          message: 'You are flying in your studies. ',
        },
        /*
        4: {
          message: 'You are a study machine!',
        },
        6: {
          title: 'Wow!',
          message: 'You learned a lot today.',
        },
        10: {
          title: 'Go for it!',
          message: 'You have come so far.',
        },*/
      },
      break: {
        0: {
          disclaimer: 'Break Time!',
          icon: 'water_glass',
          title: 'We noticed that you have been studying non-stop for quite some time now, and that is amazing!',
          message: 'But how about taking a break and drinking a glass of water?',
        },
        1: {
          disclaimer: 'Break Time!',
          icon: 'water_glass',
          message: 'How about taking a break and drinking a glass of water?',
        },
        2: {
          disclaimer: 'Break Time!',
          icon: 'tea_cup',
          title: 'What a load of information!',
          message: 'Get your coffee or tea, rest, and come back in a few minutes.',
        },
        3: {
          disclaimer: 'Break Time!',
          icon: 'tea_cup',
          message: 'Get your coffee or tea and come back in a few minutes.',
        },
        4: {
          disclaimer: 'Break Time!',
          icon: 'water_glass',
          title: 'Are you hydrated enough?',
          message: 'Perfect time to drink water!',
        },
        5: {
          disclaimer: 'Break Time!',
          icon: 'water_glass',
          message: 'Perfect time to drink water!',
        },
      },
      conclusion: {
        disclaimer: 'One more step!',
        action: 'End section',
        0: {
          title: 'You have reached the end of this section, congratulations!',
          message: 'Let’s move on!',
        },
      },
    },
  },
  'es': {
    globals: {
      continuar: 'Continuar',
    },
    score: {
      pontuacao: 'ES - Pontuação: {score}/{total}',
    },
    interactiveMedia: {
      title: "ES - Um Nome Super Descolado!!!",
      description: "ES - Donec iaculis lectus nulla, et efficitur purus sollicitudin at. In eu leo placerat, fermentum lorem vel, pretium massa. Nam a nisl erat. Fusce semper ligula ac diam viverra tincidunt. Aliquam viverra ipsum in mattis porta. Cras vitae consequat ipsum. Aliquam rhoncus mi eget ornare faucibus. Curabitur hendrerit dolor ac metus egestas auctor non sed lectus. Nulla placerat risus nec erat pharetra placerat. Curabitur consequat neque at diam maximus malesuada. Etiam sed placerat urna, vel tristique dolor.",
      quiz: {
        btn: 'ES - Responder',
        overline: `ES - Questão {index} de {total}`,
      },
      score: {
        anchorLabel: 'ES - Ir para o conceito',
        title: 'ES - Pontuação final: {score}/{total}',
        subtitle: {
          none: 'ES - Que pena! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          some: 'ES - Você pode melhorar! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          all: 'ES - Não vamos dar um "PARABÉNS" se o aluno acertar tudo?',
        }
      },
      video: {
        btn: "ES - Avançar",
      }
    },
    pager: {
      atividade: 'Actividad',
      conceito: 'Concepto ',
      conclusao: 'Conclusión',
      introducao: 'Introducción',
      apresentacao: 'Introducción',
      modulo: 'Módulo',
      teexplico: '¡Ven y te explico!',
      todos: 'Todos'
    },
    motivationalMsg: {
      forward: {
        0: {
          message: '¡Felicitaciones por tu esfuerzo!',
        },
        1: {
          message: '¡Estás en el camino correcto!',
        },
        2: {
          message: 'Muy bien, sigue así.',
        },
        3: {
          message: '¡Así llegas lejos!',
        },
        4: {
          message: '¡Sigue avanzando!',
        },
        5: {
          title: '¡Qué bueno!',
          message: 'Sigue estudiando.',
        },
        6: {
          title: '¡Cuánta dedicación!',
          message: '¡Felicitaciones!',
        },
        7: {
          title: '¡Guay!',
          message: '¡Estás avanzando!',
        },
        8: {
          title: '¡Muy bien!',
          message: 'Estás volando en los estudios.',
        },
        /*
        4: {
          message: '¡Eres una máquina de estudiar!',
        },
        6: {
          title: '¡Guau!',
          message: 'Aprendiste mucho hoy.',
        },
        10: {
          title: '¡Fuerza!',
          message: 'Has llegado hasta aquí.',
        },
        */
      },
      break: {
        0: {
          disclaimer: 'Hora de la pausa',
          icon: 'water_glass',
          title: '¡Vimos que has estudiado sin parar durante bastante tiempo y eso es increíble!',
          message: 'Pero, ¿qué tal descansar un poco y beber un vaso de agua?',
        },
        1: {
          disclaimer: 'Hora de la pausa',
          icon: 'water_glass',
          message: '¿Qué tal descansar un poco y beber un vaso de agua? ',
        },
        2: {
          disclaimer: 'Pausa de café',
          icon: 'tea_cup',
          title: '¡Cuánta información!',
          message: 'Toma tu café o té, descanse y regresa en unos minutos.',
        },
        3: {
          disclaimer: 'Pausa de café',
          icon: 'tea_cup',
          message: 'Toma tu café o té y regresa en algunos minutos.',
        },
        4: {
          disclaimer: 'Hora de la pausa',
          icon: 'water_glass',
          title: '¿Ya te has hidratado lo suficiente?',
          message: '¡Momento perfecto para beber agua!',
        },
        5: {
          disclaimer: 'Hora de la pausa',
          icon: 'water_glass',
          message: '¡Momento perfecto para beber agua!',
        },
      },
      conclusion: {
        disclaimer: '¡Más un paso!',
        action: 'Concluir módulo',
        0: {
          title: 'Has llegado al final de este módulo. ¡Enhorabuena!',
          message: '¡Vamos!',
        },
      },
    },
  },
  'pt-br': {
    globals: {
      continuar: 'Continuar',
    },
    score: {
      pontuacao: 'Pontuação: {score}/{total}',
    },
    interactiveMedia: {
      title: "Um Nome Super Descolado!!!",
      description: "Português Donec iaculis lectus nulla, et efficitur purus sollicitudin at. In eu leo placerat, fermentum lorem vel, pretium massa. Nam a nisl erat. Fusce semper ligula ac diam viverra tincidunt. Aliquam viverra ipsum in mattis porta. Cras vitae consequat ipsum. Aliquam rhoncus mi eget ornare faucibus. Curabitur hendrerit dolor ac metus egestas auctor non sed lectus. Nulla placerat risus nec erat pharetra placerat. Curabitur consequat neque at diam maximus malesuada. Etiam sed placerat urna, vel tristique dolor.",
      quiz: {
        btn: 'Responder',
        overline: `Questão {index} de {total}`,
      },
      score: {
        anchorLabel: 'Ir para o conceito',
        title: 'Pontuação final: {score}/{total}',
        subtitle: {
          none: 'Que pena! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          some: 'Você pode melhorar! Que tal rever os conceitos aprendidos ao longo do conteúdo?',
          all: 'Não vamos dar um "PARABÉNS" se o aluno acertar tudo?',
        }
      },
      video: {
        btn: "Avançar",
      }
    },
    pager: {
      atividade: 'Atividade',
      conceito: 'Conceito',
      conclusao: 'Conclusão',
      introducao: 'Introdução',
      apresentacao: 'Introdução',
      modulo: 'Módulo',
      teexplico: 'Vem que eu te explico!',
      todos: 'Todos'
    },
    motivationalMsg: {
      forward: {
        0: {
          message: 'Parabéns pelo seu empenho!',
        },
        1: {
          message: 'Você está no caminho certo!',
        },
        2: {
          message: 'Muito bom, continue assim.',
        },
        3: {
          message: 'Desse jeito você vai longe!',
        },
        4: {
          message: 'Continue seguindo em frente!',
        },
        5: {
          title: 'Que legal!',
          message: 'Continue estudando.',
        },
        6: {
          title: 'Quanta dedicação!',
          message: 'Parabéns!',
        },
        7: {
          title: 'Oba!',
          message: 'Você está avançando!',
        },
        8: {
          title: 'Bravo!',
          message: 'Você está voando nos estudos.',
        },
        /*
        4: {
          message: 'Você é uma máquina de estudar!',
        },
        */
        /*
        6: {
          title: 'Uau!',
          message: 'Você aprendeu muita coisa hoje.',
        },
        */
        /*
        10: {
          title: 'Força!',
          message: 'Você já chegou até aqui.',
        },
        */
      },
      break: {
        0: {
          disclaimer: 'Hora do intervalo',
          icon: 'water_glass',
          title: 'Vimos que você já está há um bom tempo estudando sem parar e isso é incrível!',
          message: 'Mas que tal dar uma paradinha e beber um copo d’água?',
        },
        1: {
          disclaimer: 'Hora do intervalo',
          icon: 'water_glass',
          message: 'Que tal dar uma paradinha e beber um copo d’água?',
        },
        2: {
          disclaimer: 'Pausa para o café',
          icon: 'tea_cup',
          title: 'Quanta informação!',
          message: 'Pegue seu café ou chá, descanse e volte em alguns minutos.',
        },
        3: {
          disclaimer: 'Pausa para o café',
          icon: 'tea_cup',
          message: 'Pegue seu café ou chá e volte em alguns minutos.',
        },
        4: {
          disclaimer: 'Hora do intervalo',
          icon: 'water_glass',
          title: 'Já se hidratou o suficiente?',
          message: 'Momento perfeito para beber água!',
        },
        5: {
          disclaimer: 'Hora do intervalo',
          icon: 'water_glass',
          message: 'Momento perfeito para beber água!',
        },
      },
      conclusion: {
        disclaimer: 'Mais um degrau!',
        action: 'Concluir módulo',
        0: {
          title: 'Você chegou ao fim deste módulo, parabéns!',
          message: 'Vamos em frente!',
        },
      },
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
