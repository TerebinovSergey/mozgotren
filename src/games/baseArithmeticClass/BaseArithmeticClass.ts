import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

export type ArithmeticTask = {
  task: string,
  answers: number[],
};

export type Range = {
  min: number,
  max: number,
};

type Operation = '+' | '-' | '×' | '÷';

export class BaseArithmeticClass extends BaseGame {
  readonly operation: Operation;
  readonly digitСapacity: number;
  currentAnswer: number = 0;
  readonly countAnswers = 4;
  readonly stepAnswers: number;
  constructor(operation: Operation, id: number, stepAnswers: number = 10) {
    const gameId = id;
    super(gameId);
    this.operation = operation;
    this.digitСapacity = 2;
    this.stepAnswers = stepAnswers;
  }

  getTask(): ArithmeticTask {
    return {
      task: this.getRandomTask(),
      answers: this.getRandomAnswers(),
    };
  }

  getRandomTask(): string {
    const numbers: number[] = [];
    while (numbers.length < this.digitСapacity) {
      const range = this.getRangeOperand(numbers.length + 1);
      const operand = randomInteger(range.min, range.max);
      numbers.push(operand);
    }
    this.currentAnswer = this.getCurrentAnswer(numbers);
    return numbers.join(` ${this.operation} `);
  }

  getRandomAnswers() {
    let arr: number[];
    if (this.currentLevel < 3) {
      const answers = new Set<number>();
      const range = this.getRangeAnswers();
      while (answers.size < this.countAnswers - 1) {
        const randomAnswer = randomInteger(range.min, range.max);
        if (randomAnswer !== this.currentAnswer) answers.add(randomAnswer);
      }
      arr = Array.from(answers);
      arr = this.filterAnswers(arr, range);
    } else {
      arr = this.getRandomAnswersByStep();
    }
    return this.addRightAnswer(arr);
  }

  getRandomAnswersByStep(): number[] {
    const answers = new Set<number>();
    const range = this.getRangeAnswers();
    let arr: number[];
    let start = this.currentAnswer - 4 * this.stepAnswers;
    for (start; start < this.currentAnswer + 4 * this.stepAnswers; start += this.stepAnswers) {
      if (start !== this.currentAnswer) answers.add(start);
    }
    arr = Array.from(answers);
    arr = this.filterAnswers(arr, range);
    while (arr.length > 3) {
      const indexDel = randomInteger(0, arr.length - 1);
      arr.splice(indexDel, 1);
    }
    return arr;
  }

  addRightAnswer(arr: number[]) {
    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
    return arr;
  }

  filterAnswers(arr: number[], range: Range) {
    return arr.filter((num) => num >= range.min && num <= range.max);
  }

  checkAnswer(answer: number): boolean {
    const rightAnswer = this.currentAnswer === answer;
    this.updateScore(rightAnswer);
    this.updateLevel(rightAnswer);
    return rightAnswer;
  }

  getCurrentAnswer(numbers: number[]) {
    return numbers.reduce((acc, num, i) => {
      if (i === 0) return num;
      let result: number;
      // eslint-disable-next-line default-case
      switch (this.operation) {
        case '+':
          result = acc + num;
          break;
        case '-':
          result = acc - num;
          break;
        case '×':
          result = acc * num;
          break;
        case '÷':
          result = acc / num;
          break;
      }
      return result;
    }, 0);
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
      case 8:
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
      case 8:
        return { min: 200, max: 1998 };
      default:
        return { min: 0, max: 0 };
    }
  }
}
