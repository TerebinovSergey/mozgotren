import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import ProfilePage from '../../pages/profile';

export default class Controller {
  static drawHomePage() {
    HomePage.draw();
  }

  static drawTrenagorsPage() {
    TrenagorsPage.draw();
  }

  static drawProfilePage() {
    ProfilePage.draw();
  }
}
