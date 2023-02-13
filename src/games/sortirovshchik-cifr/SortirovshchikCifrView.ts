import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class SortirovshchikCifrView {
  nameGame: GameNames;
  objectSort: string;
  constructor(nameGame: GameNames, objectSort: string = 'чисел') {
    this.nameGame = nameGame;
    this.objectSort = objectSort;
  }

  draw(): void {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const gameElement = getElement(`.game-${this.nameGame}`, gameContainer);
    gameElement.innerHTML = this.getHTML();
    this.turnOnDragAndDrop();
  }

  getHTML(): string {
    return `<div class="game-task-sortirovka">
      <h4 class="game-sortirovka__title">Запомните порядок ${this.objectSort}</h4>
      <div class="game-sortirovka-answers">
      </div>
      <button class="btn-answer game-sortirovka__btn" data-start-game="true">ЗАПОМНИЛ</button>
    </div>`;
  }

  rednerAnswers(answers: string[]): void {
    const gameContainer = getElement(`.game-container-${this.nameGame}`);
    const answersList = getElement('.game-sortirovka-answers', gameContainer);
    answersList.innerHTML = '';
    answers.forEach((answer) => answersList.append(this.createAnswerItem(answer)));
  }

  createAnswerItem(answer: string): HTMLDivElement {
    const item = document.createElement('div');
    item.classList.add('game-sortirovka-answer');
    item.dataset.answer = answer;
    const itemTitle = document.createElement('span');
    itemTitle.classList.add('sortirovka-answer__value');
    // item.setAttribute('draggable', 'true');
    itemTitle.textContent = answer;
    item.append(itemTitle);
    return item;
  }

  toggleInfo(start: boolean): void {
    const title = getElement('.game-sortirovka__title');
    const btn = getElement('.game-sortirovka__btn');
    btn.dataset.startGame = (start) ? 'true' : 'false';
    title.textContent = (start) ? `Запомните порядок ${this.objectSort}` : `Восстановите порядок ${this.objectSort}`;
    btn.textContent = (start) ? 'ЗАПОМНИЛ' : 'ПРОВЕРИТЬ';
  }

  draggable(turnOn: boolean): void {
    const answersList = getElement('.game-sortirovka-answers');
    const answerElements = answersList.querySelectorAll('.game-sortirovka-answer');
    for (let i = 0; i < answerElements.length; i += 1) {
      const element = answerElements[i];
      if (element instanceof HTMLElement) {
        element.draggable = turnOn;
      }
    }
  }

  turnOnDragAndDrop(): void {
    const answersList = getElement('.game-sortirovka-answers');
    this.draggable(true);

    answersList.addEventListener('dragstart', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      event.target.classList.add('answer-selected');
    });

    answersList.addEventListener('dragend', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      event.target.classList.remove('answer-selected');
    });

    answersList.addEventListener('dragover', (evt) => {
      evt.preventDefault();

      const activeElement = getElement('.answer-selected');
      const currentElement = evt.target;
      if (!(currentElement instanceof HTMLElement)) return;
      const isMoveable = activeElement !== currentElement
        && currentElement.classList.contains('game-sortirovka-answer');

      if (!isMoveable) {
        return;
      }

      const nextElement = (currentElement === activeElement.nextElementSibling)
        ? currentElement.nextElementSibling
        : currentElement;
      answersList.insertBefore(activeElement, nextElement);
    });
  }
}
