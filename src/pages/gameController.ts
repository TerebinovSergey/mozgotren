import GamePage from './gameView';
import { getElement } from '../utils/utils';
import { GameState, GameNames, SessionData } from '../types/types';
import SlozhenieController from '../games/slozhenie/SlozhenieController';
import VychitanieController from '../games/vychitanie/VychitanieController';
import UmnozhenieController from '../games/umnozhenie/UmnozhenieController';
import DelenieController from '../games/delenie/DelenieController';
import ArifmetikaController from '../games/arifmetika/ArifmetikaController';
import SchulteTableController from '../games/schulte-table/SchulteTableController';
import ShulteAlfavitController from '../games/shulte-alfavit/ShulteAlfavitController';
import ShulteCvetController from '../games/shulte-cvet/ShulteCvetController';
import SortirovshchikCifrController from '../games/sortirovshchik-cifr/SortirovshchikCifrController';

type UpdateStateParameters = {
  score: number,
  timeLeft: number,
  currentLevel: number,
  levels: number,
};

type GamesControllers = SlozhenieController |
VychitanieController |
UmnozhenieController |
DelenieController |
ArifmetikaController |
SchulteTableController |
ShulteAlfavitController |
ShulteCvetController |
SortirovshchikCifrController;

export default class GameController {
  view!: GamePage;
  nameGame: GameNames;
  gameController!: GamesControllers;
  timeoutState!: NodeJS.Timeout;

  constructor(nameGame: GameNames) {
    this.nameGame = nameGame;
    if (this.nameGame === GameNames.Slozhenie) {
      this.gameController = new SlozhenieController();
    } else if (this.nameGame === GameNames.Vychitanie) {
      this.gameController = new VychitanieController();
    } else if (this.nameGame === GameNames.Umnozhenie) {
      this.gameController = new UmnozhenieController();
    } else if (this.nameGame === GameNames.Delenie) {
      this.gameController = new DelenieController();
    } else if (this.nameGame === GameNames.Arifmetika) {
      this.gameController = new ArifmetikaController();
    } else if (this.nameGame === GameNames.TablicaShulte) {
      this.gameController = new SchulteTableController(GameNames.TablicaShulte);
    } else if (this.nameGame === GameNames.ShulteAlfavit) {
      this.gameController = new ShulteAlfavitController(GameNames.ShulteAlfavit);
    } else if (this.nameGame === GameNames.ShulteCvet) {
      this.gameController = new ShulteCvetController(GameNames.ShulteCvet);
    } else if (this.nameGame === GameNames.SortirovshchikCifr) {
      this.gameController = new SortirovshchikCifrController(GameNames.SortirovshchikCifr);
    }
    this.view = new GamePage({ ...this.gameController.game });
  }

  draw(status: SessionData): void {
    this.view.draw(status);
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
    const maxLevelElement = getElement('.game-max-level-title', gameContainer);
    levelElement.textContent = `${parameters.currentLevel} /`;
    maxLevelElement.textContent = ` ${parameters.levels}`;
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
