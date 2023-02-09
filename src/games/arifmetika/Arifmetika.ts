import { BaseGame } from '../BaseGame';
import { ArithmeticTask, Range } from '../baseArithmeticClass/BaseArithmeticClass';
import { randomInteger } from '../../utils/utils';

type Operation = '+' | '-' | '×' | '÷';
type Operations = {
  [key in Operation]: (a: number, b: number) => number;
};

const operations: Operations = {
  '+': (a, b) => +a + +b,
  '-': (a, b) => a - b,
  '×': (a, b) => a * b,
  '÷': (a, b) => a / b,
};

export default class Arifmetika extends BaseGame {
  readonly digitСapacity: number;
  currentAnswer: number = 0;
  readonly countAnswers = 4;
  constructor() {
    super(5);
    this.digitСapacity = 3;
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
    const oretations = '+-×÷';
    let operandInd = randomInteger(0, 1);
    const operand1 = oretations.slice(operandInd, operandInd + 1) as Operation;
    operandInd = randomInteger(2, 3);
    const operand2 = oretations.slice(operandInd, operandInd + 1) as Operation;
    if (operand2 === '÷') {
      const result = numbers[1] * numbers[2];
      numbers.splice(1, 1, result);
    }
    const result = operations[operand2](numbers[1], numbers[2]);
    this.currentAnswer = operations[operand1](numbers[0], result);
    return `${numbers[0]} ${operand1} ${numbers[1]} ${operand2} ${numbers[2]}`;
  }

  getRandomAnswers() {
    let arr: number[];
    if (this.currentLevel < 3) {
      arr = this.getRandomAnswersByStep(4);
    } else {
      arr = this.getRandomAnswersByStep(10);
    }
    return this.addRightAnswer(arr);
  }

  getRandomAnswersByStep(stepAnswers: number): number[] {
    const answers = new Set<number>();
    let start = this.currentAnswer - 4 * stepAnswers;
    for (start; start < this.currentAnswer + 4 * stepAnswers; start += stepAnswers) {
      if (start !== this.currentAnswer) answers.add(start);
    }
    const arr = Array.from(answers);
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

  checkAnswer(answer: number): boolean {
    const result = this.currentAnswer === answer;
    this.updateScore(result);
    this.updateLevel(result);
    return result;
  }

  getRangeOperand(numberOperand: number): Range {
    if (numberOperand > 1) return { min: 1, max: 9 };
    switch (this.currentLevel) {
      case 1:
      case 2:
        return { min: 1, max: 9 };
      case 3:
      case 4:
      case 5:
        return { min: 10, max: 99 };
      default:
        return { min: 100, max: 999 };
    }
  }
}
