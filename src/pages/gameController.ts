import GamePage from './gameView';
import { getElement } from '../utils/utils';

export default class GameController {
  view: GamePage;
  nameGame: string;

  constructor(nameGame: string) {
    this.nameGame = nameGame;
    this.view = new GamePage(nameGame);
  }

  draw(): void {
    this.view.draw();
    this.addEventListeners();
  }

  drawGameStart() {
    this.view.drawGameStart();
    this.addListenerClose();
  }

  addEventListeners(): void {
    this.addListenerStart();
  }

  addListenerStart() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnStart = getElement('.btn-start-game', gameContainer);
    btnStart.addEventListener('click', () => this.drawGameStart());
  }

  addListenerClose() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnClose = getElement('.button-close', gameContainer);
    btnClose.addEventListener('click', () => {
      this.view.drawGemeResult();
      this.addListenerStart();
    });
  }
}
