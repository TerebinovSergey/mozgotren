import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import ProfilePage from '../../pages/profile';
import GameController from '../../pages/gameController';

export default class Controller {
  static drawHomePage() {
    HomePage.draw();
  }

  static drawProfilePage() {
    ProfilePage.draw();
  }

  static drawTrenagorsPage() {
    TrenagorsPage.draw();
  }

  static drawGamePage(nameGame: string) {
    const gameController = new GameController(nameGame);
    gameController.draw();
  }
}
