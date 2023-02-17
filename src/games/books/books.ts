import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';
import { Books } from '../../types/types';

// eslint-disable-next-line global-require
const booksData = require('../../data/books.json') as Books;

export type ComparisonTask = {
  task: string,
  answers: string[],
};

export class BookAuther extends BaseGame {
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
    let bookInd = -1;
    do {
      bookInd = randomInteger(0, booksData.books.length - 1);
    }
    while (this.isTaskWas(bookInd));

    this.taskStack.push(bookInd);
    const book = booksData.books[bookInd];
    this.currentAnswer = book.col1;
    return book.col2;
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
      const bookInd = randomInteger(0, booksData.books.length - 1);
      const book = booksData.books[bookInd];
      answers.add(book.col1);
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
