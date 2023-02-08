import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import ProfilePage from '../../pages/profile';
import GameController from '../../pages/gameController';

export default class Controller {
  static drawHomePage(status: any) {
    HomePage.draw(status);
    console.log(status);
  }

  static drawProfilePage(status: any) {
    ProfilePage.draw(status);
    console.log(status);
  }

  static drawTrenagorsPage(status: any) {
    TrenagorsPage.draw(status);
    console.log(status);
  }

  static drawGamePage(nameGame: string) {
    const gameController = new GameController(nameGame);
    gameController.draw();
  }
}
