import { isUserCheck } from '../../utils/utils';
import loginPage from '../../pages/login';
import registrationPage from '../../pages/registration';
import Controller from '../controller/controller';

type Routes = {
  [key: string]: () => void,
};

function clearPage() {
  document.body.innerHTML = '';
}

const routes: Routes = {
  '/': () => {
    isUserCheck();
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
    isUserCheck();
    clearPage();
    Controller.drawTrenagorsPage();
  },
  '/game': () => {
    clearPage();
    Controller.drawGamePage();
  },
  '/game-start': () => {
    clearPage();
    Controller.drawGameStartPage();
  },
  '/game-result': () => {
    clearPage();
    Controller.drawGameResultPage();
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
