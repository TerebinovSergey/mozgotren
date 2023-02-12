import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';

export default class SortirovshchikCifr extends BaseGame {
  currenAnswer: string[] | undefined;
  countAnswers: number = 0;
  mixAnswers: string[] | undefined;

  getTask(): void {
    console.log(this.currentLevel);
    this.countAnswers = (this.currentLevel + 2);
    const rightAnswers = this.getRightAnswer();
    this.currenAnswer = rightAnswers.map((el) => String(el));
    const mixAnswers = rightAnswers.map((val) => val);
    mixAnswers.sort(() => Math.random() - 0.5);
    this.mixAnswers = mixAnswers.map((el) => String(el));
    console.log(this.currenAnswer, this.mixAnswers);
  }

  getRightAnswer(): number[] {
    const set = new Set<number>();
    while (set.size < this.countAnswers) {
      set.add(randomInteger(1, 9));
    }
    return Array.from(set);
  }

  checkAnswer(answer: string[]): boolean[] {
    if (this.currenAnswer === undefined) throw Error('Empty array for check answer in sortirovka game!');
    const check: boolean[] = [];
    let mistakes: boolean = false;
    for (let i = 0; i < this.currenAnswer.length; i += 1) {
      const rightAnswer = this.currenAnswer[i] === answer[i];
      check.push(rightAnswer);
      this.updateScore(rightAnswer);
      // this.updateAnswerCount(rightAnswer);
      if (!rightAnswer) mistakes = true;
    }
    console.log(this.rightAnswers, this.wrongAnswers);
    // this.updateScore(!mistakes);
    // if (!mistakes) this.updateScore(true);
    this.updateLevel(!mistakes);
    // this.updateScore(!mistakes);
    return check;
  }
}
