import SchulteTable from '../schulte-table/SchulteTable';
import { getRandomColor } from '../../utils/utils';

export default class ShulteCvet extends SchulteTable {
  getRightShulteTable(): string[] {
    const numbers: string[] = [];
    for (let i = 0; i < this.countAnswers; i += 1) {
      numbers.push(getRandomColor());
    }
    return numbers;
  }
}
