import SortirovshchikCifrController from '../sortirovshchik-cifr/SortirovshchikCifrController';
import SortirovshchikCvetovView from './SortirovshchikCvetovView';
import SortirovshchikCvetov from './SortirovshchikCvetov';
// import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class SortirovshchikCvetovController extends SortirovshchikCifrController {
  game: SortirovshchikCvetov;
  view: SortirovshchikCvetovView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new SortirovshchikCvetovView(nameGame, 'цветов');
    this.game = new SortirovshchikCvetov(1);
  }

  additionalChecks(element: Element): void {
    const check = document.createElement('i');
    check.classList.add('fa', 'fa-check', 'fa-for-game-answer');
    check.setAttribute('aria-hidden', 'true');
    element.append(check);
  }
}
