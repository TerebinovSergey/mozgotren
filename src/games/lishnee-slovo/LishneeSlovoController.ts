import LishneeSlovo from './LishneeSlovo';
import LishneeChisloView from '../lishnee-chislo/LishneeChisloView';
import { GameNames } from '../../types/types';
import LishneeChisloController from '../lishnee-chislo/LishneeChisloController';

export default class LishneeSlovoController extends LishneeChisloController {
  game: LishneeSlovo;
  view: LishneeChisloView;

  constructor(nameGame: GameNames) {
    super(nameGame);
    this.view = new LishneeChisloView(nameGame);
    this.game = new LishneeSlovo();
  }
}
