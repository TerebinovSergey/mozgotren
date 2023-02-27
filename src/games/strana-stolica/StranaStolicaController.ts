import { StranaStolica } from './StranaStolica';
import StranaStolicaView from './StranaStolicaView';
import { GameNames, GameState } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class StranaStolicaController extends BaseArithmeticController {
  game: StranaStolica;
  view: StranaStolicaView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new StranaStolicaView(nameGame);
    this.game = new StranaStolica(7);
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
