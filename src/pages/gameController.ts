import GamePage from './gameView';
import { getElement } from '../utils/utils';
import { GameControllers, getGameController } from '../utils/gameControllers';
import { GameState, GameNames, SessionData } from '../types/types';

type UpdateStateParameters = {
  score: number,
  timeLeft: number,
  currentLevel: number,
  levels: number,
  time: number,
};

export default class GameController {
  view!: GamePage;
  nameGame: GameNames;
  gameController!: GameControllers;
  timeoutState!: NodeJS.Timeout;

  constructor(nameGame: GameNames) {
    this.nameGame = nameGame;
    this.gameController = getGameController(nameGame);
    this.view = new GamePage({ ...this.gameController.game });
  }

  draw(status: SessionData): void {
    this.view.draw(status);
    this.renderState({ ...this.gameController.game });
    this.addEventListeners();
  }

  private start() {
    this.view.drawGameStart();
    this.gameController.start();
    this.timeoutState = setInterval(() => {
      this.renderState({ ...this.gameController.game });
      this.checkGame();
    }, 330);
    this.addListenerClose();
  }

  private stop() {
    clearInterval(this.timeoutState);
    this.view.drawGameResult();
    this.renderResults();
    this.renderState({ ...this.gameController.game });
    this.gameController.stop();
    this.addListenerStart();
  }

  private checkGame() {
    if (this.gameController.game.gameState === GameState.Finished) {
      clearInterval(this.timeoutState);
      this.stop();
    }
  }

  private addEventListeners(): void {
    this.addListenerStart();
  }

  private addListenerStart() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnStart = getElement('.btn-start-game', gameContainer);
    btnStart.addEventListener('click', () => this.start());
  }

  private addListenerClose() {
    const gameContainer = getElement(`.game-container-${this.view.nameGame}`);
    const btnClose = getElement('.button-close', gameContainer);
    btnClose.addEventListener('click', () => this.stop());
  }

  private renderState(parameters: UpdateStateParameters): void {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const timeElement = getElement('.game-time-title', gameContainer);
    timeElement.textContent = String(parameters.timeLeft);
    const scoreElement = getElement('.game-score-title', gameContainer);
    scoreElement.textContent = String(parameters.score);
    const levelElement = getElement('.game-level-title', gameContainer);
    const maxLevelElement = getElement('.game-max-level-title', gameContainer);
    levelElement.textContent = `${parameters.currentLevel} /`;
    maxLevelElement.textContent = ` ${parameters.levels}`;
    if (this.gameController.game.gameState === GameState.Play) {
      const timeLine = getElement('.time-ruler', gameContainer);
      const timePass = Number(((parameters.timeLeft / parameters.time) * 100).toFixed(2));
      timeLine.style.background = `linear-gradient(to right,
        #003969 ${timePass}%,
        #ff0000 ${timePass}%,
        #ff0000 100%`;
    }
  }

  private renderResults() {
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
    const circleBar = document.querySelector('.progress_answer__overlay');
    if (circleBar && scorePercent > 0) {
      circleBar.setAttribute('stroke-dashoffset', `${125.664 - (scorePercent / 100) * 125.664}`);
    }
  }
}
