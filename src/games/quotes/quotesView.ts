import { getElement } from '../../utils/utils';
import BaseArithmeticView from '../baseArithmeticClass/BaseArithmeticView';

export default class QuoteView extends BaseArithmeticView {
  updateAnswers(answers: string[]): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const answersElement = getElement('.game-answer-options', state);
    answersElement.innerHTML = '';
    answers.forEach((answer) => {
      const answerElem = document.createElement('button');
      answerElem.classList.add('btn-answer', 'btn-comparison');
      answerElem.textContent = String(answer);
      answerElem.setAttribute('data-answer', String(answer));
      answersElement.append(answerElem);
    });
  }
}
