import './style.scss';
import App from './components/app';

const myStorage = window.localStorage;
const app = new App(myStorage.getItem('lng'));

window.onload = () => {
  app.render();
};
