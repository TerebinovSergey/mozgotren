import SchulteTable from '../schulte-table/SchulteTable';

export default class ShulteAlfavit extends SchulteTable {
  getRightShulteTable(): string[] {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабв';
    const numbers: string[] = [];
    for (let i = 0; i < this.countAnswers; i += 1) {
      numbers.push(alphabet.slice(i, i + 1));
    }
    return numbers;
  }
}
