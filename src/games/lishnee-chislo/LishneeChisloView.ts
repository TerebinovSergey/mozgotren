import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class FeyskontrolView {
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
      <div class="game-task game-unnecessary-value"></div>
    </div>`;
  }

  updateTask(answers: number[]): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const taskElement = getElement('.game-task', state);
    taskElement.innerHTML = '';
    answers.forEach((answer) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('game-gray-button', 'game-gray-button__w120');
      const answerElem = document.createElement('span');
      answerElem.textContent = String(answer);
      wrapper.setAttribute('data-answer', String(answer));
      wrapper.append(answerElem);
      taskElement.append(wrapper);
    });
  }
}
