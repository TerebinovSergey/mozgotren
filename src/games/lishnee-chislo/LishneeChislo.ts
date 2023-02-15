import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

export default class LishneeChislo extends BaseGame {
  private currentAnswer: number = 0;
  private countAnswers = 0;
  constructor() {
    super(17);
  }

  getTask(): number[] {
    this.countAnswers = this.currentLevel + 10;
    this.currentAnswer = randomInteger(10000, 99999);
    let wrongAnswer = randomInteger(10000, 99999);
    do {
      wrongAnswer = randomInteger(10000, 99999);
    } while (this.currentAnswer === wrongAnswer);
    const arr: number[] = new Array(this.countAnswers - 1).fill(wrongAnswer);
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
