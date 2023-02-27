import { BaseArithmeticClass, Range } from '../baseArithmeticClass/BaseArithmeticClass';

export default class Umnozhenie extends BaseArithmeticClass {
  constructor() {
    super('×', 10, 5);
  }

  getRandomAnswers() {
    const arr = this.getRandomAnswersByStep();
    return this.addRightAnswer(arr);
  }

  getRangeAnswers(): Range {
    return { min: 4, max: 81 };
  }

  getRangeOperand(): Range {
    return { min: 2, max: 9 };
  }
}
