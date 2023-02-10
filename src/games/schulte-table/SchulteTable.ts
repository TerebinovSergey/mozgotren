import { BaseGame } from '../BaseGame';

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
    const numbers = this.getRightShulteTable();
    this.table = numbers.map((val) => val);
    numbers.sort(() => Math.random() - 0.5);
    return numbers;
  }

  getRightShulteTable(): string[] {
    const numbers: string[] = [];
    for (let i = 1; i <= this.countAnswers; i += 1) {
      numbers.push(String(i));
    }
    return numbers;
  }

  checkAnswer(answer: string): boolean {
    if (this.table === undefined) throw Error('Empty table in Schulte table.');
    const result = this.table[this.currentIndex] === answer;
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
