import LishneeChislo from './LishneeChislo';
import LishneeChisloView from './LishneeChisloView';
import { GameState, GameNames } from '../../types/types';
import FeyskontrolController from '../feyskontrol/FeyskontrolController';

export default class LishneeChisloController extends FeyskontrolController {
  game: LishneeChislo;
  view: LishneeChisloView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new LishneeChisloView(nameGame);
    this.game = new LishneeChislo();
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
}
