import SortirovshchikCifr from './SortirovshchikCifr';
import SortirovshchikCifrView from './SortirovshchikCifrView';
import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';
import BaseGameController from '../BaseGameController';

export default class SortirovshchikCifrController extends BaseGameController {
  game: SortirovshchikCifr;
  view: SortirovshchikCifrView;

  constructor(nameGame: GameNames) {
    super();
    this.view = new SortirovshchikCifrView(nameGame);
    this.game = new SortirovshchikCifr(13);
  }

  start(): void {
    this.game.start();
    this.game.getTask();
    this.view.draw();
    this.renderRightAnswers();
    this.addListeners();
  }

  stop(): void {
    this.game.stop();
  }

  private addListeners(): void {
    const gameContainer = getElement(`.game-container-${this.game.nameGame}`);
    const stop = getElement('.button-close', gameContainer);
    stop.addEventListener('click', () => this.stop());
    this.addAnswerListeners();
  }

  private addAnswerListeners(): void {
    const gameContainer = getElement(`.game-container-${this.game.nameGame}`);
    const btn = getElement('.game-sortirovka__btn', gameContainer);
    btn.addEventListener('click', () => this.startCheckTask(btn));
  }

  private startCheckTask(bntStart: HTMLElement) {
    const start = bntStart.dataset.startGame === 'true';
    if (start) {
      this.renderMixAnswers();
    } else {
      this.checkAnswer();
      setTimeout(() => {
        this.game.getTask();
        this.renderRightAnswers();
      }, 300);
    }
    this.view.toggleInfo(!start);
  }

  private checkAnswer(): void {
    const answersList = getElement('.game-sortirovka-answers');
    const answerElements = answersList.querySelectorAll('.game-sortirovka-answer');
    const answers: string[] = [];
    for (let i = 0; i < answerElements.length; i += 1) {
      const element = answerElements[i];
      if (element instanceof HTMLElement) {
        answers.push(element.dataset.answer ?? '');
      }
    }
    const result = this.game.checkAnswer(answers);
    for (let i = 0; i < answerElements.length; i += 1) {
      const element = answerElements[i];
      const rightAnswer = result[i];
      element.classList.add((rightAnswer) ? 'right-answer' : 'wrong-answer');
      this.additionalChecks(element);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  additionalChecks(element: Element): void {

  }

  private renderMixAnswers(): void {
    if (this.game.mixAnswers === undefined) return;
    this.view.rednerAnswers(this.game.mixAnswers);
    this.view.draggable(true);
  }

  private renderRightAnswers() {
    if (this.game.currenAnswer === undefined) return;
    this.view.rednerAnswers(this.game.currenAnswer);
  }
}
