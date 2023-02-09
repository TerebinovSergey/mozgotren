import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import ProfilePage from '../../pages/profile';
import GameController from '../../pages/gameController';
import { GameNames } from '../../types/types';
import { SessionData } from '../../types/types';

export default class Controller {
  static drawHomePage(status: SessionData) {
    HomePage.draw(status);
    console.log('response from API: ', status);
  }

  static drawProfilePage(status: SessionData) {
    ProfilePage.draw(status);
    console.log('response from API: ', status);
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
