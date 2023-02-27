import Slozhenie from './Slozhenie';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class SlozhenieController extends BaseArithmeticController {
  game: Slozhenie;

  constructor() {
    super(GameNames.Slozhenie);
    this.game = new Slozhenie();
  }
}
