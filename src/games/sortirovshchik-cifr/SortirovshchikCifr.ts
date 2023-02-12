import { BaseGame } from '../BaseGame';
import { randomInteger, shuffle } from '../../utils/utils';

export default class SortirovshchikCifr extends BaseGame {
  currenAnswer: string[] | undefined;
  countAnswers: number = 0;
  mixAnswers: string[] | undefined;

  getTask(): void {
    this.countAnswers = (this.currentLevel + 2);
    this.currenAnswer = this.getRightAnswer();
    this.mixAnswers = this.currenAnswer.map((val) => val);
    shuffle(this.mixAnswers);
    console.log(this.currenAnswer, this.mixAnswers);
  }

  getRightAnswer(): string[] {
    const set = new Set<string>();
    while (set.size < this.countAnswers) {
      set.add(String(randomInteger(1, 9)));
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
