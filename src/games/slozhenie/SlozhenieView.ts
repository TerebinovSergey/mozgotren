import { getElement } from '../../utils/utils';

type UpdateStateParameters = {
  score: number,
  timeLeft: number,
  currentLevel: number,
  maxLevel: number,
};

export default class SlozhenieView {
  draw(): void {
    document.body.innerHTML = this.getHTML();
  }

  getHTML(): string {
    return `<div class="container">
      <div class="game-container game-container-slozhenie">
        <button class="game-start">start</button>
        <div class="game-state">
          <div class="game-score">
            Очки: <span class="game-score-title">0</span>
          </div>
          <div class="game-level">
            Уровень: <span class="game-level-title">1/7</span>
          </div>
          <div class="game-time">
            Время: <span class="game-time-title">0</span>
          </div>
        </div>
        <div class="game-info">
          <span>Решите пример</span><button class="game-stop">stop</button>
        </div>
        <div class="game-task"></div>
        <div class="game-answer-options"></div>
      </div>
    </div>`;
  }

  updateState(parameters: UpdateStateParameters): void {
    const state = getElement('.game-container-slozhenie');
    const timeElement = getElement('.game-time-title', state);
    timeElement.textContent = String(parameters.timeLeft);
    const scoreElement = getElement('.game-score-title', state);
    scoreElement.textContent = String(parameters.score);
    const levelElement = getElement('.game-level-title', state);
    levelElement.textContent = `${parameters.currentLevel}/${parameters.maxLevel}`;
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
