import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import GameController from '../../pages/gameController';
import ProfilePage from '../../pages/profile';
import { GameNames, SessionData } from '../../types/types';
import { getUserData, httpGetAsync } from '../../utils/utils';

const userData = await getUserData();
const userCountry = (await httpGetAsync()).country;

export default class Controller {
  static drawHomePage(status: SessionData) {
    HomePage.draw(status);
    console.log('response from API: ', status);
  }

  static drawProfilePage(ssid: SessionData) {
    ProfilePage.draw(ssid, userData, userCountry);
    console.log('response from API: ', ssid, userData, userCountry);
  }

  static drawTrenagorsPage(status: SessionData) {
    TrenagorsPage.draw(status);
    console.log('response from API: ', status);
  }

  static drawGamePage(nameGame: GameNames, status: SessionData) {
    const gameController = new GameController(nameGame);
    gameController.draw(status);
    console.log('response from API: ', status);
  }
}
