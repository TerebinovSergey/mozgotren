import Vychitanie from './Vychitanie';
import SlozhenieView from '../slozhenie/SlozhenieView';
import { getElement } from '../../utils/utils';
import { GameState, GameNames } from '../../types/types';
import BaseGameController from '../BaseGameController';

export default class VychitanieController extends BaseGameController {
  game: Vychitanie;
  view: SlozhenieView;

  constructor() {
    super();
    this.view = new SlozhenieView(GameNames.Vychitanie);
    this.game = new Vychitanie();
  }

  start(): void {
    this.view.draw();
    this.game.start();
    this.updateState();
    this.addAnswerListeners();
    this.addListeners();
  }

  stop(): void {
    this.game.stop();
  }

  private addListeners(): void {
    const gameContainer = getElement('.game-container-vychitanie');
    const stop = getElement('.button-close', gameContainer);
    stop.addEventListener('click', () => this.stop());
  }

  private addAnswerListeners(): void {
    const gameContainer = getElement('.game-container-vychitanie');
    const answers = getElement('.game-answer-options', gameContainer);
    answers.addEventListener('click', (event) => {
      if (this.game.gameState !== GameState.Play) return;
      const { target } = event;
      if (!(target instanceof HTMLButtonElement)) return;
      const result = this.game.checkAnswer(Number(target.dataset.answer));
      target.classList.add((result) ? 'rigth-answer' : 'wrong-answer');
      setTimeout(() => this.updateState(), 200);
    });
  }

  private async updateState(): Promise<void> {
    if (this.game.gameState === GameState.Play) {
      const task = this.game.getTask();
      this.view.updateTask(task.task);
      this.view.updateAnswers(task.answers);
    }
  }
}
