import { getElement } from '../../utils/utils';
import { GameNames } from '../../types/types';

export default class SlozhenieView {
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
    <div class="game-task"></div>
    <div class="game-answer-options"></div>`;
  }

  updateTask(task: string): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const taskElement = getElement('.game-task', state);
    taskElement.textContent = task;
  }

  updateAnswers(answers: number[]): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const answersElement = getElement('.game-answer-options', state);
    answersElement.innerHTML = '';
    answers.forEach((answer) => {
      const answerElem = document.createElement('button');
      answerElem.classList.add('btn-answer');
      answerElem.textContent = String(answer);
      answerElem.setAttribute('data-answer', String(answer));
      answersElement.append(answerElem);
    });
  }
}
