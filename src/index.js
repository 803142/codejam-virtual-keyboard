import App from './components/app';

const app = new App();

window.onload = () => {
  const myStorage = localStorage;
  app.render(myStorage.getItem('lng'));
};
