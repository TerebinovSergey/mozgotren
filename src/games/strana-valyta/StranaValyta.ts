import { StranaStolica } from '../strana-stolica/StranaStolica';
import { randomInteger } from '../../utils/utils';
import { Currencies } from '../../types/types';

// eslint-disable-next-line global-require
const currenciesData = require('../../data/currencies.json') as Currencies;

export default class StranaValyta extends StranaStolica {
  getRandomTask(): string {
    let countryInd = -1;
    do {
      countryInd = randomInteger(0, currenciesData.currencies.length - 1);
    }
    while (this.isTaskWas(countryInd));

    this.taskStack.push(countryInd);
    const contry = currenciesData.currencies[countryInd];
    this.currentAnswer = contry.currency;
    console.log(contry.currency);
    return contry.country;
  }

  getRandomAnswers(): string[] {
    const answers = new Set<string>();
    answers.add(this.currentAnswer);
    while (answers.size < this.countAnswers) {
      const countryInd = randomInteger(0, currenciesData.currencies.length - 1);
      const currency = currenciesData.currencies[countryInd];
      answers.add(currency.currency);
    }
    answers.delete(this.currentAnswer);
    const arrAnswers = Array.from(answers);
    this.addRightAnswer(arrAnswers);
    return arrAnswers;
  }
}
