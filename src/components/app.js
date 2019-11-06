import keyboard from './keyboard';
import Draw from './draw';
import dictionary from './dictionary';

export default class App {
  constructor(lng = 'EN') {
    this.onPressKeys = [];
    this.chosenLanguage = lng;
    this.onPressKeyDown = this.keyDown.bind(this);
    this.onPressKeyUp = this.keyUp.bind(this);
    this.draw = new Draw();
  }

  keyDown(key) {
    this.onPressKeys.push(key);
    document.querySelector(`button[class="${key}"]`).classList.toggle('active');
    return false;
  }

  keyUp(key) {
    const inputTag = document.querySelector('input[class="text"]');

    document.querySelector(`button[class="${key}"]`).classList.toggle('active');
    if (dictionary[this.chosenLanguage][key]) {
      inputTag.placeholder += `${dictionary[this.chosenLanguage][key]}`;
    }
    this.onPressKeys = this.onPressKeys.filter(keyPressed => keyPressed !== key);
    return false;
  }

  render() {
    document.body.insertAdjacentElement('afterbegin', this.draw.simpleTag('div', 'keyboard', ''));
    document.body.insertAdjacentElement('afterbegin', this.draw.simpleTag('input', 'text', ''));
    const inputTag = document.querySelector('input[class="text"]');
    const keyboardTag = document.querySelector('div[class="keyboard"]');
    inputTag.readonly = true;
    keyboard.forEach((row) => {
      row.forEach((key) => {
        keyboardTag.insertAdjacentElement(
          'beforeend',
          this.draw.simpleTag(
            'button',
            `key ${key}`,
            `${
              dictionary[this.chosenLanguage][key] ? dictionary[this.chosenLanguage][key] : false
            }`,
          ),
        );
      });
      keyboardTag.insertAdjacentElement('beforeend', this.draw.simpleTag('br', 'hr', ''));
    });
    document.addEventListener(
      'keydown',
      (key) => {
        this.onPressKeyDown(key.code);
        return false;
      },
      false,
    );
    document.addEventListener(
      'keyup',
      (key) => {
        this.onPressKeyUp(key.code);
        return false;
      },
      false,
    );
    document.addEventListener('keypress', () => false, false);
  }
}
