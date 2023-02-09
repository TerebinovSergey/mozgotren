import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class TrenagorsPage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    TrenagorsPage.drawMain();
    const footer = new FooterView();
    footer.draw();
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
    <div class="body-background-shaddow" onclick="document.querySelector('.nav-aside')?.classList.toggle('active'); 
document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
document.querySelector('.open')?.classList.toggle('hidden1');
document.querySelector('.close')?.classList.toggle('hidden1');
"></div>
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
            <div class="filter-item">
              <span class="filter-item__group-name">Тренировка памяти</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item">
              <span class="filter-item__group-name">Тренировка внимания</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">9</span>
              </div>
            </div>
            <div class="filter-item">
              <span class="filter-item__group-name">Тренировка мышления</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item">
              <span class="filter-item__group-name">Тренировка эрудиции</span>
              <div class="filter-item__count-img">
                <span class="filter-item__count">8</span>
              </div>
            </div>
            <div class="filter-item">
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
        </div>
      </section>
    </div>`;
  }
}
