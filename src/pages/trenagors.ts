import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, getDataGame } from '../utils/utils';
import renderRulesDescription from './description';
import { popupVisibility } from '../components/popup-header/popupHeader';
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
    popupVisibility();
    TrenagorsPage.buttonDescription();
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
    <div class="body-background-shaddow"></div>
    <div class="container">
      <div class="trenagors-title-wrapper">
        <h2 class="trenagors-title">Тренажеры для ума</h2>
        <div
          class="trenagors-title-underline_blue"
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
        <img onclick="document.location.href = '/trenagor#${data.nameGame}';" class="card__img" alt="logo" src="${data.logoImg}">
        <div class="card__img1">
          <div class="console"></div>
          <div class="blog"></div>
        </div>
      </div>
      <div class="card__difficult_block">
        <div class="cubes"></div>
        <p class="card__difficult">Сложность: ${data.basicComplexity}</p>
      </div>
      <h2 onclick="document.location.href = '/trenagor#${data.nameGame}';" class="card__title">${data.nameGameRu}</h2>
      <p class="card__check">${data.check1}, ${data.check2}, ${data.check3}</p>
      <div class="wrapper_butt">
        <button onclick="document.location.href = '/trenagor#${data.nameGame}';" class="button_trane">Тренироваться</button>
        <button class="button_details" data-game-id="${data.id}">Описание</button>
      </div>
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

  static buttonDescription(): void {
    const buttonDesc = document.querySelectorAll('.button_details');
    console.log(buttonDesc);
    for (let i = 0; i < buttonDesc.length; i += 1) {
      const element = buttonDesc[i];
      if (!(element instanceof HTMLElement)) return;
      element.addEventListener('click', () => {
        const gameId = Number(element.dataset.gameId);
        const dataGame = getDataGame(gameId);
        console.log(dataGame, gameId);
        renderRulesDescription(dataGame);
      });
    }
  }
}
