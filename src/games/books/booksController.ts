import { BookAuther } from './books';
import BooksView from './booksView';
import { GameNames, GameState } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class BooksController extends BaseArithmeticController {
  game: BookAuther;
  view: BooksView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new BooksView(nameGame);
    this.game = new BookAuther(20);
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
