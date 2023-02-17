import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, getDataGame, getUserIdFromCookie } from '../utils/utils';
import renderRulesDescription from './description';
import { popupVisibility } from '../components/popup-header/popupHeader';
import { SessionData, DataGames, DataGame } from '../types/types';
import Ratings from '../components/ratings/ratings';
// eslint-disable-next-line global-require
const json = require('../data/games.json') as DataGames;

/* async function getGameRatings() {
  const rat = new Ratings();
  rat.read();
} */

export default class RatingPage {
  ratings: Ratings | undefined;

  draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    this.drawMain();
    const footer = new FooterView();
    footer.draw();
    this.renderGames(-1);
    this.addListenerGroupFilter();
    popupVisibility();
    this.buttonDescription();
    // getGameRatings();
  }

  drawMain() {
    const main = document.createElement('main');
    main.classList.add('rating-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  getMainHTML() {
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

  async renderGames(categoryId: number) {
    if (this.ratings === undefined) {
      this.ratings = new Ratings();
      await this.ratings.read();
    }
    const container = getElement('.rating-container');
    container.innerHTML = '';
    for (let i = 0; i < json.games.length; i += 1) {
      const game = json.games[i];
      if (categoryId === -1 || categoryId === game.categoryId) {
        // eslint-disable-next-line no-await-in-loop
        const gameCard = await this.createGameCard(game);
        container.append(gameCard);
      }
    }
  }

  async createGameCard(data: DataGame): Promise<HTMLDivElement> {
    type User = {
      score: number | string,
      userName: string,
    };
    const userId = getUserIdFromCookie()[0][1];
    const position = this.ratings?.getUserPositionByGame(data.id, userId);
    const userPosition = (position === 0 || position === undefined) ? '' : position;
    const gameRat = this.ratings?.bestGameResults?.get(data.id);
    const arr: User[] = [];
    console.log(gameRat);
    if (gameRat === undefined) {
      arr.push({ userName: '', score: '' });
      arr.push({ userName: '', score: '' });
      arr.push({ userName: '', score: '' });
    } else {
      arr.push({ userName: gameRat[0]?.userName ?? '', score: gameRat[0]?.score ?? '' });
      arr.push({ userName: gameRat[1]?.userName ?? '', score: gameRat[1]?.score ?? '' });
      arr.push({ userName: gameRat[2]?.userName ?? '', score: gameRat[2]?.score ?? '' });
    }
    const gameCard = document.createElement('div');
    gameCard.classList.add('rating-card');
    gameCard.setAttribute('data-game-id', String(data.id));
    gameCard.innerHTML = `
      <div class="card__rating_title">
        <div class="game-logo" style="background-image: url(${data.logoImg})"></div>
        <div class="block-col">
          <h2 onclick="document.location.href = '/rating#${data.nameGame}';" class="card__title_rating">${data.nameGameRu}</h2>
          <p>Ваше место в рейтинге: <span>${userPosition}</span></p>
        </div>
      </div>
      <table class="container__table">
        <tr class="container__table_row">
          <td class="container__table_col rating__number">1</td>
          <td class="container__table_col rating__name">${arr[0].userName}</td>
          <td class="container__table_col rating__score">${arr[0].score}</td>
          <td class="container__table_col rating__throphy_1"></td>
        </tr>
        <tr class="container__table_row">
          <td class="container__table_col rating__number">2</td>
          <td class="container__table_col rating__name">${arr[1].userName}</td>
          <td class="container__table_col rating__score">${arr[1].score}</td>
          <td class="container__table_col rating__throphy_2"></td>
        </tr>
        <tr class="container__table_row">
          <td class="container__table_col rating__number">3</td>
          <td class="container__table_col rating__name">${arr[2].userName}</td>
          <td class="container__table_col rating__score">${arr[2].score}</td>
          <td class="container__table_col rating__throphy_3"></td>
        </tr>
      </table>
      <div class="wrapper_butt_rating">
        <button class="button_rating_show" data-game-id="${data.id}">Показать еще</button>
        <button onclick="document.location.href = '/trenagor#${data.nameGame}';" class="button_rating">Играть</button>
      </div>
    `;
    return gameCard;
  }

  addListenerGroupFilter(): void {
    const filter = getElement('.categories-rating');
    filter.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const group = event.target.closest('.filter-item-rating');
      if (!(group instanceof HTMLElement)) return;
      const categoryId = Number(group.dataset.categoryId);
      this.renderGames(categoryId);
    });
  }

  buttonDescription(): void {
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
