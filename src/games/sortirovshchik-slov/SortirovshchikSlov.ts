import SortirovshchikCifr from '../sortirovshchik-cifr/SortirovshchikCifr';
import { randomInteger } from '../../utils/utils';
import { Words } from '../../types/types';

// eslint-disable-next-line global-require
const data = require('./data-words.json') as Words;

export default class SortirovshchikSlov extends SortirovshchikCifr {
  getRightAnswer(): string[] {
    const set = new Set<number>();
    while (set.size < this.countAnswers) {
      set.add(randomInteger(0, 49));
    }
    const arr = Array.from(set);
    return arr.map((ind) => data.words[ind]);
  }
}
