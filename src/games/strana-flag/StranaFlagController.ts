import { StranaFlag } from './StranaFlag';
import StranaFlagView from './StranaFlagView';
import { GameNames, GameState } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class StranaFlagController extends BaseArithmeticController {
  game: StranaFlag;
  view: StranaFlagView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new StranaFlagView(nameGame);
    this.game = new StranaFlag(19);
  }

  checkAnswer(event: MouseEvent): void {
    if (this.game.gameState !== GameState.Play) return;
    const { target } = event;
    if (!(target instanceof HTMLButtonElement)) return;
    const result = this.game.checkAnswer(String(target.dataset.answer));
    target.classList.add((result) ? 'right-answer' : 'wrong-answer');
    setTimeout(() => this.updateState(), 200);
  }

  stop(): void {
    this.game.stop();
    this.game.taskStack = [];
  }
}
