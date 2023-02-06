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
    answers.add(this.currentAnswer);
    const range = this.getRangeAnswers();
    while (answers.size < this.countAnswers) {
      answers.add(randomInteger(range.min, range.max));
    }
    answers.delete(this.currentAnswer);
    const arr = Array.from(answers);
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
        return {
          min: Math.max(11, this.currentAnswer - 20),
          max: Math.min(108, this.currentAnswer + 20),
        };
      case 4:
      case 5:
        return {
          min: Math.max(20, this.currentAnswer - 30),
          max: Math.min(198, this.currentAnswer + 30),
        };
      case 6:
        return {
          min: Math.max(110, this.currentAnswer - 50),
          max: Math.min(1098, this.currentAnswer + 50),
        };
      case 7:
        return {
          min: Math.max(200, this.currentAnswer - 100),
          max: Math.min(1998, this.currentAnswer + 100),
        };
      default:
        return { min: 0, max: 0 };
    }
  }
}
