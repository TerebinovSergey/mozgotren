import { StranaStolica } from '../strana-stolica/StranaStolica';
import { randomInteger } from '../../utils/utils';
import { EnglishWords } from '../../types/types';

// eslint-disable-next-line global-require
const wordsData = require('../../data/englishWords.json') as EnglishWords;

export default class AngliyskiySlovar extends StranaStolica {
  getRandomTask(): string {
    let countryInd = -1;
    if (this.taskStack.length >= wordsData.words.length - 1) {
      this.taskStack = [];
    }
    do {
      countryInd = randomInteger(0, wordsData.words.length - 1);
    }
    while (this.isTaskWas(countryInd));

    this.taskStack.push(countryInd);
    const word = wordsData.words[countryInd];
    this.currentAnswer = word.ru;
    console.log(word.ru);
    return word.en;
  }

  getRandomAnswers(): string[] {
    const answers = new Set<string>();
    answers.add(this.currentAnswer);
    while (answers.size < this.countAnswers) {
      const countryInd = randomInteger(0, wordsData.words.length - 1);
      const word = wordsData.words[countryInd];
      answers.add(word.ru);
    }
    answers.delete(this.currentAnswer);
    const arrAnswers = Array.from(answers);
    this.addRightAnswer(arrAnswers);
    return arrAnswers;
  }
}
