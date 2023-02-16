import LishneeChislo from '../lishnee-chislo/LishneeChislo';
import { randomInteger } from '../../utils/utils';
import { LishneeSlovoT } from '../../types/types';

// eslint-disable-next-line global-require
const data = require('../../data/lishnee-slovo.json') as LishneeSlovoT;

export default class LishneeSlovo extends LishneeChislo {
  private randomAsk: [number, number] = [-1, -1];
  constructor() {
    super(18);
  }

  getTask(): string[] {
    this.countAnswers = this.currentLevel + 10;
    this.setRightAnswer();
    let wrongAnswer = this.getWrongAnswer();
    do {
      wrongAnswer = this.getWrongAnswer();
    } while (this.currentAnswer === wrongAnswer);
    const arr: string[] = new Array(this.countAnswers - 1).fill(wrongAnswer);
    this.addRightAnswer(arr);
    return arr;
  }

  setRightAnswer() {
    this.randomAsk = [randomInteger(0, data.words.length - 1), randomInteger(0, 1)];
    this.currentAnswer = String(data.words[this.randomAsk[0]][this.randomAsk[1]]);
  }

  getWrongAnswer() {
    const wrongInd = (this.randomAsk[1] === 0) ? 1 : 0;
    return String(data.words[this.randomAsk[0]][wrongInd]);
  }
}
