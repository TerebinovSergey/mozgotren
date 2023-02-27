import Umnozhenie from './Umnozhenie';
import { GameNames } from '../../types/types';
import BaseArithmeticController from '../baseArithmeticClass/BaseArithmeticController';

export default class UmnozhenieController extends BaseArithmeticController {
  game: Umnozhenie;

  constructor() {
    super(GameNames.Umnozhenie);
    this.game = new Umnozhenie();
  }
}
