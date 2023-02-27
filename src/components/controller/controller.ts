import HomePage from '../../pages/home';
import TrenagorsPage from '../../pages/trenagors';
import RatingPage from '../../pages/rating';
import Page404 from '../../pages/404';
import GameController from '../../pages/gameController';
import ProfilePage from '../../pages/profile';
import { GameNames, SessionData } from '../../types/types';
import { getUserData, httpGetAsync } from '../../utils/utils';

const userData = await getUserData();
const userCountry = (await httpGetAsync()).country;

export default class Controller {
  static drawHomePage(status: SessionData): void {
    HomePage.draw(status);
  }

  static drawProfilePage(ssid: SessionData): void {
    ProfilePage.draw(ssid, userData, userCountry);
  }

  static drawTrenagorsPage(status: SessionData): void {
    TrenagorsPage.draw(status);
  }

  static drawRatingPage(status: SessionData): void {
    const rating = new RatingPage();
    rating.draw(status);
  }

  static drawGamePage(nameGame: GameNames, status: SessionData): void {
    const gameController = new GameController(nameGame);
    gameController.draw(status);
  }

  static draw404Page(): void {
    Page404.draw();
  }
}
