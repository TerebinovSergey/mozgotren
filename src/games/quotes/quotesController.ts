import { QuoteAuther } from './quotes';
import QuoteView from './quotesView';
import { GameNames, GameState } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class QuotesController extends BaseArithmeticController {
  game: QuoteAuther;
  view: QuoteView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new QuoteView(nameGame);
    this.game = new QuoteAuther(21);
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
