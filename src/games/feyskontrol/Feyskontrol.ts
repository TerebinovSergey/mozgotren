import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

export default class FeyskontrolView extends BaseGame {
  readonly currentAnswer: number = 1;
  private countAnswers = 0;
  constructor() {
    super(16);
  }

  getTask(): number[] {
    this.countAnswers = this.currentLevel + 4;
    const arr: number[] = new Array(this.countAnswers - 1).fill(0);
    console.log(arr);
    this.addRightAnswer(arr);
    return arr;
  }

  addRightAnswer(arr: number[]) {
    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
    return arr;
  }

  checkAnswer(answer: string): boolean {
    const rightAnswer = String(this.currentAnswer) === answer;
    this.updateScore(rightAnswer);
    this.updateLevel(rightAnswer);
    return rightAnswer;
  }
}
