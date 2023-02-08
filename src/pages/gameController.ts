import GamePage from './gameView';
import SlozhenieController from '../games/slozhenie/SlozhenieController';
import { getElement } from '../utils/utils';
import { GameState } from '../types/types';

type UpdateStateParameters = {
  score: number,
  timeLeft: number,
  currentLevel: number,
  levels: number,
};

export default class GameController {
  view!: GamePage;
  nameGame: string;
  gameController!: SlozhenieController;
  timeoutState!: NodeJS.Timeout;

  constructor(nameGame: string) {
    this.nameGame = nameGame;
    if (this.nameGame === 'slozhenie') {
      this.gameController = new SlozhenieController();
    }
    this.view = new GamePage({ ...this.gameController.game });
  }

  draw(): void {
    this.view.draw();
    this.renderState({ ...this.gameController.game });
    this.addEventListeners();
  }

  start() {
    this.view.drawGameStart();
    this.gameController.start();
    this.timeoutState = setInterval(() => {
      this.renderState({ ...this.gameController.game });
      this.checkGame();
    }, 330);
    this.addListenerClose();
  }

  stop() {
    clearInterval(this.timeoutState);
    this.view.drawGameResult();
    this.renderResults();
    this.renderState({ ...this.gameController.game });
    this.gameController.stop();
    this.addListenerStart();
  }

  checkGame() {
    if (this.gameController.game.gameState === GameState.Finished) {
      clearInterval(this.timeoutState);
      this.stop();
    }
  }

  addEventListeners(): void {
    this.addListenerStart();
  }

  addListenerStart() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnStart = getElement('.btn-start-game', gameContainer);
    btnStart.addEventListener('click', () => this.start());
  }

  addListenerClose() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnClose = getElement('.button-close', gameContainer);
    btnClose.addEventListener('click', () => this.stop());
  }

  renderState(parameters: UpdateStateParameters): void {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const timeElement = getElement('.game-time-title', gameContainer);
    timeElement.textContent = String(parameters.timeLeft);
    const scoreElement = getElement('.game-score-title', gameContainer);
    scoreElement.textContent = String(parameters.score);
    const levelElement = getElement('.game-level-title', gameContainer);
    // const maxLevelElement = getElement('.game-max-level-title', gameContainer);
    levelElement.textContent = `${parameters.currentLevel} /`;
    // maxLevelElement.textContent = ` ${parameters.levels}`;
  }

  renderResults() {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const score = getElement('.game-total-score', gameContainer);
    score.textContent = String(this.gameController.game.score);
    const success = getElement('.rigth-answers', gameContainer);
    success.textContent = String(this.gameController.game.rightAnswers);
    const errors = getElement('.wrong-answers', gameContainer);
    errors.textContent = String(this.gameController.game.wrongAnswers);
    const percent = getElement('.score-percent', gameContainer);
    let scorePercent = this.gameController.game.wrongAnswers
    + this.gameController.game.rightAnswers;
    if (scorePercent > 0) {
      scorePercent = Math.ceil((this.gameController.game.rightAnswers
        / (this.gameController.game.wrongAnswers + this.gameController.game.rightAnswers)) * 100);
    }
    percent.textContent = `${scorePercent}%`;
  }
}
