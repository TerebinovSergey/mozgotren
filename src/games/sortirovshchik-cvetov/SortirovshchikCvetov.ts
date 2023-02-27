import SortirovshchikCifr from '../sortirovshchik-cifr/SortirovshchikCifr';
import { getRandomColor } from '../../utils/utils';

export default class SortirovshchikCvetov extends SortirovshchikCifr {
  getRightAnswer(): string[] {
    const set = new Set<string>();
    while (set.size < this.countAnswers) {
      set.add(getRandomColor());
    }
    return Array.from(set);
  }
}
