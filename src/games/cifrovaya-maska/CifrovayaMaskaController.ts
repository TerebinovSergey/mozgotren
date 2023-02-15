import CifrovayaMaska from './CifrovayaMaska';
import BaseArithmeticView from '../baseArithmeticClass/BaseArithmeticView';
import { getElement } from '../../utils/utils';
import { GameState, GameNames } from '../../types/types';
import BaseGameController from '../BaseGameController';

export default class CifrovayaMaskaController extends BaseGameController {
  game: CifrovayaMaska;
  view: BaseArithmeticView;

  constructor(nameGame: GameNames) {
    super();
    this.view = new BaseArithmeticView(nameGame);
    this.game = new CifrovayaMaska(2);
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
    const gameContainer = getElement(`.game-container-${this.game.nameGame}`);
    const stop = getElement('.button-close', gameContainer);
    stop.addEventListener('click', () => this.stop());
  }

  private addAnswerListeners(): void {
    const gameContainer = getElement(`.game-container-${this.game.nameGame}`);
    const answers = getElement('.game-answer-options', gameContainer);
    answers.addEventListener('click', (event) => this.checkAnswer(event));
  }

  checkAnswer(event: MouseEvent): void {
    if (this.game.gameState !== GameState.Play) return;
    const { target } = event;
    if (!(target instanceof HTMLButtonElement)) return;
    const result = this.game.checkAnswer(target.dataset.answer ?? '');
    target.classList.add((result) ? 'right-answer' : 'wrong-answer');
    setTimeout(() => this.updateState(), 200);
  }

  async updateState(): Promise<void> {
    if (this.game.gameState === GameState.Play) {
      const task = this.game.getTask();
      this.view.updateTask(task.task);
      this.view.updateAnswers(task.answers);
    }
  }
}
