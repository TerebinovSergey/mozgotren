import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getDataGame, getElement, getUserIdFromCookie } from '../utils/utils';
import popupVisibility from '../components/popup-header/popupHeader';
import { SessionData, DataGames, DataGame } from '../types/types';
import Ratings from '../components/ratings/ratings';
// eslint-disable-next-line global-require
const json = require('../data/games.json') as DataGames;

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) - (hours * 60);
  const sec = seconds % 60;
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    sec.toString().padStart(2, '0'),
  ].join(' : ');
}

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
  }

  drawMain() {
    const main = document.createElement('main');
    main.classList.add('rating-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
    this.addListenerPopupControll();
  }

  getMainHTML() {
    return `
    <div class="body-background-shaddow"></div>
    <div class="body-background-shaddow-description"></div>
    <div class="popap hidden_popap ratings-popup">
      <div class="close"></div>
      <div class="container__description ratings-popup-container">
      </div>
    </div>
    <div class="container__rating_main">
      <div class="rating-title-wrapper">
        <section class="rating">
          <aside class="rating-filter">
            <div class="container">
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
              <div class="filter-item-rating" data-category-id="fame">
                <div class="king"></div>
                <span class="filter-item__black">Зал славы</span>
              </div>
            </div>
          </aside>
          <div class="rating-container rating-flex"></div>
        </section>
      </div>
    </div>`;
  }

  async renderGames(categoryId: number) {
    if (this.ratings === undefined) {
      this.ratings = new Ratings();
      await this.ratings.read();
    }
    const container = getElement('.rating-container');
    container.innerHTML = '';
    const userInfo = getUserIdFromCookie();
    const userId = (userInfo.length > 0) ? userInfo[0][1] : '';
    const gamesPlayed = this.ratings.getUserGamesPlayed(userId);
    json.games.forEach((val) => gamesPlayed.add(val.id));
    const games = Array.from(gamesPlayed);
    for (let i = 0; i < games.length; i += 1) {
      const game = getDataGame(games[i]);
      if (categoryId === -1 || categoryId === game.categoryId) {
        // eslint-disable-next-line no-await-in-loop
        const gameCard = await this.createGameCard(game, userId);
        container.append(gameCard);
      }
    }
    await this.addListenerShowGameRatings();
  }

  async createGameCard(data: DataGame, userId: string): Promise<HTMLDivElement> {
    type User = {
      score: number | string,
      userName: string,
    };
    const position = this.ratings?.getUserPositionByGame(data.id, userId);
    const userPosition = (position === 0 || position === undefined) ? '' : position;
    const gameRat = this.ratings?.bestGameResults?.get(data.id);
    const arr: User[] = [];
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
          <h2 class="card__title_rating">${data.nameGameRu}</h2>
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

  private async renderHallOfFame() {
    const container = getElement('.rating-container');
    const totalUserResults = this.ratings?.totalUserResults;
    let tableRow = '';
    if (totalUserResults) {
      let i = 1;
      totalUserResults.forEach((rating) => {
        tableRow += `
          <tr>
            <td class="table-ratings__place">${i}.</td>
            <td class="table-ratings__user" colspan="2">${rating.userName}</td>
            <td class="table-ratings__time">${formatTime(rating.time)}</td>
            <td class="table-ratings__score">${rating.score}</td>
          </tr>`;
        i += 1;
      });
    }
    container.innerHTML = `
    <table class="table-ratings">
      <thead>
        <tr>
          <th colspan="3">Пользователь</th>
          <th>Время</th>
          <th>Очки</th>
        </tr>
      </thead>
      <tbody>
        ${tableRow}
      </tbody>
    </table>`;
  }

  private async renderUserRatingByGame(gameId: number) {
    const gameRat = this.ratings?.bestGameResults?.get(gameId);
    const dataGame = getDataGame(gameId);
    const container = getElement('.container__description');
    let tableRow = '';
    if (gameRat) {
      let i = 1;
      gameRat.forEach((rating) => {
        tableRow += `
          <tr>
            <td class="table-ratings__place">${i}.</td>
            <td class="table-ratings__user" colspan="2">${rating.userName}</td>
            <td class="table-ratings__score">${rating.score}</td>
          </tr>`;
        i += 1;
      });
    }
    container.innerHTML = `
    <h3>${dataGame.nameGameRu}</h3>
    <table class="table-ratings table-ratings__popup">
      <thead>
        <tr>
          <th colspan="3">Пользователь</th>
          <th>Очки</th>
        </tr>
      </thead>
      <tbody>
        ${tableRow}
      </tbody>
    </table>`;
  }

  addListenerGroupFilter(): void {
    const filter = getElement('.categories-rating');
    const ratingContainer = getElement('.rating-container');
    filter.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const group = event.target.closest('.filter-item-rating');
      if (!(group instanceof HTMLElement)) return;
      const { categoryId } = group.dataset;
      if (categoryId === 'fame') {
        ratingContainer.classList.remove('rating-flex');
        this.renderHallOfFame();
      } else {
        ratingContainer.classList.add('rating-flex');
        this.renderGames(Number(categoryId));
      }
    });
  }

  async addListenerShowGameRatings(): Promise<void> {
    const resultBtns = document.querySelectorAll('.button_rating_show');
    for (let i = 0; i < resultBtns.length; i += 1) {
      const btn = resultBtns[i];
      if (!(btn instanceof HTMLElement)) return;
      btn.addEventListener('click', () => {
        const gameId = Number(btn.dataset.gameId);
        this.renderUserRatingByGame(gameId);
        getElement('.popap').classList.toggle('hidden_popap');
        getElement('.body-background-shaddow-description').classList.toggle('hidden_desc');
      });
    }
  }

  addListenerPopupControll() {
    const gameRulesArea = getElement('.body-background-shaddow-description');
    gameRulesArea.addEventListener('click', () => {
      getElement('.popap').classList.toggle('hidden_popap');
      getElement('.body-background-shaddow-description').classList.toggle('hidden_desc');
    });
    const close = getElement('.close');
    close.addEventListener('click', () => {
      getElement('.popap').classList.toggle('hidden_popap');
      getElement('.body-background-shaddow-description').classList.toggle('hidden_desc');
    });
  }
}
