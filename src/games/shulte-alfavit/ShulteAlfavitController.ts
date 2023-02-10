import ShulteAlfavit from './ShulteAlfavit';
import { GameNames } from '../../types/types';
import SchulteTableController from '../schulte-table/SchulteTableController';

export default class ShulteAlfavitController extends SchulteTableController {
  game: ShulteAlfavit;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.game = new ShulteAlfavit(3);
  }
}
