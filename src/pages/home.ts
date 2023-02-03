import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class HomePage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    HomePage.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow"></div>
    <section class="main-header  main-background">
      
      <div class="container">
        <h1 class="main-header-title">
        <span class="underline"></span>
        <div class="title-link title-main">
          <span>M</span>
          <span>O</span>
          <span>Z</span>
          <span>G</span>
          <span>O</span>
          <span>T</span>
          <span>R</span>
          <span>E</span>
          <span>N</span>
        </div>
        <span class="underline"></span>
        </h1>
        <p class="main-header-trenagors paragraph">
          Тренажеры для мозга.<br />Тренировка памяти,<br />внимания и
          мышления.
        </p>
        <p class="main-header-brain paragraph">
          ЗАСТАВЬ СВОЙ МОЗГ РАБОТАТЬ БЫСТРЕЕ!
        </p>
        <a class="train-brain" href="/trening">Тренировать мозг</a>
      </div>
    </section>
    <div class="container">
      <section id="about-us" class="about-us">
        <div class="title-wrapper">
          <h2 class="about-us-title">Развитие мозга</h2>
          <img class="under-img" src="./assets/line-break-blue.svg" alt="" />
        </div>
        <p class="about-us-description paragraph">
          С помощью наших тренажеров для ума вы легко сможете улучшить ваши
          умственные<br />способности качество работы мозга в разных
          направлениях.
        </p>
        <div class="about-us-categories">
          <div class="category category__memory">
            <div class="category-item__point">
              <img class="category-item__img" src="./assets/diskette.svg" alt="memory" />
            </div>

            <h3 class="category-item__title">Память</h3>
            <p class="category-item__paragraph paragraph">
              Тренировка памяти это одно из важнейших задач для мозга. Имея
              хорошую память вы с легкостью и за короткое время сможете
              осваивать любые навыки и даже профессию.
            </p>
          </div>
          <div class="category category__attention">
            <div class="category-item__point">
              <img class="category-item__img" src="./assets/loupe.svg" alt="memory" />
            </div>
            <h3 class="category-item__title">Внимание</h3>
            <p class="category-item__paragraph paragraph">
              Научившись концентрировать внимание вы сможете эффективно,
              безошибочно и с большой скоростью выполнять любые сложные
              задачи.
            </p>
          </div>
          <div class="category category__thinking">
            <div class="category-item__point">
              <img class="category-item__img" src="./assets/thinking.svg" alt="memory" />
            </div>
            <h3 class="category-item__title">Мышление</h3>
            <p class="category-item__paragraph paragraph">
              Тренажеры для развития мышления
              ускорят работу мозга и его
              вычеслитетельные способности.
              Научитесь в уме быстро выполнять
              сложные арифметические операции.
            </p>
          </div>
      </section>
    </div>`;
  }
}
