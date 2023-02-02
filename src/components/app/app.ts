import { loginPage } from '../../pages/login';
import { registrationPage } from '../../pages/registration';
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
    clearPage();
    Controller.drawTrenagorsPage();
  },
  '/login': () => {
    loginPage();
  },
  '/register': () => {
    registrationPage();
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
