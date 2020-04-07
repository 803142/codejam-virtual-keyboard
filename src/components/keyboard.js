const keyboard = {
  Backquote: {
    dictionary: {
      EN: '`~',
      RU: 'ёЁ',
    },
    position: '1*1*1',
  },
  Digit1: {
    dictionary: {
      EN: '1!',
      RU: '1!',
    },
    position: '1*2*1',
  },
  Digit2: {
    dictionary: {
      EN: '2@',
      RU: '2"',
    },
    position: '1*3*1',
  },
  Digit3: {
    dictionary: {
      EN: '3#',
      RU: '3№',
    },
    position: '1*4*1',
  },
  Digit4: {
    dictionary: {
      EN: '4$',
      RU: '4;',
    },
    position: '1*5*1',
  },
  Digit5: {
    dictionary: {
      EN: '5%',
      RU: '5%',
    },
    position: '1*6*1',
  },
  Digit6: {
    dictionary: {
      EN: '6^',
      RU: '6:',
    },
    position: '1*7*1',
  },
  Digit7: {
    dictionary: {
      EN: '7&',
      RU: '7?',
    },
    position: '1*8*1',
  },
  Digit8: {
    dictionary: {
      EN: '8*',
      RU: '8*',
    },
    position: '1*9*1',
  },
  Digit9: {
    dictionary: {
      EN: '9(',
      RU: '9(',
    },
    position: '1*10*1',
  },
  Digit0: {
    dictionary: {
      EN: '0)',
      RU: '0)',
    },
    position: '1*11*1',
  },
  Minus: {
    dictionary: {
      EN: '-_',
      RU: '-_',
    },
    position: '1*12*1',
  },
  Equal: {
    dictionary: {
      EN: '=+',
      RU: '=+',
    },
    position: '1*13*1',
  },
  Backspace: {
    name: '&larr;',
    activity: (value, curretPos) => value.slice(0, curretPos - 1) + value.slice(curretPos),
    position: '1*14*1',
  },
  Tab: {
    name: 'Tab',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}\t${value.slice(curretPos)}`,
    position: '2*1*1',
  },
  KeyQ: {
    dictionary: {
      EN: 'qQ',
      RU: 'йЙ',
    },
    position: '2*2*1',
  },
  KeyW: {
    dictionary: {
      EN: 'wW',
      RU: 'цЦ',
    },
    position: '2*3*1',
  },
  KeyE: {
    dictionary: {
      EN: 'eE',
      RU: 'уУ',
    },
    position: '2*4*1',
  },
  KeyR: {
    dictionary: {
      EN: 'rR',
      RU: 'кК',
    },
    position: '2*5*1',
  },
  KeyT: {
    dictionary: {
      EN: 'tT',
      RU: 'еЕ',
    },
    position: '2*6*1',
  },
  KeyY: {
    dictionary: {
      EN: 'yY',
      RU: 'нН',
    },
    position: '2*7*1',
  },
  KeyU: {
    dictionary: {
      EN: 'uU',
      RU: 'гГ',
    },
    position: '2*8*1',
  },
  KeyI: {
    dictionary: {
      EN: 'iI',
      RU: 'шШ',
    },
    position: '2*9*1',
  },
  KeyO: {
    dictionary: {
      EN: 'oO',
      RU: 'щЩ',
    },
    position: '2*10*1',
  },
  KeyP: {
    dictionary: {
      EN: 'pP',
      RU: 'зЗ',
    },
    position: '2*11*1',
  },
  BracketLeft: {
    dictionary: {
      EN: '[{',
      RU: 'хХ',
    },
    position: '2*12*1',
  },
  BracketRight: {
    dictionary: {
      EN: ']}',
      RU: 'ъЪ',
    },
    position: '2*13*1',
  },
  Delete: {
    name: 'DEL',
    activity: (value, cur) => (cur ? value.slice(0, cur) + value.slice(cur + 1) : value),
    position: '2*14*1',
  },
  CapsLock: {
    name: 'CapsLock',
    position: '3*1*1',
  },
  KeyA: {
    dictionary: {
      EN: 'aA',
      RU: 'фФ',
    },
    position: '3*2*1',
  },
  KeyS: {
    dictionary: {
      EN: 'sS',
      RU: 'ыЫ',
    },
    position: '3*3*1',
  },
  KeyD: {
    dictionary: {
      EN: 'dD',
      RU: 'вВ',
    },
    position: '3*4*1',
  },
  KeyF: {
    dictionary: {
      EN: 'fF',
      RU: 'аА',
    },
    position: '3*5*1',
  },
  KeyG: {
    dictionary: {
      EN: 'gG',
      RU: 'пП',
    },
    position: '3*6*1',
  },
  KeyH: {
    dictionary: {
      EN: 'hH',
      RU: 'рР',
    },
    position: '3*7*1',
  },
  KeyJ: {
    dictionary: {
      EN: 'jJ',
      RU: 'оО',
    },
    position: '3*8*1',
  },
  KeyK: {
    dictionary: {
      EN: 'kK',
      RU: 'лЛ',
    },
    position: '3*9*1',
  },
  KeyL: {
    dictionary: {
      EN: 'lL',
      RU: 'дД',
    },
    position: '3*10*1',
  },
  Semicolon: {
    dictionary: {
      EN: ';:',
      RU: 'жЖ',
    },
    position: '3*11*1',
  },
  Quote: {
    dictionary: {
      EN: '\'"',
      RU: 'эЭ',
    },
    position: '3*12*1',
  },
  Enter: {
    name: '&crarr;',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}\r\n${value.slice(curretPos + 1)}`,
    position: '3*14*1',
  },
  Backslash: {
    dictionary: {
      EN: '\\|',
      RU: '\\/',
    },
    position: '3*13*1',
  },
  ShiftLeft: {
    name: '&uarr;',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '4*1*1',
  },
  IntlBackslash: {
    dictionary: {
      EN: '\\|',
      RU: '\\/',
    },
    position: '4*2*1',
  },
  KeyZ: {
    dictionary: {
      EN: 'zZ',
      RU: 'яЯ',
    },
    position: '4*3*1',
  },
  KeyX: {
    dictionary: {
      EN: 'xX',
      RU: 'чЧ',
    },
    position: '4*4*1',
  },
  KeyC: {
    dictionary: {
      EN: 'cC',
      RU: 'сС',
    },
    position: '4*5*1',
  },
  KeyV: {
    dictionary: {
      EN: 'vV',
      RU: 'мМ',
    },
    position: '4*6*1',
  },
  KeyB: {
    dictionary: {
      EN: 'bB',
      RU: 'иИ',
    },
    position: '4*7*1',
  },
  KeyN: {
    dictionary: {
      EN: 'nN',
      RU: 'тТ',
    },
    position: '4*8*1',
  },
  KeyM: {
    dictionary: {
      EN: 'mM',
      RU: 'ьЬ',
    },
    position: '4*9*1',
  },
  Comma: {
    dictionary: {
      EN: ',<',
      RU: 'бБ',
    },
    position: '4*10*1',
  },
  Period: {
    dictionary: {
      EN: '.>',
      RU: 'юЮ',
    },
    position: '4*11*1',
  },
  Slash: {
    dictionary: {
      EN: '/?',
      RU: '.,',
    },
    position: '4*12*1',
  },
  ShiftRight: {
    name: '&uarr;',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '4*14*1',
  },
  ArrowUp: {
    name: '&and;',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '4*13*1',
  },
  ControlLeft: {
    name: 'Ctrl',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*1*1',
  },
  AltLeft: {
    name: 'Alt',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*2*1',
  },
  Space: {
    name: 'Space',
    activity: (value, curretPos) => `${value.slice(0, curretPos)} ${value.slice(curretPos + 1)}`,
    position: '5*3*7',
  },
  AltRight: {
    name: 'Alt',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*10*1',
  },
  ControlRight: {
    name: 'Ctrl',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*11*1',
  },
  ArrowLeft: {
    name: '<',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*12*1',
  },
  ArrowDown: {
    name: '&or;',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}&or;${value.slice(curretPos + 1)}`,
    position: '5*13*1',
  },
  ArrowRight: {
    name: '>',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
    position: '5*14*1',
  },
};

export default keyboard;
