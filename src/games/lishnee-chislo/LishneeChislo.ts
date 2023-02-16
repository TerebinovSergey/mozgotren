import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

export default class LishneeChislo extends BaseGame {
  currentAnswer: string = '1';
  countAnswers = 0;
  constructor(gameId: number = 17) {
    super(gameId);
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
    this.currentAnswer = String(randomInteger(10000, 99999));
  }

  getWrongAnswer() {
    return String(randomInteger(10000, 99999));
  }

  addRightAnswer(arr: string[]) {
    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
    return arr;
  }

  checkAnswer(answer: string): boolean {
    const rightAnswer = this.currentAnswer === answer;
    this.updateScore(rightAnswer);
    this.updateLevel(rightAnswer);
    return rightAnswer;
  }
}
