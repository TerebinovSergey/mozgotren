import Feyskontrol from './Feyskontrol';
import FeyskontrolView from './FeyskontrolView';
import { getElement } from '../../utils/utils';
import { GameState, GameNames } from '../../types/types';
import BaseGameController from '../BaseGameController';
import LishneeChislo from '../lishnee-chislo/LishneeChislo';

export default class FeyskontrolController extends BaseGameController {
  game: Feyskontrol | LishneeChislo;
  view: FeyskontrolView;

  constructor(nameGame: GameNames) {
    super();
    this.view = new FeyskontrolView(nameGame);
    this.game = new Feyskontrol();
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
    const answers = getElement('.game-task', gameContainer);
    answers.addEventListener('click', (event) => this.checkAnswer(event));
  }

  checkAnswer(event: MouseEvent): void {
    if (this.game.gameState !== GameState.Play) return;
    let { target } = event;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('game-gray-button')) {
      target = target.closest('.game-gray-button');
      if (!(target instanceof HTMLElement)) return;
    }
    const result = this.game.checkAnswer(target.dataset.answer ?? '');
    target.classList.add((result) ? 'right-answer' : 'wrong-answer');
    setTimeout(() => this.updateState(), 200);
  }

  async updateState(): Promise<void> {
    if (this.game.gameState === GameState.Play) {
      const task = this.game.getTask();
      this.view.updateTask(task);
    }
  }
}
