import StranaValyta from './StranaValyta';
import StranaStolicaView from '../strana-stolica/StranaStolicaView';
import { GameNames } from '../../types/types';
import StranaStolicaController from '../strana-stolica/StranaStolicaController';

export default class StranaValytaController extends StranaStolicaController {
  game: StranaValyta;
  view: StranaStolicaView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new StranaStolicaView(nameGame);
    this.game = new StranaValyta(8);
  }
}
