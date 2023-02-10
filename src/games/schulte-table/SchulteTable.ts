import { BaseGame } from '../BaseGame';
// import { randomInteger } from '../../utils/utils';

export default class SchulteTable extends BaseGame {
  table: string[] | undefined;
  currentIndex: number = -1;
  errorFreeLevel: boolean = true;
  countAnswers: number = 0;
  isNewTask: boolean = true;

  getTask(): string[] | null {
    if (!this.isNewTask) return null;
    this.isNewTask = false;
    this.currentIndex = 0;
    this.errorFreeLevel = true;
    this.countAnswers = (this.currentLevel + 2) ** 2;
    const numbers: number[] = [];
    for (let i = 1; i <= this.countAnswers; i += 1) {
      numbers.push(i);
    }
    this.table = numbers.map((val) => String(val));
    numbers.sort(() => Math.random() - 0.5);
    const numbersToString = numbers.map((val) => String(val));
    return numbersToString;
  }

  checkAnswer(answer: string): boolean {
    if (this.table === undefined) throw Error('Empty table in Schulte table.');
    const result = this.table[this.currentIndex] === answer;
    console.log(result);
    if (result) {
      if (this.isLevelComplete()) {
        if (this.errorFreeLevel) this.updateLevel(result);
        this.isNewTask = true;
      } else {
        this.currentIndex += 1;
      }
    } else {
      this.errorFreeLevel = false;
    }
    this.updateScore(result);
    return result;
  }

  getFindValue(): string {
    if (!this.table) return '';
    return this.table[this.currentIndex] ?? '';
  }

  private isLevelComplete(): boolean {
    return this.currentIndex === this.countAnswers - 1;
  }
}
