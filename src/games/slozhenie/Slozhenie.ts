import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

type ArithmeticTask = {
  task: string,
  answers: number[],
};

type Range = {
  min: number,
  max: number,
};

export default class Slozhenie extends BaseGame {
  constructor() {
    super(6);
  }
  currentAnswer: number = 0;
  countAnswers = 4;

  getTask(): ArithmeticTask {
    return {
      task: this.getRandomTask(),
      answers: this.getRandomAnswers(),
    };
  }

  private getRandomTask(): string {
    let range = this.getRangeOperand(1);
    const operand1 = randomInteger(range.min, range.max);
    range = this.getRangeOperand(2);
    const operand2 = randomInteger(range.min, range.max);
    this.currentAnswer = operand1 + operand2;
    return `${operand1} + ${operand2}`;
  }

  private getRandomAnswers() {
    const answers = new Set<number>();
    const range = this.getRangeAnswers();
    let arr: number[];
    if (this.currentLevel < 3) {
      while (answers.size < this.countAnswers - 1) {
        answers.add(randomInteger(range.min, range.max));
      }
      arr = Array.from(answers);
    } else {
      const step = 10;
      let start = this.currentAnswer - 4 * step;
      for (start; start < this.currentAnswer + 4 * step; start += step) {
        if (start !== this.currentAnswer) answers.add(start);
      }
      arr = Array.from(answers);
      arr = arr.filter((num) => num >= range.min && num <= range.max);
      while (arr.length > 3) {
        const indexDel = randomInteger(0, arr.length - 1);
        arr.splice(indexDel, 1);
      }
    }

    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
    return arr;
  }

  checkAnswer(answer: number): boolean {
    const result = this.currentAnswer === answer;
    this.updateScore(result);
    this.updateLevel(result);
    return result;
  }

  getRangeOperand(numberOperand: number): Range {
    switch (this.currentLevel) {
      case 1:
      case 2:
        return { min: 1, max: 9 };
      case 3:
        if (numberOperand === 1) {
          return { min: 1, max: 9 };
        }
        return { min: 10, max: 99 };
      case 4:
      case 5:
        return { min: 10, max: 99 };
      case 6:
        if (numberOperand === 1) {
          return { min: 10, max: 99 };
        }
        return { min: 100, max: 999 };
      case 7:
        return { min: 100, max: 999 };
      default:
        return { min: 0, max: 0 };
    }
  }

  getRangeAnswers(): Range {
    switch (this.currentLevel) {
      case 1:
      case 2:
        return { min: 1, max: 18 };
      case 3:
        return { min: 11, max: 108 };
      case 4:
      case 5:
        return { min: 20, max: 198 };
      case 6:
        return { min: 110, max: 1098 };
      case 7:
        return { min: 200, max: 1998 };
      default:
        return { min: 0, max: 0 };
    }
  }
}
