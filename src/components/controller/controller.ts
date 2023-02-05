import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import GamePage from '../../pages/game';
import GamePageStart from '../../pages/game-start';

export default class Controller {
  static drawHomePage() {
    HomePage.draw();
  }

  static drawTrenagorsPage() {
    TrenagorsPage.draw();
  }

  static drawGamePage() {
    GamePage.draw();
  }

  static drawGameStartPage() {
    GamePageStart.draw();
  }
}
