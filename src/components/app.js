import keyboard from './keyboard';
import Draw from './draw';
import dictionary from './dictionary';

export default class App {
  constructor(lng) {
    this.onPressKeys = [];
    this.changeLanguageCombination = ['ControlLeft', 'AltLeft'].sort().toString();
    this.chosenLanguage = lng;
    this.allLanguages = ['EN', 'RU'];
    this.onPressShift = false;
    this.draw = new Draw();
    this.dictionary = dictionary;
  }

  render() {
    document.body.insertAdjacentElement('afterbegin', this.draw.simpleTag('p', 'keyboard-app', 'Для переключения языка комбинация: левыe ctrl + alt'));
    const app = document.body.insertAdjacentElement('afterbegin', this.draw.simpleTag('div', 'keyboard-app', ''));
    const keyboardTag = app.insertAdjacentElement('afterbegin', this.draw.simpleTag('div', 'keyboard', ''));
    const inputTag = app.insertAdjacentElement('afterbegin', this.draw.simpleTag('textarea', 'text', ''));
    Object.keys(keyboard).forEach((element) => {
      keyboardTag.insertAdjacentElement(
        'beforeend',
        this.draw.key(element, keyboard[element], this.chosenLanguage),
      );
    });
    document.addEventListener(
      'keydown',
      (key) => {
        document.querySelector(`.${key.code}`).classList.toggle('active-button');
        if (this.onPressKeys.indexOf(key.code) < 0) {
          this.onPressKeys.push(key.code);
        }
        if (this.onPressKeys.length === 2
            && this.onPressKeys.sort().toString() === this.changeLanguageCombination) {
          this.chosenLanguage = this.allLanguages[
            (this.allLanguages.indexOf(this.chosenLanguage) + 1) % this.allLanguages.length
          ];
          [...document.querySelectorAll('.button-item')].forEach((element) => {
            const [registr, elementCode] = element.classList[1].split('-');
            let { innerHTML } = element;
            const myStorage = window.localStorage;
            myStorage.setItem('lng', this.chosenLanguage);
            if (keyboard[elementCode].dictionary) {
              innerHTML = keyboard[elementCode].dictionary[this.chosenLanguage][registr];
            }
            return innerHTML;
          });
        }
        if (key.shiftKey) {
          const allTypingButtons = [...document.querySelectorAll('.button-item')];
          allTypingButtons.map((element) => element.classList.toggle('active-shift'));
        }
        if (keyboard[key.code].dictionary) {
          const register = key.shiftKey ? 1 : 0;
          inputTag.value += keyboard[key.code].dictionary[this.chosenLanguage][register];
        }
      },
      false,
    );
    document.addEventListener('click',
      (e) => {
        const code = [...e.target.classList][1];
        if (keyboard[code] && keyboard[code].dictionary) {
          inputTag.value += keyboard[code].dictionary[this.chosenLanguage][0];
        }
        if (keyboard[code] && keyboard[code].activity) {
          inputTag.value = keyboard[code].activity(inputTag.value, inputTag.selectionStart);
        }
        if (e.target.className.match('Arrowleft')) {
          inputTag.selectionStart -= 1;
          inputTag.selectionEnd -= 1;
        }
      }, false);
    document.addEventListener(
      'keyup',
      (key) => {
        while (this.onPressKeys.indexOf(key.code) + 1) {
          this.onPressKeys.splice(this.onPressKeys.indexOf(key.code), 1);
        }
        document.querySelector(`.${key.code}`).classList.toggle('active-button');
      },
      false,
    );
  }
}
