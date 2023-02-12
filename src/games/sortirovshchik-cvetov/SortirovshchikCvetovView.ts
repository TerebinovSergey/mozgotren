import SortirovshchikCifrView from '../sortirovshchik-cifr/SortirovshchikCifrView';

export default class SortirovshchikCvetocView extends SortirovshchikCifrView {
  createAnswerItem(answer: string): HTMLDivElement {
    const item = document.createElement('div');
    item.classList.add('game-sortirovka-answer');
    item.dataset.answer = answer;
    item.style.backgroundColor = answer;
    return item;
  }
}
