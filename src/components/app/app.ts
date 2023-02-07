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
