import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class BaseArithmeticView {
  nameGame: GameNames;
  constructor(nameGame: GameNames) {
    this.nameGame = nameGame;
  }

  draw(): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const gameElement = getElement(`.game-${this.nameGame}`, state);
    gameElement.innerHTML = this.getHTML();
  }

  getHTML(): string {
    return `
    <div class="base-game-wrapper">
      <div class="game-task game-feyskontrol"></div>
    </div>`;
  }

  updateTask(answers: number[]): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const taskElement = getElement('.game-task', state);
    taskElement.innerHTML = '';
    answers.forEach((answer) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('game-feyskontro__btn');
      const answerElem = document.createElement('i');
      answerElem.classList.add('fa');
      if (answer === 1) {
        answerElem.classList.add('fa-frown-o');
      } else {
        answerElem.classList.add('fa-smile-o');
      }
      answerElem.ariaHidden = 'true';
      wrapper.setAttribute('data-answer', String(answer));
      wrapper.append(answerElem);
      taskElement.append(wrapper);
    });
  }
}
