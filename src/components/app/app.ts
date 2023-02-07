import { isAuthenticated } from '../../utils/utils';
import loginPage from '../../pages/login';
import registrationPage from '../../pages/registration';
import Controller from '../controller/controller';

const isUser: { message: string, status: boolean, user: string } = await isAuthenticated();

type Routes = {
  [key: string]: () => void,
};

function clearPage() {
  document.body.innerHTML = '';
}

function drawGamePage(nameGame: string) {
  clearPage();
  Controller.drawGamePage(nameGame);
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
  '/trenagors/1': () => {
    clearPage();
    Controller.drawTrenagorsPage();
  },
  '/profile': () => {
    if (!isUser.status) {
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
    const paths = path.split('/');
    if (paths.length > 2) {
      if (paths[1] === 'trenagor') drawGamePage(paths[2]);
    } else {
      routes[path]();
    }
  }
}
