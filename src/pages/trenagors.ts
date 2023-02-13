import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';
import renderRulesDescription from './description';

import bodyArea from './bodyArea';
import { SessionData, DataGames, DataGame } from '../types/types';
// eslint-disable-next-line global-require
const json = require('../data/games.json') as DataGames;

export default class TrenagorsPage {
  static draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    TrenagorsPage.drawMain();
    const footer = new FooterView();
    footer.draw();
    TrenagorsPage.renderGames(-1);
    TrenagorsPage.addListenerGroupFilter();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('trenagors-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow" onclick="${bodyArea}"></div>
    <div class="container">
      <div class="trenagors-title-wrapper">
        <h2 class="trenagors-title">Тренажеры для ума</h2>
        <img
          class="trenagors-title-underline"
          src="./line-break-blue.svg"
          alt=""
        />
      </div>
      <section class="trenagors">
        <aside class="trenagors-filter">
          <div class="categories-trenagors filter">
            <span class="filter__title important-filter-content"
              >Категории тренажеров:</span
            >
            <div class="filter-item" data-category-id="1">
              <span class="filter-item__group-name">Тренировка памяти</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item" data-category-id="2">
              <span class="filter-item__group-name">Тренировка внимания</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">9</span>
              </div>
            </div>
            <div class="filter-item" data-category-id="3">
              <span class="filter-item__group-name">Тренировка мышления</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item" data-category-id="4">
              <span class="filter-item__group-name">Тренировка эрудиции</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item" data-category-id="-1">
              <span class="filter-item__group-name important-filter-content"
                >ВСЕ ТРЕНАЖЕРЫ</span
              >
              <div class="filter-item__count-img">
                <span class="filter-item__count">33</span>
              </div>
            </div>
          </div>
        </aside>
        <div class="trenagors-container">
<a href="/trenagor#slozhenie" class="game-page"><div class="game-wrapper">game slozhenie</div></a>
<a href="/trenagor#vychitanie" class="game-page"><div class="game-wrapper">game vychitanie</div></a>
<a href="/trenagor#umnozhenie" class="game-page"><div class="game-wrapper">game umnozhenie</div></a>
<a href="/trenagor#delenie" class="game-page"><div class="game-wrapper">game delenie</div></a>
<a href="/trenagor#arifmetika" class="game-page"><div class="game-wrapper">game arifmetika</div></a>
<a href="/trenagor#tablica-shulte" class="game-page"><div class="game-wrapper">game tablica-shulte</div></a>
<a href="/trenagor#shulte-alfavit" class="game-page"><div class="game-wrapper">game shulte-alfavit</div></a>
<a href="/trenagor#shulte-cvet" class="game-page"><div class="game-wrapper">game shulte-cvet</div></a>
<a href="/trenagor#sortirovshchik-cifr" class="game-page"><div class="game-wrapper">game sortirovshchik-cifr</div></a>
          
        </div>
      </section>
    </div>`;
  }

  static renderGames(categoryId: number) {
    const container = getElement('.trenagors-container');
    container.innerHTML = '';
    for (let i = 0; i < json.games.length; i += 1) {
      const game = json.games[i];
      if (categoryId === -1 || categoryId === game.categoryId) {
        container.append(this.createGameCard(game));
      }
    }
  }

  static createGameCard(data: DataGame): HTMLDivElement {
    const gameCard = document.createElement('div');
    gameCard.classList.add('trenagors-card-game', 'card-small');
    gameCard.setAttribute('data-game-id', String(data.id));
    gameCard.innerHTML = `
      <div class="card__img_block">
        <img onclick="document.location.href = '/trenagor#${data.nameGame}';" class="card__img" alt="Умножение" src="${data.logoImg}">
      </div>
      <p class="card__difficult">Сложность: ${data.basicComplexity}</p>
      <h2 onclick="document.location.href = '/trenagor#${data.nameGame}';" class="card__title">${data.nameGameRu}</h2>
      <p class="card__description">${data.check1}, ${data.check2}, ${data.check3}</p>
      <div class="wrapper_butt">
        <button onclick="document.location.href = '/trenagor#${data.nameGame}';" class="button button_trane">Тренироваться</button>
      </div>
     
      <button type="submit" class="button" onclick="${renderRulesDescription}">
        <span class="">Описание</span>
      </button>
    `;
    return gameCard;
  }

  static addListenerGroupFilter(): void {
    const filter = getElement('.categories-trenagors');
    filter.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const group = event.target.closest('.filter-item');
      if (!(group instanceof HTMLElement)) return;
      const categoryId = Number(group.dataset.categoryId);
      this.renderGames(categoryId);
    });
  }
}

