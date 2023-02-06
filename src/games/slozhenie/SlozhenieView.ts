import { getElement } from '../../utils/utils';

export default class SlozhenieView {
  draw(): void {
    const state = getElement('.game-container-slozhenie');
    const gameElement = getElement('.game-slozhenie', state);
    gameElement.innerHTML = this.getHTML();
  }

  getHTML(): string {
    return `
    <div class="game-task"></div>
    <div class="game-answer-options"></div>`;
  }

  updateTask(task: string): void {
    const state = getElement('.game-container-slozhenie');
    const taskElement = getElement('.game-task', state);
    taskElement.textContent = task;
  }

  updateAnswers(answers: number[]): void {
    const state = getElement('.game-container-slozhenie');
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
