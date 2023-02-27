import Delenie from './Delenie';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class DelenieController extends BaseArithmeticController {
  game: Delenie;

  constructor() {
    super(GameNames.Delenie);
    this.game = new Delenie();
  }
}
