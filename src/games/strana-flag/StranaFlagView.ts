import { getElement } from '../../utils/utils';
import BaseArithmeticView from '../baseArithmeticClass/BaseArithmeticView';

export default class StranaFlagView extends BaseArithmeticView {
  updateAnswers(answers: string[]): void {
    const state = getElement(`.game-container-${this.nameGame}`);
    const answersElement = getElement('.game-answer-options', state);
    answersElement.innerHTML = '';
    answers.forEach((answer) => {
      const answerElem = document.createElement('button');
      const answerImgElem = document.createElement('img');
      answerImgElem.classList.add('flag-button-img');
      answerImgElem.src = String(answer);
      answerImgElem.alt = 'flag';
      answerElem.append(answerImgElem);
      answerElem.classList.add('btn-answer', 'btn-comparison', 'flag-button');
      answerElem.setAttribute('data-answer', String(answer));
      answersElement.append(answerElem);
    });
  }
}
