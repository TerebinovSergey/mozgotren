import Slozhenie from './Slozhenie';
import SlozhenieView from './SlozhenieView';
import { BaseGameParameters } from '../BaseGame';
import { getElement } from '../../utils/utils';
import { GameState } from '../../types/types';

export default class SlozhenieConroller {
  game: Slozhenie;
  view: SlozhenieView;
  timeoutState!: NodeJS.Timeout;

  constructor(parameters: BaseGameParameters) {
    this.view = new SlozhenieView();
    this.game = new Slozhenie(parameters);
  }

  draw(): void {
    this.view.draw();
    this.view.updateState({ ...this.game });
    this.addListeners();
  }

  stop(): void {
    this.game.stop();
    clearInterval(this.timeoutState);
    this.updateState();
    if ((this.game.rightAnswers + this.game.wrongAnswers) > 0) {
      //draw finish page
    } else {
      //draw start page
    }
  }

  private addListeners(): void {
    const gameContainer = getElement('.game-container-slozhenie');
    const start = getElement('.game-start', gameContainer);
    start.addEventListener('click', () => {
      this.game.start();
      this.updateState();
      this.addAnswerListeners();
      this.timeoutState = setInterval(() => this.view.updateState({ ...this.game }), 330);
    });

    const stop = getElement('.game-stop', gameContainer);
    stop.addEventListener('click', () => this.stop());
  }

  private addAnswerListeners(): void {
    const gameContainer = getElement('.game-container-slozhenie');
    const answers = getElement('.game-answer-options', gameContainer);
    answers.addEventListener('click', (event) => {
      if (this.game.gameState !== GameState.Play) return;
      const { target } = event;
      if (!(target instanceof HTMLButtonElement)) return;
      console.dir(target.dataset.answer);
      const result = this.game.checkAnswer(Number(target.dataset.answer));
      target.classList.add((result) ? 'rigth-answer' : 'wrong-answer');
      setTimeout(() => this.updateState(), 200);
    });
  }

  private async updateState(): Promise<void> {
    this.view.updateState({ ...this.game });
    console.log('time');
    if (this.game.gameState === GameState.Play) {
      const task = this.game.getTask();
      this.view.updateTask(task.task);
      this.view.updateAnswers(task.answers);
    } else {
      clearInterval(this.timeoutState);
    }
  }
}
