import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';
import { Quotes } from '../../types/types';

// eslint-disable-next-line global-require
const quotesData = require('../../data/quotes.json') as Quotes;

export type ComparisonTask = {
  task: string,
  answers: string[],
};

export class QuoteAuther extends BaseGame {
  readonly countAnswers = 4;
  currentAnswer: string = '';
  taskStack: number[] = [];

  getTask(): ComparisonTask {
    return {
      task: this.getRandomTask(),
      answers: this.getRandomAnswers(),
    };
  }

  getRandomTask(): string {
    let quoteInd = -1;
    if (this.taskStack.length >= quotesData.quotes.length - 1) {
      this.taskStack = [];
    }
    do {
      quoteInd = randomInteger(0, quotesData.quotes.length - 1);
    }
    while (this.isTaskWas(quoteInd));
    this.taskStack.push(quoteInd);
    const quote = quotesData.quotes[quoteInd];
    this.currentAnswer = quote.author;
    return quote.text;
  }

  isTaskWas(countryIndex: number): boolean {
    if (this.taskStack.length === 0) return false;
    const findInd = this.taskStack.findIndex((el) => el === countryIndex);
    return findInd > 0;
  }

  getRandomAnswers(): string[] {
    const answers = new Set<string>();
    answers.add(this.currentAnswer);
    while (answers.size < this.countAnswers) {
      const quoteInd = randomInteger(0, quotesData.quotes.length - 1);
      const quote = quotesData.quotes[quoteInd];
      answers.add(quote.author);
    }
    answers.delete(this.currentAnswer);
    const arrAnswers = Array.from(answers);
    this.addRightAnswer(arrAnswers);
    return arrAnswers;
  }

  addRightAnswer(arr: string[]): void {
    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
  }

  checkAnswer(answer: string): boolean {
    const rightAnswer = this.currentAnswer === answer;
    this.updateScore(rightAnswer);
    this.updateLevel(rightAnswer);
    return rightAnswer;
  }
}
