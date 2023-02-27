import { BaseArithmeticClass } from '../baseArithmeticClass/BaseArithmeticClass';

export default class Vychitanie extends BaseArithmeticClass {
  constructor() {
    super('-', 9);
  }

  filterAnswers(arr: number[]) {
    return arr;
  }
}
