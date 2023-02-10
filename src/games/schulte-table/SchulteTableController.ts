import SchulteTable from './SchulteTable';
import SchulteTableView from './SchulteTableView';
import { getElement } from '../../utils/utils';
import { GameState, GameNames } from '../../types/types';
import BaseGameController from '../BaseGameController';

export default class SchulteTableController extends BaseGameController {
  game: SchulteTable;
  view: SchulteTableView;

  constructor(nameGame: GameNames) {
    super();
    this.view = new SchulteTableView(nameGame);
    this.game = new SchulteTable(4);
  }

  start(): void {
    this.view.draw();
    this.game.start();
    this.game.isNewTask = true;
    this.view.updateTask(this.game.getTask());
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
    const answers = getElement('.game-table-wrapper', gameContainer);
    answers.addEventListener('click', (event) => this.checkAnswer(event));
  }

  private checkAnswer(event: MouseEvent): void {
    if (this.game.gameState !== GameState.Play) return;
    const answer = this.getAnswerElement(event);
    if (!answer) return;
    const result = this.game.checkAnswer(answer.dataset.answer ?? '');
    answer.classList.add((result) ? 'right-answer' : 'wrong-answer');
    if (!result) {
      setTimeout(() => {
        answer.classList.remove('wrong-answer');
      }, 1000);
    }
    this.view.updateTask(this.game.getTask());
    this.view.renderFindValue(this.game.getFindValue());
  }

  private getAnswerElement(event: MouseEvent): HTMLElement | null {
    const { target } = event;
    if (!(target instanceof HTMLElement)) return null;
    const answer = target.closest('.game-tab-shulte__answer');
    if (!(answer instanceof HTMLElement)) return null;
    return answer;
  }
}
