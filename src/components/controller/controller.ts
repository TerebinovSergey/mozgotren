import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';

export default class Controller {
  static drawHomePage() {
    HomePage.draw();
  }

  static drawTrenagorsPage() {
    TrenagorsPage.draw();
  }
}
