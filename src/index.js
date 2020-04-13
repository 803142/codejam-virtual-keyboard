import './style.scss';
import App from './components/app';

const myStorage = window.localStorage;
const lng = myStorage.getItem('lng') || 'EN';
const app = new App(lng);

window.onload = () => {
  app.render();
};
