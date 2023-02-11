import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class SchulteTableView {
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
      <div class="game-task-tablica-shulte">
        <h4 class="tablica-shulte__title">Найдите <span class="game-tab-shulte_current-answer">1</span></h4>
        <div class="game-table-wrapper">
        </div>
      </div>`;
  }

  updateTask(data: string[] | null): void {
    if (!data) return;
    const state = getElement(`.game-container-${this.nameGame}`);
    const table = getElement('.game-table-wrapper', state);
    table.innerHTML = '';
    const sizeItem = Math.max(Math.floor(100 / Math.sqrt(data.length)) - 3, 15);
    for (let i = 0; i < data.length; i += 1) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('game-table-wrapper');
      const answer = document.createElement('div');
      answer.classList.add('game-tab-shulte__answer');
      answer.dataset.answer = data[i];
      answer.style.flexBasis = `${sizeItem}%`;
      answer.style.height = `${sizeItem}%`;
      const answerTitle = document.createElement('span');
      answerTitle.textContent = data[i];
      answer.append(answerTitle);
      table.append(answer);
    }
  }

  renderFindValue(value: string) {
    const state = getElement(`.game-container-${this.nameGame}`);
    const findItem = getElement('.game-tab-shulte_current-answer', state);
    findItem.textContent = value;
  }
}
