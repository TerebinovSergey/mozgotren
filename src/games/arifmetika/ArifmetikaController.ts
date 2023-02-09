import Arifmetika from './Arifmetika';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class ArifmetikaController extends BaseArithmeticController {
  game: Arifmetika;

  constructor() {
    super(GameNames.Arifmetika);
    this.game = new Arifmetika();
  }
}
