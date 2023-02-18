import { isUserCheck } from '../../utils/utils';
import loginPage from '../../pages/login';
import registrationPage from '../../pages/registration';
import Controller from '../controller/controller';
import { GameNames, SessionData } from '../../types/types';

const ssid: SessionData = await isUserCheck;

type Routes = {
  [key: string]: () => void,
};

function clearPage() {
  document.body.innerHTML = '';
}

function drawGamePage(nameGame: GameNames) {
  clearPage();
  Controller.drawGamePage(nameGame, ssid);
}

const routes: Routes = {
  '/': () => {
    clearPage();
    Controller.drawHomePage(ssid);
  },
  '/trenagors': () => {
    clearPage();
    Controller.drawTrenagorsPage(ssid);
  },
  '/rating': () => {
    clearPage();
    Controller.drawRatingPage(ssid);
  },
  '/profile': () => {
    if (!(ssid.status)) {
      window.location.href = '/';
    } else {
      clearPage();
      Controller.drawProfilePage(ssid);
    }
  },
  '/login': () => loginPage(),
  '/register': () => registrationPage(),
};

export default class App {
  static start() {
    window.addEventListener('popstate', () => App.handleLocation());
    App.handleLocation();
  }

  static handleLocation() {
    const { pathname, hash } = window.location;
    if (hash.length > 0 && pathname === '/trenagor') {
      drawGamePage(hash.slice(1) as GameNames);
    } else {
      routes[pathname]();
    }
  }
}
