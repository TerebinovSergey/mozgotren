import CifrovayaMaska from './CifrovayaMaska';
import BaseArithmeticView from '../baseArithmeticClass/BaseArithmeticView';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class CifrovayaMaskaController extends BaseArithmeticController {
  game: CifrovayaMaska;
  view: BaseArithmeticView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new BaseArithmeticView(nameGame);
    this.game = new CifrovayaMaska(2);
  }
}
