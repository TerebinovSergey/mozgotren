import { BaseArithmeticClass, Range } from '../baseArithmeticClass/BaseArithmeticClass';
import { randomInteger } from '../../utils/utils';

export default class Delenie extends BaseArithmeticClass {
  constructor() {
    super('÷', 11, 5);
  }

  getRandomTask(): string {
    const numbers: number[] = [];
    while (numbers.length < this.digitСapacity) {
      const range = this.getRangeOperand();
      const operand = randomInteger(range.min, range.max);
      numbers.push(operand);
    }
    [this.currentAnswer] = numbers;
    const multiplication = numbers.reduce((acc, val) => {
      const result = acc * val;
      return result;
    }, 1);
    numbers.splice(0, 1, multiplication);
    return numbers.join(` ${this.operation} `);
  }

  getRandomAnswers() {
    const arr = this.getRandomAnswersByStep();
    return this.addRightAnswer(arr);
  }

  getRangeAnswers(): Range {
    return { min: 1, max: 81 };
  }

  getRangeOperand(): Range {
    return { min: 2, max: 9 };
  }
}
