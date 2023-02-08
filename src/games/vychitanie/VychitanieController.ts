import Vychitanie from './Vychitanie';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class VychitanieController extends BaseArithmeticController {
  game: Vychitanie;

  constructor() {
    super(GameNames.Vychitanie);
    this.game = new Vychitanie();
  }
}
