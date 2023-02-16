import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, getDataGame, getAllGamesRating } from '../utils/utils';
import renderRulesDescription from './description';
import { popupVisibility } from '../components/popup-header/popupHeader';
import { SessionData, DataGames, DataGame } from '../types/types';
// eslint-disable-next-line global-require
const json = require('../data/games.json') as DataGames;

async function getGameRatings() {
  const rating = await getAllGamesRating();
  console.log(rating);
}

export default class RatingPage {
  static draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    RatingPage.drawMain();
    const footer = new FooterView();
    footer.draw();
    RatingPage.renderGames(-1);
    RatingPage.addListenerGroupFilter();
    popupVisibility();
    RatingPage.buttonDescription();
    getGameRatings();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('rating-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow"></div>
    <div class="body-background-shaddow-description"></div>
    <div class="container__rating_main">
      <div class="rating-title-wrapper">
        <section class="rating">      
          <aside class="rating-filter">
            <div class="categories-rating">
              <div class="filter-item-rating" data-category-id="-1">
                <div class="block"></div>
                <span class="filter-item__black">ВСЕ</span>
              </div>
            <div class="filter-item-rating" data-category-id="1">
               <div class="discette"></div>
              <span class="filter-item__black">Память</span>
            </div>
            <div class="filter-item-rating" data-category-id="2">
              <div class="loupe"></div>
              <span class="filter-item__black">Внимание</span>
            </div>
            <div class="filter-item-rating" data-category-id="3">
              <div class="trio"></div>
              <span class="filter-item__black">Мышление</span>
            </div>
            <div class="filter-item-rating" data-category-id="4">
              <div class="prof"></div>
              <span class="filter-item__black">Эрудиция</span>
            </div>
            <div class="filter-item-rating">
              <div class="king"></div>
              <span class="filter-item__black">Зал славы</span>
            </div>
          </div>
        </aside>
        <div class="rating-container"></div>
      </section>
    </div>`;
  }

  static renderGames(categoryId: number) {
    const container = getElement('.rating-container');
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
    gameCard.classList.add('rating-card');
    gameCard.setAttribute('data-game-id', String(data.id));
    gameCard.innerHTML = `
      <div class="card__rating_title">
        <div class="game-logo" style="background-image: url(${data.logoImg})"></div>
        <div class="block-col">
          <h2 onclick="document.location.href = '/rating#${data.nameGame}';" class="card__title_rating">${data.nameGameRu}</h2>
          <p>Ваше место в рейтинге: <span><u>Показать</u></span></p>
        </div>
      </div>
      <table class="container__table">
        <tr class="container__table_row">
          <td class="container__table_col rating__number">1</td>
          <td class="container__table_col rating__name">name1</td>
          <td class="container__table_col rating__score">score1</td>
        </tr>
        <tr class="container__table_row">
          <td class="container__table_col rating__number">2</td>
          <td class="container__table_col rating__name">name2</td>
          <td class="container__table_col rating__score">score2</td>
        </tr>
        <tr class="container__table_row">
          <td class="container__table_col rating__number">3</td>
          <td class="container__table_col rating__name">name3</td>
          <td class="container__table_col rating__score">score3</td>
        </tr>
      </table>
      <div class="wrapper_butt_rating">
        <button class="button_rating_show" data-game-id="${data.id}">Показать еще</button>
        <button onclick="document.location.href = '/trenagor#${data.nameGame}';" class="button_rating">Играть</button>
      </div>
    `;
    return gameCard;
  }

  static addListenerGroupFilter(): void {
    const filter = getElement('.categories-rating');
    filter.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const group = event.target.closest('.filter-item-rating');
      if (!(group instanceof HTMLElement)) return;
      const categoryId = Number(group.dataset.categoryId);
      this.renderGames(categoryId);
    });
  }

  static buttonDescription(): void {
    const buttonDesc = document.querySelectorAll('.button_details');
    for (let i = 0; i < buttonDesc.length; i += 1) {
      const element = buttonDesc[i];
      if (!(element instanceof HTMLElement)) return;
      element.addEventListener('click', () => {
        const gameId = Number(element.dataset.gameId);
        const dataGame = getDataGame(gameId);
        renderRulesDescription(dataGame);
      });
    }
  }
}
