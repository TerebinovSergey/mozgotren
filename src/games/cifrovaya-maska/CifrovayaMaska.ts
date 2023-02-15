import { BaseGame } from '../BaseGame';
import { ArithmeticTask } from '../baseArithmeticClass/BaseArithmeticClass';
import { randomInteger } from '../../utils/utils';

export default class CifrovayaMaska extends BaseGame {
  private currentAnswer: number = 0;
  private countAnswers = 3;

  getTask(): ArithmeticTask {
    return {
      task: this.getRandomTask(),
      answers: this.getRandomAnswers(),
    };
  }

  getRandomTask(): string {
    this.currentAnswer = randomInteger(10000, 99999);
    const integer = String(this.currentAnswer);
    return `${integer.substring(0, 1)} * ${integer.substring(2, 3)} * ${integer.substring(4, 5)}`;
  }

  getRandomAnswers() {
    this.countAnswers = this.currentLevel + 2;
    const minRange = Math.floor(this.currentAnswer / 10000) * 10000;
    const maxRange = minRange + 9999;
    const lastRightDigit = this.currentAnswer.toString().substring(4, 5); // 01234
    const middleDigit = this.currentAnswer.toString().substring(2, 3);
    const setAnswers = new Set<number>();
    while (setAnswers.size < this.countAnswers - 1) {
      const randomAnswer = randomInteger(minRange, maxRange);
      const answerStr = randomAnswer.toString();
      if (answerStr.substring(4, 5) !== lastRightDigit
      || answerStr.substring(2, 3) !== middleDigit) {
        setAnswers.add(randomAnswer);
      }
    }
    const arr = Array.from(setAnswers);
    return this.addRightAnswer(arr);
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
