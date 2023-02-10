import SchulteTable from '../schulte-table/SchulteTable';
import { randomInteger } from '../../utils/utils';

export default class ShulteCvet extends SchulteTable {
  getRightShulteTable(): string[] {
    const numbers: string[] = [];
    for (let i = 0; i < this.countAnswers; i += 1) {
      numbers.push(this.getRandomColor());
    }
    return numbers;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i += 1) {
      color += letters[randomInteger(0, 15)];
    }
    return `#${color}`;
  }
}
