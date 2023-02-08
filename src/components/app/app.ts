import { isUserCheck } from '../../utils/utils';
import loginPage from '../../pages/login';
import registrationPage from '../../pages/registration';
import Controller from '../controller/controller';
import { GameNames } from '../../types/types';

type Routes = {
  [key: string]: () => void,
};

function clearPage() {
  document.body.innerHTML = '';
}

function drawGamePage(nameGame: GameNames) {
  clearPage();
  Controller.drawGamePage(nameGame);
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
  '/profile': () => {
    if (isUserCheck() === null) {
      window.location.href = '/';
    } else {
      clearPage();
      Controller.drawProfilePage();
    }
  },
  '/login': () => {
    loginPage();
  },
  '/register': () => {
    registrationPage();
  },
  '/trenagor': () => drawGamePage(GameNames.Vychitanie),
};

export default class App {
  static start() {
    window.addEventListener('popstate', () => App.handleLocation());
    App.handleLocation();
  }

  static handleLocation() {
    const { pathname, hash } = window.location;
    if (hash.length > 0) {
      if (pathname === '/trenagor') drawGamePage(hash.slice(1) as GameNames);
    } else {
      routes[pathname]();
    }
  }
}
