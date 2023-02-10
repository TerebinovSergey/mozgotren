import { getElement } from '../../utils/utils';
// import { GameNames } from '../../types/types';
import SchulteTableView from '../schulte-table/SchulteTableView';

export default class ShulteCvet extends SchulteTableView {
  getHTML(): string {
    return `
      <div class="game-task-tablica-shulte">
        <h4 class="tablica-shulte__title">Найдите <div class="game-tab-shulte_color-answer"></div></h4>
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
      answer.style.backgroundColor = data[i];
      const check = document.createElement('i');
      check.classList.add('fa', 'fa-check', 'fa-for-game-answer');
      check.setAttribute('aria-hidden', 'true');
      answer.append(check);
      table.append(answer);
    }
  }

  // <i class="fa fa-check" aria-hidden="true"></i>

  renderFindValue(value: string) {
    const state = getElement(`.game-container-${this.nameGame}`);
    const findItem = getElement('.game-tab-shulte_color-answer', state);
    findItem.style.backgroundColor = value;
  }
}
