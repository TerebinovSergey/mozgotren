import SortirovshchikCifrController from '../sortirovshchik-cifr/SortirovshchikCifrController';
import SortirovshchikCifrView from '../sortirovshchik-cifr/SortirovshchikCifrView';
import SortirovshchikSlov from './SortirovshchikSlov';
import { GameNames } from '../../types/types';

export default class SortirovshchikSlovController extends SortirovshchikCifrController {
  game: SortirovshchikSlov;
  view: SortirovshchikCifrView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new SortirovshchikCifrView(nameGame, 'слов');
    this.game = new SortirovshchikSlov(14);
  }
}
