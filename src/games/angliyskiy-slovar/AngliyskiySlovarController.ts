import AngliyskiySlovar from './AngliyskiySlovar';
import StranaStolicaView from '../strana-stolica/StranaStolicaView';
import { GameNames } from '../../types/types';
import StranaStolicaController from '../strana-stolica/StranaStolicaController';

export default class AngliyskiySlovarController extends StranaStolicaController {
  game: AngliyskiySlovar;
  view: StranaStolicaView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new StranaStolicaView(nameGame);
    this.game = new AngliyskiySlovar(15);
  }
}
