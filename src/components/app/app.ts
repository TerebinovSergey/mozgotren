import { loginPage } from '../../pages/login';
import Controller from '../controller/controller';

type Routes = {
  [key: string]: () => void,
};

function clearPage() {
  document.body.innerHTML = '';
}

const routes: Routes = {
  '/': () => {
    clearPage();
    Controller.drawHomePage();
  },
  '/about': () => {
    document.body.innerHTML = 'About';
  },
  '/contact': () => {
    document.body.innerHTML = 'Contact';
  },
  '/trenagors': () => {
    document.body.innerHTML = 'Trenagors';
  },
  '/login': () => {
    loginPage();
  },
};

export default class App {
  static start() {
    window.addEventListener('popstate', () => App.handleLocation());
    App.handleLocation();
  }

  static handleLocation() {
    const path = window.location.pathname;
    routes[path]();
  }
}
