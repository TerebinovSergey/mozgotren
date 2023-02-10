import ShulteCvet from './ShulteCvet';
import { GameNames } from '../../types/types';
import SchulteTableController from '../schulte-table/SchulteTableController';

export default class ShulteCvetController extends SchulteTableController {
  game: ShulteCvet;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.game = new ShulteCvet(3);
  }
}
