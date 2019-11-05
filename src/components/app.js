export default class App {
  constructor() {
    this.activeMenuItem = '';
    this.chosenLanguage = 'EN';
    this.activeFrame = '0';
  }

  render() {
    // eslint-disable-next-line no-alert
    alert(this.activeMenuItem);
  }
}
