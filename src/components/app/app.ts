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

function drawGamePage(nameGame: string) {
  clearPage();
  console.log(nameGame);
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
  '/trenagor': () => drawGamePage('slozhenie'),
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
